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
}

const countryList = new Array();
countryList.addToArray("palestine", "jordan", "syria", "lebanon");
console.log("original array:", countryList.countries);
countryList.sortFromAToZ();
console.log("Sorting array from A to Z:", "[" + countryList.countries.join(", ") + "]");
countryList.sortFromZToA();
console.log("Sorting array from Z to A:", "[" + countryList.countries.join(", ") + "]");





