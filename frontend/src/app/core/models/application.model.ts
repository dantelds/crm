import { GeneralService } from 'app/core/services/general.service';

export class ApplicationModel {

  private _attributes: Object;
  private _options: Object;
  private _changed: Boolean;
  private _previousAttributes: Object = {};
  private GeneralService: GeneralService;

  private defaultOptions: Object = {
    endpoint: 'http://localhost:3000/api/' + this.getEndpoint(),
    validate: true
  };

  constructor(attributes: Object, options: Object) {
    this._attributes = attributes;
    this._options = Object.assign(this.defaultOptions, options);
  }

  private apiCall(action: string, body: Object) {
    return this.GeneralService.apiCall(action, this._options['endpoint'], body);
  }

  public changed(): Boolean {
    return this._changed;
  }

  public clear() {
    this.onChange();
    this._attributes = {};
  }

  public destroy() {
    this.apiCall('delete', { id: this._attributes['id'] }).subscribe((Response: any) => this.onSuccess(Response), (Error: any) => this.onError(Error));
  }

  public fetch() {
    this.apiCall('get', { id: this._attributes['id'] }).subscribe((Response: any) => this.onSuccess(Response), (Error: any) => this.onError(Error));
  }

  public get(key: string): any {
    return this._attributes[key];
  }

  public getDataToSend(): Object {
    return this._attributes;
  }

  private getEndpoint(): string {
    return (/function (.{1,})\(/).exec((this).constructor.toString())[1].split("Model")[0].toLowerCase();
  }

  public has(key: string): Boolean {
    return this._attributes[key] != null;
  }

  public isNew(): Boolean {
    return this.has('id');
  }

  public isValid(): Boolean {
    return this.validate();
  }

  public previous(key: string) {
    return this._previousAttributes[key];
  }

  public set(key: string, val: any) {
    if (this._attributes['key'] != val) {
      this.onChange();
    }
    this._attributes[key] = val;

  }

  private onChange() {
    this._changed = true;
    this._previousAttributes = Object.assign({}, this._attributes);
  }

  private onError(error: Object) {
    console.log('soy el error', error);
  }

  private onSuccess(response: Object) {
    console.log('soy el success', response);
  }

  public save() {
    if (!this.isValid()) {
      return false;
    }
    let action: string = this.has('id') ? 'put' : 'post';
    this.apiCall(action, this.getDataToSend()).subscribe((Response: any) => this.onSuccess(Response), (Error: any) => this.onError(Error));
  }

  public unset(key: string) {
    delete this._attributes[key];
  }

  public validate(): Boolean {
    if (this._options['validate']) {
      for (var key in this._attributes) {
        if (this._attributes[key] == null) {
          return false;
        }
      }
    }
    return true;
  }
}
