export class Category {
    private _categoryID: number;
    private _categoryName: string;
    private _categorySubName: Array<string>;

    constructor() {
    }

    get categoryID(): number {
        return this._categoryID;
    }

    set categoryID(value: number) {
        this._categoryID = value;
    }

    get categoryName(): string {
        return this._categoryName;
    }

    set categoryName(value: string) {
        this._categoryName = value;
    }

    get categorySubName(): Array<string> {
        return this._categorySubName;
    }

    set categorySubName(value: Array<string>) {
        this._categorySubName = value;
    }
}
