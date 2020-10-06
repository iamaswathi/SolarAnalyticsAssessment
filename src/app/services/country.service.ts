import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from '../common/country';


@Injectable({
  providedIn: 'root'
})

export class CountryService {
  private _countriesUrl = 'https://restcountries.eu/rest/v2/all';  // URL to web api
  private _countryByNameURl = 'https://restcountries.eu/rest/v2/name';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * getCountriesList - returns a list of countries (of type <Country>[]) from the 
   * server after making an http request
   */
  getCountriesList(): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this._countriesUrl)
      .pipe(
        tap(_ => console.log('fetched countries')),
        catchError(this.handleError<Country[]>('getCountriesList', []))
      );
  }

  /**
   * getCountryByName - returns a country object (of type <Country>) by its name
   * @param name - name of the country
   */
  getCountryByName(name: string): Observable<Country> {
    const url = `${this._countryByNameURl}/${name}`;
    return this._httpClient.get<Country>(url).pipe(
      tap(_ => console.log(`fetched hero id=${name}`)),
      catchError(this.handleError<Country>(`getHero name=${name}`))
    );
  }

  /**
   * handleError - Handles the Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
