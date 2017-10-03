import {Component} from '@angular/core';
import {GeneralService} from 'app/core/services/general.service';
import {TranslateService} from 'app/core/services/language.service';
import {Inject} from '@angular/core';
import {TRANSLATIONS} from 'app/core/language/lang';
import {Router} from '@angular/router';
import {LinkModel} from 'app/components/link/models/link.model';
import {FooterModel} from 'app/components/footer/models/footer.model';
@Component({
  selector: 'my-app',
  templateUrl: 'app/core/templates/app.component.html'
})
export class AppComponent {
  _translate: TranslateService;
  menuLinks: LinkModel[];

  footer: FooterModel;

  private setFooter = () => {
    this.footer = new FooterModel(null, this._translate.instant('copyright'));
  }

  private setLinks = () => {
    this.menuLinks = [
      new LinkModel('nav-link', 'partners', this._translate.instant('menu-partners')),
      new LinkModel('nav-link', 'partners', this._translate.instant('menu-partners')),
      new LinkModel('nav-link', 'partners', this._translate.instant('menu-partners')),
      new LinkModel('nav-link', 'partners', this._translate.instant('menu-partners'))
    ];
  }

  constructor(@Inject(TRANSLATIONS) private _translations: any, private GeneralService: GeneralService, private router: Router) {
    this._translate = new TranslateService(_translations);
    this.setFooter();
    this.setLinks();
    this.router.navigate(['/login']);
    this.createLoginListener();
  }

  private createLoginListener() {
    this.GeneralService.loginManagerEmmiter$.subscribe(() => {
      this.onUserLogin();
    });
  }

  private onUserLogin() {
    this.router.navigate(['/partners']);
  }


  onModuleClicked(module: LinkModel) {
  }


}
