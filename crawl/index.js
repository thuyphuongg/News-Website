const rp = require("request-promise");
const cheerio = require("cheerio");
const request = require('request');
const fs = require("fs");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//file chứa ds link
const dslink = "listLinkChinhTriThoiSu.txt";

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
        const contentTextBold = $(".newFeature__main-textBold");
        let textBold = contentTextBold.text().trim();
        const contentMain = $(".maincontent");
        let mainContent = contentMain.find("p").text().trim();


        //Tìm hình ảnh trong bài viết
        let namefile = "";
        let chapterData = [];
        const chapterLink = contentMain.find("figure").find("img");

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
            const postTitle = contentMain.find("figcaption").text().trim();
            chapterData.push({
                postTitle,
                linkchay,
                filename,
            });
        }
        let namefile2 = "";
        let chapterData2 = [];
        const chapterLink2 = contentMain.find("td").find("img");

        for (let j = 0; j < chapterLink2.length; j++) {
            const post2 = $(chapterLink2[j]);
            const postLink2 = post2.attr("src");
            //lấy vị trí thứ tự để chúng ta biết mà cắt lấy name của hình ảnh
            const n2 = postLink2.lastIndexOf("/");
            //lấy name hình ảnh
            const filename2 = postLink2.substring(n2 + 1, postLink2.length);
            namefile2 = filename2;
            //tiến hành chèn url hình và name hình vào hàm download
            download(postLink2, filename2, function () {
                //console.log("Link:"+linkchay);
            });

            chapterData2.push({
                linkchay,
                filename2,
            });
        }
        data.push({
            chapterTitle,
            textBold,
            mainContent,
            chapterData,
            chapterData2,

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
