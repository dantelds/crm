export class ItemListModel {
    private _rows: [Object];
    private _headers: [Object];

    constructor(rows: [Object], headers:[Object]) {
        this._rows = rows;
        this._headers = headers;
    }
    get rows(): [Object] {
        return this._rows;
    }

    set rows(value: [Object]) {
        this._rows = value;
    }
    
    get headers(): [Object] {
        return this._headers;
    }

    set headers(value: [Object]) {
        this._headers = value;
    }
}