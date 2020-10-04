import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../common/country';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  selectedCountry: Country;
  regionSearch;
  countrySearch;
  regions: string[];
  errorApi = false;
  loading = false;


  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  /**
   * getCountries - subscibes to the list of countries returned from the server
   */
  getCountries(): void {
    this._countryService.getCountriesList().subscribe(
      (success) => {
      this.loading = true;
      if(success)
      this.countries = success;
      // console.log(this.countries);
      this.loading = false;

      // Fetching the list of regions
      if(this.countries) {
        this.getRegionsList(this.countries);
      }
    },
    (error) => {
      this.errorApi = true;
      console.log('Error state from API: ', error)}
    );
  }

  /**
   * getRegionsList - fetch unique regions from the countries list
   * @param countriesList 
   */
  getRegionsList(countriesList) {
    let temp = [];
    countriesList.forEach(function (value) {
      temp.push(value.region);
    });
    // Filtering unique regions from the overall regions
    this.regions = Utils.getUniqueValues(temp);
    // console.log('Regions -> ', this.regions);
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
    console.log(this.selectedCountry);
  }

}
