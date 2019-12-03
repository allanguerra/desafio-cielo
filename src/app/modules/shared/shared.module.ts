import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionComponent } from './components/app-section/app-section.component';
import { CardExtratoComponent } from './components/card-extrato/card-extrato.component';

@NgModule({
  declarations: [
    AppSectionComponent,
    CardExtratoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppSectionComponent,
    CardExtratoComponent
  ]
})
export class SharedModule { }
