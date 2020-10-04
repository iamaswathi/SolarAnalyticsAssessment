import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [
  { path: 'countries', redirectTo: '/countries' },
  { path: 'country/:name', redirectTo: '/country/:name' },
  { path: 'countries',  component: CountryListComponent, data: { animation: 'countries' } },
  { path: 'country/:name', component: CountryDetailsComponent, data: { animation: 'country' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
