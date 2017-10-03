import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';


import {MenuModule} from 'app/components/menu/menu.module';
import {FooterModule} from 'app/components/footer/footer.module';

import {TRANSLATION_PROVIDERS}   from 'app/core/language/lang';
import {ApplicationModel} from 'app/core/models/application.model';
import {AppRouter} from 'app/core/router/app.router';
import {TranslateService}   from 'app/core/services/language.service';
import {GeneralService} from 'app/core/services/general.service';
import {SharedModule} from 'app/core/shared/shared.module';



import {AppComponent}  from 'app/core/app.component';

@NgModule({
  imports: [FooterModule, MenuModule, FormsModule, BrowserModule, HttpModule, JsonpModule, SharedModule, AppRouter],
  providers: [TRANSLATION_PROVIDERS, TranslateService, GeneralService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  model = (attributes: Object, options: Object)=>{
    return new ApplicationModel(attributes, options);
  }
}
