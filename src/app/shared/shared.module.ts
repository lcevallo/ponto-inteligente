import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MascaraDirective } from './directives/mascara.directive';


@NgModule({
  declarations: [MascaraDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MascaraDirective
  ]
})
export class SharedModule { }
