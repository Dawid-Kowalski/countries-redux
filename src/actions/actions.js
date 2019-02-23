export const GET_COUNTRIES =  'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRIES = 'DELETE_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENET = 'SET_CONTINENET';

export function getCountries() {
	return {
		type: GET_COUNTRIES
	}
}

export function deleteCountry(id) {
	return {
		type: DELETE_COUNTRY,
		id
	};
}

export function getCountry(id) {
	return {
		type: GET_COUNTRY,
		id
	};
}

export function searchCountries(searchText) {
	return {
		type: SEARCH_COUNTRIES,
		searchText
	};
}

export function setContinent(name) {
	return {
		type: SET_CONTINENET,
		name
	};
}