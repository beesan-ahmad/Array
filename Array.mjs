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
