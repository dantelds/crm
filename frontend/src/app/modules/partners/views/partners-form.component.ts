import { Component } from '@angular/core';
import { PartnerService }     from '../services/partner-service';

@Component({
  selector:    'partners-forms-module',
  templateUrl: 'app/modules/partners/views/templates/partners-form.component.html'
})
export class PartnersFormComponent {
  field: Array<String> = [
    "partner-name",
    "partner-lastname",
    "partner-id",
    "partner-phone",
    "partner-optional-phone",
    "partner-nif",
    "partner-email",
    "partner-date-inscription",
    "partner-date-retirement",
    "partner-birthdate",
    "partner-servimedico",
    "partner-beneficiarie",
    "partner-address",
    "partner-substate",
    "partner-state",
    "partner-dp",
    "partner-iban",
    "partner-entity",
    "partner-office",
    "partner-dc",
    "partner-account"
  ];

  constructor(private PartnerService: PartnerService){

  }

}


