import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtratosComponent } from './components/extratos/extratos.component';

const routes: Routes = [
  {
    path: 'extrato-lancamentos',
    component: ExtratosComponent,
  },
  {
    path: '',
    redirectTo: 'extrato-lancamentos',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtratoLancamentosRoutingModule { }
