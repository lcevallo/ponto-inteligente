import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastrarPjComponent, CadastroPjComponent} from './components';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {CadastroPjService} from './services';




@NgModule({
  declarations: [CadastrarPjComponent, CadastroPjComponent ],
  providers: [CadastroPjService],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class CadastroPjModule { }
