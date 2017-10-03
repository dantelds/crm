import {Injectable} from '@angular/core';


@Injectable()
export class PartnerService {
    private _partner:Object;

  constructor() {
  }

  get partner(): Object {
    return this._partner;
  }

  set partner(value: Object) {
    this._partner = value;
  }  
}
