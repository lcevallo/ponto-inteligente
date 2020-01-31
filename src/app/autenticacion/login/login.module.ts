import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components';
import { LugarComponent } from './components/lugar.component';
import { LoginRoutingModule } from './login-routing.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginService} from './services';


@NgModule({
  declarations: [LoginComponent, LugarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
