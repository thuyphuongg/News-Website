const rp = require("request-promise");
const cheerio = require("cheerio");
const request = require('request');
const fs = require("fs");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//file chứa ds link
const dslink = "listLink.txt";

//lưu danh sách link thành mảng
var arrayLink = fs.readFileSync(dslink).toString().split("\n");

async function crawler() {
    await sleep(1000);
    for (i in arrayLink) {
        const linkchay = arrayLink[i];

        try {
            const options = {
                uri: linkchay,
                transform: function (body) {
                    //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
                    return cheerio.load(body);
                },
            };
            var $ = await rp(options);
        } catch (error) {
            console.log("Link dang dung:" + arrayLink[i]);
            return error;
        }

        /* Lấy tên bài viết*/
        // const title = $("newsFeature__header").text().trim();
        //const description = $(".entry-content > p").text().trim();

        //kiếm class hoặc id cha chứa nội dung website
        const tableContent = $(".newsFeature__header");
        let data = [];
        // Tên của chương đó.
        let chapterTitle = tableContent.find("h1").text().trim();


        //Tìm hình ảnh trong bài viết
        let namefile = "";
        let chapterData = []
        const chapterLink = tableContent.find("h1").find("img");

        for (let j = 0; j < chapterLink.length; j++) {
            const post = $(chapterLink[j]);
            const postLink = post.attr("src");
            //lấy vị trí thứ tự để chúng ta biết mà cắt lấy name của hình ảnh
            const n = postLink.lastIndexOf("/");
            //lấy name hình ảnh
            const filename = postLink.substring(n + 1, postLink.length);
            namefile = filename;
            //tiến hành chèn url hình và name hình vào hàm download
            download(postLink, filename, function () {
                //console.log("Link:"+linkchay);
            });
            const postTitle = post.text().trim();
            chapterData.push({
                postTitle,
                linkchay,
                filename,
            });
        }
        data.push({
            chapterTitle,
            chapterData,

        });


        // Lưu dữ liệu về máy
        fs.writeFileSync('data.json', JSON.stringify(data))
        console.log(linkchay + "------------->done");

        await sleep(1000);
    }


};
//call crawler
crawler();

//call download file
var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream('./images/' + filename)).on('close', callback);
    });
};
