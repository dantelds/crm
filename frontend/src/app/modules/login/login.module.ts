import { NgModule }               from '@angular/core';
import { SharedModule }           from 'app/core/shared/shared.module';
import { InputModule }            from 'app/components/input/input.module';
import { ImageModule }            from 'app/components/image/image.module';
import { ButtonModule }           from 'app/components/button/button.module';
import { LoginRouterModule }      from 'app/modules/login/router/login-router.module';
import { LoginComponent }         from 'app/modules/login/views/login.component';
import { TRANSLATION_PROVIDERS }  from 'app/modules/login/assets/language/lang';

@NgModule({
  declarations: [ LoginComponent ],
  providers: [ TRANSLATION_PROVIDERS ],
  imports: [ LoginRouterModule, InputModule, SharedModule, ImageModule, ButtonModule ]
})
export class LoginModule {
}
