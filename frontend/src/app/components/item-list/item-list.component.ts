import {Component, Input} from '@angular/core';
import {ItemListModel} from "./models/item-list.model";


@Component({
  selector: 'item-list-component',
  templateUrl: './templates/item-list.component.html',
  styleUrls: ['./assets/item-list.component.css']
})
export class ItemListComponent{
  @Input() setup: ItemListModel = null;
  constructor() {
  }
}
