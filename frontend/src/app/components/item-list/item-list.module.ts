import {NgModule}           from '@angular/core';
import {ItemListComponent} from './item-list.component';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'app/core/shared/shared.module';


@NgModule({
  imports:[CommonModule, SharedModule],
  declarations:[ItemListComponent],
  exports:[ItemListComponent],
})
export class ItemListModule {
  constructor(){
  }
}
