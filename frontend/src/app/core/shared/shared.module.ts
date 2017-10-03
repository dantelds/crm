import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe }   from './pipes/lang.pipe';


@NgModule({
    declarations:[TranslatePipe],
    exports: [TranslatePipe, FormsModule, CommonModule]
})
export class SharedModule {

}



