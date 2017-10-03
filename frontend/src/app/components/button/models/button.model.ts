/**
 * Created by David on 13/04/2017.
 */
export class ButtonModel {
  private _text: string;
  private _type: string;
  private _styleClass: string;
  private _sizeClass: string;
  private _disabled: boolean;

  constructor(text: string, type: string, styleClass: string, sizeClass: string, disabled: boolean) {
    this._text = text;
    this._type = type;
    this._styleClass = styleClass;
    this._sizeClass = sizeClass;
    this._disabled = disabled;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
  
  get styleClass(): string {
    return this._styleClass;
  }

  set styleClass(value: string) {
    this._styleClass = value;
  }

  get sizeClass(): string {
    return this._sizeClass;
  }

  set sizeClass(value: string) {
    this._sizeClass = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

}
