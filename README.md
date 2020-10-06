# RestCountriesAssessment

## I. In Project

1. Custom Components
    a. CountryListComponent - lists the countries in card layout. Contains Search and filter fields to filter the countries list
    b. CountryDetailsComponent - displays the country details when a country is clicked in the list view
    c.HeaderComponent - header items : provision to switch between light and dark themes
2. Styles
    styles.css - contains all generic theme variables and component specific styles
3. Common files
    common.constants.ts - contains the constants
    country.ts - Interface that holds the structure of Country entity
    custom-font.css - Imports Custom font - 'Nunito Sans'
4. Utils
    a. utils.ts - contains generic utility functions
    b. SearchFilterPipe - Pipe to filter countries list based on entries in search field and the filter
5. Services - country.setvice.ts - contains the http client api calls that returns      Observables

## II. How to use the code

1. Clone this repo locally
2. Run `npm install`
3. Run `ng serve`, the code in index.js file gets executed and the output can be viewed in the console.
4. To execute the test cases, hit command `npm run test`.

