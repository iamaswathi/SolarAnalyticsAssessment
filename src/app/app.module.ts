import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryService } from './services/country.service';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterPipe } from '../app/utils/pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../app/common/theme/theme.module';
import { lightTheme } from '../app/common/theme/light-theme';
import { darkTheme } from '../app/common/theme/dark-theme';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailsComponent,
    HeaderComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'lightTheme'
    })
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
