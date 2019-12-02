import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoLancamentosRoutingModule } from './extrato-lancamentos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ExtratosComponent } from './components/extratos/extratos.component';

@NgModule({
  declarations: [
    ExtratosComponent
  ],
  imports: [
    CommonModule,
    ExtratoLancamentosRoutingModule,
    SharedModule,
  ]
})
export class ExtratoLancamentosModule { }
