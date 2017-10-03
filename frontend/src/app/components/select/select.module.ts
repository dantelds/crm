import {NgModule}           from '@angular/core';
import {SelectComponent} from './select.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'app/core/shared/shared.module';


@NgModule({
  imports:[CommonModule, SharedModule],
  declarations:[SelectComponent],
  exports:[SelectComponent],
})
export class SelectModule {
  constructor(){
  }
}
