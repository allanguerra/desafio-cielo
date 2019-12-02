import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionComponent } from './components/app-section/app-section.component';

@NgModule({
  declarations: [
    AppSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppSectionComponent
  ]
})
export class SharedModule { }
