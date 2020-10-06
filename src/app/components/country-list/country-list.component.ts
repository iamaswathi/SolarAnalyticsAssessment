import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../common/country';
import Utils from 'src/app/utils/utils';
import { NAME, COUNTRYCODE3 } from '../../common/common.constants';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  selectedCountry: Country;
  regionSearch: any;
  countrySearch: any;
  regions: string[];
  errorApi = false;
  loading = false;
  countryCodeAndNameList: any;
  borderCountries = [];


  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  /**
   * getCountries - subscibes to the list of countries returned from the server
   */
  getCountries(): void {
    this.loading = true;
    this._countryService.getCountriesList().subscribe(
      (success) => {
      if(success)
      this.countries = success;
      this.loading = false;

      // Fetching the list of regions
      if(this.countries) {
        this.getRegionsList(this.countries);
        this.countryCodeAndNameList = Utils.makeKeyValueJson(this.countries, COUNTRYCODE3, NAME);
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
    // Filtering unique regions from the overall regions,
    // to display unique regions in the filter dropdown
    this.regions = Utils.getUniqueValues(temp);
  }

}
