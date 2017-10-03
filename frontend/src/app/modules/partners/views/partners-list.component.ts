import { Router }           from '@angular/router';
import { Component }        from '@angular/core';
import { Inject }           from '@angular/core';
import { TranslateService } from 'app/core/services/language.service';
import { GeneralService }   from 'app/core/services/general.service';
import { InputModel }       from 'app/components/input/models/input.model';
import { ItemListModel }    from 'app/components/item-list/models/item-list.model';
import { SelectModel }      from "app/components/select/models/select.model";
import { OptionModel }      from "app/components/select/models/option.model";
import { ButtonModel }      from "app/components/button/models/button.model";
import { TRANSLATIONS }     from 'app/modules/partners/assets/language/lang';


@Component({
    selector:    'partners-list-module',
    templateUrl: 'app/modules/partners/views/templates/partners-list.component.html'
})
export class PartnersListComponent {

    addButton: ButtonModel;
    error: string;
    itemListSetup: ItemListModel;
    searchButton: ButtonModel;
    searchInput: InputModel;
    searchOptions: Array<OptionModel>;
    searchSelect: SelectModel;
    translate: TranslateService;

    constructor(@Inject(TRANSLATIONS) private _translations: any, private router: Router, private GeneralService: GeneralService) {

      this.setup();
    }

    setup = () => {
      this.translate = new TranslateService(this._translations);

      this.searchInput = new InputModel(this.translate.instant('search-error'), null, 'lg_search',
        this.translate.instant('partner_search'), '', 'partner_search',
        this.translate.instant('partner_search'), false, 'text');

      this.searchButton = new ButtonModel(this.translate.instant('search'),
        'submit', 'btn-primary', 'btn-md', true);

      this.addButton = new ButtonModel(this.translate.instant('add-partner'),
        'submit', 'btn-primary', 'btn-md', false);

      this.searchOptions = [
        new OptionModel(this.translate.instant('search-field'), ''),
        new OptionModel(this.translate.instant('search-name'), 'name')
      ];

      this.searchSelect = new SelectModel(null, null, 'search_field',
        this.translate.instant('search-field-label'), '', 'search_field', this.searchOptions, false);

      this.itemListSetup = null;

    }

    addPartner() {
        this.router.navigate(['partners/form']);
    }

    searchPartner() {
        let searchOptions: Object = {
            search: this.searchInput.model,
            field: this.searchSelect.model
        };
        console.log(searchOptions);
        this.GeneralService.apiCall('get', 'partners', searchOptions).subscribe((Response: any) => this.onGetPartners(Response), (Error: any) => this.onError(Error));
    }

    onGetPartners(response: any) {
        this.error = null;
        console.log('response----------->', response);
    }


    onError(error: any) {
        this.error = this.translate.instant(error._body);
    }

    onInputChange() {
        if (this.searchInput.model && this.searchInput.model.length > 0) {
            this.searchButton.disabled = false;
        }
        else {
            this.searchButton.disabled = true;
        }
    }

}


