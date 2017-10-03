import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ButtonModel} from "./models/button.model";


@Component({
  selector: 'button-component',
  templateUrl: './templates/button.component.html',
  styleUrls: ['./assets/button.component.css']
})
export class ButtonComponent{
  @Input() setup: ButtonModel = null;
  @Output() onButtonClicked: EventEmitter<ButtonModel> = new EventEmitter<ButtonModel>();
  constructor() {
  }
  onClick(button:ButtonModel){
    this.onButtonClicked.emit(button);
  }
}
