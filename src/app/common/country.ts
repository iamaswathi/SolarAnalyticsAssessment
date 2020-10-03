export interface Country {
    name: string,
	topLevelDomain: string[],
	alpha2Code: string,
	alpha3Code: string,
	callingCodes: [],
	capital: string,
	altSpellings: string[],
	region: string,
	subregion: string,
	population: number,
	latlng: number[],
	demonym: string,
	area: number,
	gini: number,
	timezones: string[],
	borders: string[],
	nativeName: string,
	numericCode: number,
	currencies: Currency[],
	languages: Language[],
	translations: Translations,
	flag: string,
	regionalBlocs: RegionalBlocks[],
	cioc: string
}

interface Currency {
    code: string,
    name: string,
    symbol: string
}

interface Language {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

interface Translations {
    de: string,
    es: string,
    fr: string,
    ja: string,
    it: string,
    br: string,
    pt: string,
    nl: string,
    hr: string,
    fa: string
}

interface RegionalBlocks {
    acronym: string,
    name: string,
    otherAcronyms: string[],
    otherNames: string[]
}