import {NgModule}           from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'app/core/shared/shared.module';
import {ImageComponent} from "./image.component";


@NgModule({
  imports:[CommonModule, SharedModule],
  declarations:[ImageComponent],
  exports:[ImageComponent],
})
export class ImageModule {
  constructor(){
  }
}
