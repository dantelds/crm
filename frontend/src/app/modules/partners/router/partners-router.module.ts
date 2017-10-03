import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { PartnersComponent }    from '../views/partners.component';
import { PartnersListComponent }    from '../views/partners-list.component';
import { PartnersFormComponent }     from '../views/partners-form.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PartnersComponent, children:[
        { path: '', component: PartnersListComponent },
        { path: 'form', component: PartnersFormComponent }
    ]},
  ])],
  exports: [RouterModule]
})
export class PartnersRouterModule {}

