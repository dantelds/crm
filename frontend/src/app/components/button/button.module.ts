import {NgModule} from '@angular/core';
import {ButtonComponent} from 'app/components/button/button.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'app/core/shared/shared.module';


@NgModule({
  imports:[CommonModule, SharedModule],
  declarations:[ButtonComponent],
  exports:[ButtonComponent],
})
export class ButtonModule {
  constructor(){
  }
}
