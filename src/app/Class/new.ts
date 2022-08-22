export class New {
    private _newId: number;
    private _categoryName: Array<String>;
    private _dateTime: String;
    private _chapterTitle: String;
    private _textBold: String;
    private _mainContent: String;
    private _postLink: Array<String>;
    private _ImageAuthor: String;
    private _authorname: String;

    get newId(): number {
        return this._newId;
    }

    set newId(value: number) {
        this._newId = value;
    }

    get categoryName(): Array<String> {
        return this._categoryName;
    }

    set categoryName(value: Array<String>) {
        this._categoryName = value;
    }

    get dateTime(): String {
        return this._dateTime;
    }

    set dateTime(value: String) {
        this._dateTime = value;
    }

    get chapterTitle(): String {
        return this._chapterTitle;
    }

    set chapterTitle(value: String) {
        this._chapterTitle = value;
    }

    get textBold(): String {
        return this._textBold;
    }

    set textBold(value: String) {
        this._textBold = value;
    }

    get mainContent(): String {
        return this._mainContent;
    }

    set mainContent(value: String) {
        this._mainContent = value;
    }

    get postLink(): Array<String> {
        return this._postLink;
    }

    set postLink(value: Array<String>) {
        this._postLink = value;
    }

    get ImageAuthor(): String {
        return this._ImageAuthor;
    }

    set ImageAuthor(value: String) {
        this._ImageAuthor = value;
    }

    get authorname(): String {
        return this._authorname;
    }

    set authorname(value: String) {
        this._authorname = value;
    }

    constructor() {
    }

}
