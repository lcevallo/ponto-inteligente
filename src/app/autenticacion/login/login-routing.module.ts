import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent, LugarComponent} from './components';


export const LoginRoutes : Routes = [
  {
    path: 'login',
    component: LugarComponent,
    children : [{path: '', component: LoginComponent }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
