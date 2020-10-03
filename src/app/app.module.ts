import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryList } from './country-list.component/country-list.component.component';
import { CountryDetails } from './country-details.component/country-details.component.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryList.ComponentComponent,
    CountryDetails.ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
