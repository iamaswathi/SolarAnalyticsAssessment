import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { Country } from '../../common/country';
import { COUNTRYCODEANDNAMES } from '../../common/common.constants';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() selectedCountry: Country;
  country: Country;
  countries: Country[];
  countryCodeAndNameList: JSON;
  errorApi = false;
  loading = false;
  borderCountries = [];

  constructor(
    private _countryService: CountryService,
    private _aRoute: ActivatedRoute,
    private _location: Location,) { }

  ngOnInit(): void {
    console.log(this.selectedCountry);
    this._aRoute.params.subscribe(param => {  
      this.getSelectedCuntryData(param.name);
    });
  }

  /**
   * getSelectedCuntryData - fetch a particular country's data based on the country name
   * @param countryName 
   */
  getSelectedCuntryData (countryName) {
    this.loading = true;
    this._countryService.getCountryByName(countryName).subscribe(
      (success) => {
      if(success)
      this.selectedCountry = success[0];
      if(this.selectedCountry.borders) {
        for (let i=0; i<this.selectedCountry.borders.length; i++) {
            this.borderCountries.push(COUNTRYCODEANDNAMES[this.selectedCountry.borders[i]])
          }
          this.selectedCountry.borders = [];
          this.selectedCountry.borders = this.borderCountries.sort();
          this.borderCountries = [];
          this.loading = false;
      }
    },
    (error) => {
      this.errorApi = true;
      console.log('Error state from API: ', error)}
    );
  }

  /**
   * To go back to the previous screen
   */
  goBack(): void {
    this._location.back();
  }

}
