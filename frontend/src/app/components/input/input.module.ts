import {NgModule}           from '@angular/core';
import {InputComponent} from './input.component';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'app/core/shared/shared.module';


@NgModule({
  imports:[CommonModule, SharedModule],
  declarations:[InputComponent],
  exports:[InputComponent],
})
export class InputModule {
  constructor(){
  }
}
