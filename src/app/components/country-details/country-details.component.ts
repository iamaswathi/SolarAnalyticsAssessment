import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CountryService } from '../../services/country.service';
import { Country } from '../../common/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;
  countries: Country[];
  selectedCountry: Country;

  constructor(
    private _countryService: CountryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,) { }

  ngOnInit(): void {
    // this.getCountry();
    this.getCountries();
  }
  getCountries(): void {
    this._countryService.getCountriesList().subscribe(
      (success) => {
      if(success)
      this.countries = success;
      this.selectedCountry = this.countries[0];
    },
    (error) => {
      console.log('Error state from API: ', error)}
    );
  }

  getCountry(): void {
    const name = this._route.snapshot.paramMap.get('name');
    this._countryService.getCountry(name)
      .subscribe(country => {
        this.country = country;
        console.log(this.country);
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
