import { Country } from "./Country.mjs";
export class CountryList {
    constructor() {
        this.countries = [];
    }

    // Method to add a country to the array
    addCountry(id, name, population, cities = []) {
        if (id && typeof id === 'number' && name && typeof name === 'string' && population && typeof
            population === 'number') {
            this.countries.push(new Country(id, name, population, cities));
        } else {
            console.log("Please enter valid input for adding a country.");
        }
    }

    // Method to list all countries
    listCountries() {
        return this.countries;
    }

    // Method to sort countries from A to Z
    sortCountriesAZ() {
        this.countries.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Method to sort countries from Z to A
    sortCountriesZA() {
        this.countries.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Method to search for a country by exact name
    searchByExactName(name) {
        return this.countries.find(country => country.name.toLowerCase() === name.toLowerCase());
    }

    // Method to search for countries with names that include the given input
    searchByIncludedName(input) {
        return this.countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));
    }

    // Method to add a country to the start of the array
    addCountryToStart(id, name, population, cities = []) {
        if (id && typeof id === 'number' && name && typeof name === 'string' && population
            && typeof population === 'number') {
            this.countries.unshift(new Country(id, name, population, cities));
        } else {
            console.log("Please enter valid input to add at the beginning of the array.");
        }
    }

    // Method to add a country to the end of the array
    addCountryToEnd(id, name, population, cities = []) {
        if (id && typeof id === 'number' && name && typeof name === 'string' &&
            population && typeof population === 'number') {
            this.countries.push(new Country(id, name, population, cities));
        } else {
            console.log("Please enter valid input to add at the end of the array.");
        }
    }

    // Method to edit a country's information by name
    editCountry(name, newName, newPopulation) {
        const country = this.countries.find(c => c.name.toLowerCase() === name.toLowerCase());
        if (country) {
            if (newName) {
                country.name = newName;
            }
            if (!newPopulation) {
                country.population = newPopulation;
            }
        } else {
            console.log("Country not found. Edit failed");
        }
    }

    // Method to delete a country by name
    deleteCountryByName(countryName) {
        const index = this.countries.findIndex(c => c.name.toLowerCase() === countryName.toLowerCase());
        if (index !== -1) {
            this.countries.splice(index, 1);
        } else {
            console.log("Country not found. Deletion failed");
        }
    }

    // Method to delete a country from the start of the array
    deleteCountryFromStart() {
        if (this.countries.length > 0) {
            this.countries.shift();
        } else {
            console.log("Array is empty. Deletion failed");
        }
    }

    // Method to delete a country from the end of the array
    deleteCountryFromEnd() {
        if (this.countries.length > 0) {
            this.countries.pop();
        } else {
            console.log("Array is empty. Deletion failed");
        }
    }

    // Method to get the length of the array
    getArrayLength() {
        return this.countries.length;
    }

    // Method to chunk the array into sub-arrays
    chunkArray(chunkSize) {
        const result = [];
        for (let i = 0; i < this.countries.length; i += chunkSize) {
            result.push(this.countries.slice(i, i + chunkSize));
        }
        return result;
    }

    // Method to join arrays
    joinArrays(array) {
        if (Array.isArray(array)) {
            this.countries = this.countries.concat(array);
        } else {
            console.log("Please enter a valid array input.");
        }
    }

    // Method to get the index of a country by name
    getCountryIndexByName(countryName) {
        return this.countries.findIndex(country => country.name.toLowerCase() === countryName.toLowerCase());
    }

    // Method to check if a country exists in the array
    doesCountryExist(countryName) {
        return this.countries.some(country => country.name.toLowerCase() === countryName.toLowerCase());
    }
}