class Array {
    constructor() {
        this.countries = [];
    }
    // Method to add elements to the array 
    addToArray(...elements) {
        this.countries.push(...elements);
    }
    /*  
    In this method we sort the array from a-z (rearrange the elements in the array in 
    increasing order
    */
    sortFromAToZ() {
        this.countries.sort();
    }

    /*
    In this method we sort the array from z-a (rearrange the elements in the array in 
     decreasing order)
     */
    sortFromZToA() {
        this.countries.sort((a, b) => b.localeCompare(a));
    }
    // In this method we search for a country and return all results that close to the input 
    searchByNameContains(input1) {
        if (!input1 || typeof input1 !== 'string') {
            return "Please enter a valid search input.";
        }
        let resultOfContainsSearch = this.countries.filter(country => country.toLowerCase()
            .includes(input1.toLowerCase()));
        if (resultOfContainsSearch.length === 0) {
            return `No results found for "${input1}".`;
        }
        return resultOfContainsSearch;
    }
    // Method to search for countries whose names are equal to the input
    searchByNameEquals(input2) {
        if (!input2 || typeof input2 !== 'string') {
            return "Please enter a valid search input.";
        }
        let resultOfEqualSearch = this.countries.filter(country => country.toLowerCase() === input2
            .toLowerCase());
        if (resultOfEqualSearch.length === 0) {
            return `No results found for "${input2}".`;
        }
        return resultOfEqualSearch;
    }
}

const countryList = new Array();
countryList.addToArray("palestine", "jordan", "syria", "lebanon");
console.log("original array:", countryList.countries);

countryList.sortFromAToZ();
console.log("Sorting array from A to Z:", "[" + countryList.countries.join(", ") + "]");

countryList.sortFromZToA();
console.log("Sorting array from Z to A:", "[" + countryList.countries.join(", ") + "]");

const containsSearchResults = countryList.searchByNameContains("s");
console.log("the output of the element that you searched for in the array:")
console.log(containsSearchResults);

const equalSearchResults = countryList.searchByNameEquals("PALESTINE");
console.log("the output of the element that you searched for in the array:");
console.log(equalSearchResults);




