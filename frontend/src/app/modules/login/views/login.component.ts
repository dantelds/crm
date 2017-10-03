import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { GeneralService } from 'app/core/services/general.service';
import { TranslateService } from 'app/core/services/language.service';
import { InputModel } from 'app/components/input/models/input.model';
import { ImageModel } from 'app/components/image/models/image.model';
import { ButtonModel } from 'app/components/button/models/button.model';
import { TRANSLATIONS } from 'app/modules/login/assets/language/lang';

@Component({
  selector:    'login-component',
  templateUrl: 'app/modules/login/views/templates/login.component.html',
  styleUrls: [ 'app/modules/login/assets/css/login.component.css' ]
})
export class LoginComponent {

  translate: TranslateService;
  error: string;
  loginButton: ButtonModel;
  logo: ImageModel;
  passwordInput: InputModel;
  userInput: InputModel;

  constructor(@Inject(TRANSLATIONS) private _translations: any, private GeneralService: GeneralService) {
    this.setup();
    if (this.GeneralService.token) {
      this.GeneralService.loginManagerEmmit(this.GeneralService.token);
    }
  }

  setup = () => {
    this.translate = new TranslateService(this._translations);
    this.logo =  new ImageModel('logo', '', '/images/logo.png');
    this.loginButton = new ButtonModel(this.translate.instant('user-login'), 'submit', 'btn-primary', 'btn-md', true);
    this.userInput = new InputModel(this.translate.instant('user-username-required'), null, 'lg_username',
      this.translate.instant('user-username'), '', 'lg_username', this.translate.instant('user-username'), true, 'text');
    this.passwordInput = new InputModel(this.translate.instant('user-password-required'), null, 'lg_password',
      this.translate.instant('user-password'), '', 'lg_password', this.translate.instant('user-password'), true, 'password');
  }

  login = () => {
    var body: Object = {
      username: this.userInput.model,
      password: Md5.hashStr(this.passwordInput.model).toString()
    };
    this.GeneralService.apiCall('post', 'login', body).subscribe((Response: any) => this.onLogin(Response), (Error: any) => this.onError(Error));
  }


  onLogin = (Response: any) => {
    this.error = null;
    this.GeneralService.token = Response.token;
    this.GeneralService.loginManagerEmmit(Response.token);
  }


  onError = (error: any) => {
    this.passwordInput.model = '';
    this.error = this.translate.instant(error._body);
  }


  onInputChange = () => {
    if(this.userInput.model && this.userInput.model.length > 0 && this.passwordInput.model &&  this.passwordInput.model.length > 0){
      this.loginButton.disabled = false;
    }
    else{
      this.loginButton.disabled = true;
    }
  }

}
