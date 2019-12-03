import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';

import localePT from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
