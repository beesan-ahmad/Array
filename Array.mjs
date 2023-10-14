class Array {
    constructor() {
        this.countries = [];
    }

    // Method to add a country to the array
    addCountry(id, name, population) {
        if (typeof id === 'number' && typeof name === 'string' && typeof population === 'number') {
            this.countries.push({ id, name, population, cities: [] });
        } else {
            console.log("Please enter valid input for adding a country.");
        }
    }

    // Method to list all countries
    listCountries() {
        return this.countries;
    }
    // edit a country's information by ID
    editCountry(id, newName, newPopulation) {
        const country = this.countries.find(c => c.id === id);
        if (country) {
            if (newName) {
                country.name = newName;
            }
            if (newPopulation !== undefined) {
                country.population = newPopulation;
            }
        } else {
            console.log("Country not found. Edit failed");
        }
    }
    // delete a country by ID
    deleteCountry(id) {
        const index = this.countries.findIndex(c => c.id === id);
        if (index !== -1) {//check the index of array
            this.countries.splice(index, 1);
        } else {
            console.log("Country not found. Deletion failed");
        }
    }
    // search for cities in a country by name
    searchCitiesInCountry(countryId, cityName) {
        const country = this.countries.find(c => c.id === countryId);
        if (country) {
            const cities = country.cities;
            const matchingCities = cities.filter(city => city.name.toLowerCase().includes(cityName.toLowerCase()));
            return matchingCities;
        } else {
            console.log("Country not found. City search failed");
            return [];
        }
    }
}


const countryList = new Array();

// Add countries
countryList.addCountry(1, "palestine", 7000000);
countryList.addCountry(2, "Jordan", 9000000);
countryList.addCountry(3, "Syria", 10000000);
console.log("Original array:", countryList.listCountries());

// Add cities to the countries
const citiesInPalestine = [
    { name: "Jerusalem" },
    { name: "Gaza" },
    { name: "Bethlehem" },
];

const citiesInJordan = [
    { name: "Amman" },
    { name: "Irbid" },
    { name: "Zarqa" },
];

const citiesInSyria = [
    { name: "Damascus" },
    { name: "Idlib" },
    { name: "Homs" },
];
// Assign cities to countries
countryList.countries[0].cities = citiesInPalestine;
countryList.countries[1].cities = citiesInJordan;
countryList.countries[2].cities = citiesInSyria;
console.log("Original array:", JSON.stringify(countryList.listCountries(), null, 2));
countryList.editCountry(2, "Jordan (Updated)", 11000000);
console.log("Updated array:", JSON.stringify(countryList.listCountries(), null, 2));
countryList.deleteCountry(3);//delete syria country
console.log("After deletion:", countryList.listCountries());
const citiesInJordanResult = countryList.searchCitiesInCountry(2, "Amman");
console.log("Cities in Jordan:", citiesInJordanResult);
const citiesInSyriaResult = countryList.searchCitiesInCountry(3, "Homs");//print an error
//statement that country is not found so the search is failed
console.log("Cities in syria:", citiesInSyriaResult);//print an empty array