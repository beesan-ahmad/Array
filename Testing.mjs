import { City } from "./City.mjs";
import { Country } from "./Country.mjs";
import { CountryList } from "./CountryList.mjs";
class Testing {
    constructor() {
        this.countryList = new CountryList();
    }

    displayCountryList() {
        console.log('Current Country List:');
        this.countryList.countries.forEach(country => {
            console.log(`Country ID: ${country.id}, Name: ${country.name}, Population: ${country.population}`);
            if (country.cities.length > 0) {
                console.log('Cities:');
                country.cities.forEach(city => {
                    console.log(`City ID: ${city.id}, Name: ${city.name}, Latitude: ${city.latitude}, Longitude: ${city.longitude}`);
                });
            } else {
                console.log('No cities in this country.');
            }
            console.log('---');
        });
        console.log('----------------');
    }
    

    testAllMethods() {
        // Add countries with cities
        this.countryList.addCountry(1, 'Palestine', 1000000, [
            new City(1, 'Jerusalem', 40.7128, -74.0060),
            new City(2, 'Bethlehem', 34.0522, -118.2437),
        ]);

        this.countryList.addCountry(2, 'Syria', 2000000, [
            new City(3, 'Idlib', 51.5074, -0.1278),
            new City(4, 'Damascus', 48.8566, 2.3522),
        ]);

        this.countryList.addCountry(3, 'Lebanon', 7000000, [
            new City(5, 'Aakkar', 45.5074, -0.1278),
            new City(6, 'Beirut', 48.8566, 2.3522),
        ]);

        this.countryList.addCountry(4, ' Algeria', 9000000, [
            new City(7, 'Ghardaia', 45.5074, -0.1278),
            new City(8, 'Oran', 50.8566, 2.3522),
        ]);
        

        this.displayCountryList();

        // Test sorting methods
        this.countryList.sortCountriesAZ();
        console.log("Sorting country list from A-Z");
        this.displayCountryList();

        console.log("Sorting country list from Z-A")
        this.countryList.sortCountriesZA();
        this.displayCountryList();

        // Test search methods
        console.log('Search by Exact Name ("Palestine"):',
            this.countryList.searchByExactName('Palestine'));

        console.log('Search by Included Name ("s"):',
            this.countryList.searchByIncludedName('s'));

        // Test adding methods
        this.countryList.addCountryToStart(1, 'Jordan', 5000000);
        console.log("Add country at the beginning of the list");

        this.displayCountryList();

        this.countryList.addCountryToEnd(5, 'Egypt', 5000000);
        console.log("Add country at the end of the list");
        this.displayCountryList();

        // Test editing method
        this.countryList.editCountry('Palestine', 'Historical Palestine', 1500000);
        console.log("Update a name of a country in the list");
        this.displayCountryList();

        // Test deleting methods
        this.countryList.deleteCountryByName('Qatar');//print an error message
        this.displayCountryList();

        this.countryList.deleteCountryByName('Syria');//print an error message
        console.log("Delete country of Syria from the list");
        this.displayCountryList();
        
        this.countryList.deleteCountryFromStart();
        console.log("Delete country from the beginning of the list");
        this.displayCountryList();

        this.countryList.deleteCountryFromEnd();
        console.log("Delete country from the end of the list");
        this.displayCountryList();

        // Test other methods
        console.log('Array Length:', this.countryList.getArrayLength());

        const chunkedArray = this.countryList.chunkArray(2);
        console.log('Chunked Array (Chunk Size 2):');
        this.displayCountryList(chunkedArray);
        this.countryList.joinArrays([
            new Country(5, 'Iraq', 6000000),
            new Country(6, 'Sudan', 7000000),
        ]);
        this.displayCountryList();

        console.log('Index of "Algeria":', this.countryList.getCountryIndexByName('Algeria'));
        console.log('Exists "USA":', this.countryList.doesCountryExist('USA'));
        console.log('Exists "Historical Palestine":', this.countryList.doesCountryExist('Historical Palestine'));
    }
}

const tester = new Testing();
tester.testAllMethods();
