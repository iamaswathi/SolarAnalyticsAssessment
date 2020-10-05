import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CountryService } from '../../services/country.service';
import { Country } from '../../common/country';
import Utils from '../../utils/utils';
import { NAME, COUNTRYCODE3 } from '../../common/common.constants';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;
  countries: Country[];
  selectedCountry: Country;
  countryCodeAndNameList: JSON;
  boderCountries = [];

  constructor(
    private _countryService: CountryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,) { }

  ngOnInit(): void {
    this.getCountry();
    this.getCountries();
  }
  getCountries(): void {
    this._countryService.getCountriesList().subscribe(
      (success) => {
      if(success)
      this.countries = success;
      this.selectedCountry = this.countries[0];
      if(this.countries) {
        this.countryCodeAndNameList = Utils.makeKeyValueJson(this.countries, COUNTRYCODE3, NAME);
      }
      if(this.selectedCountry) {
        for (let i=0; i<this.selectedCountry.borders.length; i++) {
            this.boderCountries.push(this.countryCodeAndNameList[this.selectedCountry.borders[i]])
        }
        this.boderCountries = this.boderCountries.sort();
        console.log('.boderCountries -> ', this.boderCountries);
      }
    },
    (error) => {
      console.log('Error state from API: ', error)}
    );
  }

  getCountry(): void {
    const name = this._route.snapshot.paramMap.get('name');
    this._countryService.getCountryByName('Belgium')
      .subscribe(country => {
        this.country = country;
        console.log(this.country);
        if(this.country) {
          for (let i=0; i<this.country.borders.length; i++) {
            // if(this.country.borders[i] === ) {
              this.boderCountries.push(this.countryCodeAndNameList[this.country.borders[i]])
            // }
          }
          console.log('.boderCountries -> ', this.boderCountries);
        }
      });
  }

  gotoCountry(country: Country) {
    const countryName = country ? country.name : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this._router.navigate(['/countries', { name: countryName}]);
  }

  goBack(): void {
    this._location.back();
  }

}
