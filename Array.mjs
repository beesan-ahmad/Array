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
countryList.addCountry(1, 8, 7000000);//it will not added to array because second argument 
//should be string
console.log("Original array:", countryList.listCountries());//print an error statement
countryList.addCountry("", 8, "7000000");
console.log("Original array:", countryList.listCountries());

countryList.addCountry(2, "Jordan", 9000000);
countryList.addCountry(3, "Syria", 10000000);
console.log("Original array:", countryList.listCountries());
