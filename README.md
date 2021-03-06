# RestCountriesAssessment

This project lists down the countries in a card layout. On click of any Country, the details will be displayed in the next screen.
A provision to switch between the Dark and Light theme modes is available at the header section.

## I. In Project

1. Custom Components
    1. **_CountryListComponent_** - lists the countries in card layout. Contains Search and filter fields to filter the countries list
    2. **_CountryDetailsComponent_** - displays the country details when a country is clicked in the list view
    3. **_HeaderComponent_** - header items : provision to switch between light and dark themes
2. Styles
    1. **_styles.css_** - contains all generic styles accessing theme variables and component specific styles
3. Common files
    1. **_common.constants.ts_** - contains the constants
    2. **_country.ts_** - Interface that holds the structure of Country entity
    3. **_custom-font.css_** - Imports Custom font - 'Nunito Sans'
    4. **_Theme_** - This folder contains respective files required to switch between the  two themes - dark and light themes.
        1. **_theme.ts_** - Interface that holds the structure of Theme.
        2. **_dark-theme.ts_** - contains the structure holding the different color properties and name of the dark theme
        3. **_light-theme.ts_** - contains the structure holding the different color properties and name of the light theme
        4. **_theme.directive.ts_** - An attribute directive used to update and set the theme on user selection.
        5. **_theme.module.ts_** - A module that holds the theme related files.
        6. **_theme.service.ts_** - A service file to get the active theme and sets the new theme on user selection
4. Utils
    1. **_utils.ts_** - contains generic utility functions
    2. **_SearchFilterPipe_** - Pipe to filter countries list based on entries in search field and the filter
5. Services -
    1. **_country.setvice.ts_** - contains the http client api calls that returns  Observables

## II. How to use the code

1. Clone this repo locally
2. Run `npm install`
3. Run `ng serve`, the code in index.js file gets executed and the output can be viewed in the console.
4. To execute the test cases, hit command `npm run test`.
