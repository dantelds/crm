import { NgModule }               from '@angular/core';
import { SharedModule }           from 'app/core/shared/shared.module';
import { ItemListModule }         from 'app/components/item-list/item-list.module';
import { InputModule }            from 'app/components/input/input.module';
import { SelectModule }           from 'app/components/select/select.module';
import { ButtonModule }           from 'app/components/button/button.module';
import { PartnerService }         from 'app/modules/partners/services/partner-service';
import { PartnersRouterModule }   from 'app/modules/partners/router/partners-router.module';
import { TRANSLATION_PROVIDERS }  from 'app/modules/partners/assets/language/lang';
import { PartnersComponent }      from 'app/modules/partners/views/partners.component';
import { PartnersListComponent }  from 'app/modules/partners/views/partners-list.component';
import { PartnersFormComponent }  from 'app/modules/partners/views/partners-form.component';
@NgModule({
  declarations: [PartnersComponent, PartnersListComponent, PartnersFormComponent],
  providers: [PartnerService, TRANSLATION_PROVIDERS],
  imports: [PartnersRouterModule, ItemListModule, InputModule, SelectModule, ButtonModule, SharedModule]
})
export class PartnersModule {}
