import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [{  
  path: 'countrydetail/:name',  
  component: CountryDetailsComponent  
  }, {  
    path: '',  
    component: CountryListComponent  
 }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
