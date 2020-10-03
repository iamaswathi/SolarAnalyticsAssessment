import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../common/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  selectedCountry: Country;
  searchText;

  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this._countryService.getCountriesList()
    .subscribe(countries => {
      this.countries = countries;
      console.log(this.countries);
    });
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
    console.log(this.selectedCountry);
  }

}
