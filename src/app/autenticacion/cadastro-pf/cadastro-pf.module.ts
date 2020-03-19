import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPfRoutingModule } from './cadastro-pf-routing.module';
import {CadastrarPfComponent, CadastroPfComponent} from './components';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {CadastrarPfService} from './services';


@NgModule({
  declarations: [CadastrarPfComponent, CadastroPfComponent],
  imports: [
    CommonModule,
    CadastroPfRoutingModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [CadastrarPfService]
})
export class CadastroPfModule { }
