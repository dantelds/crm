import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { LoginComponent } from 'app/modules/login/views/login.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LoginComponent }
  ])],
  exports: [RouterModule]
})
export class LoginRouterModule {}
