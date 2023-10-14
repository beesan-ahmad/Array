class Array {
    constructor() {
        this.countries = [];
    }
    // Method to add elements to the array 
    addToArray(element) {
        this.countries.push(element);
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
    searchByNameContains(element) {
        if (!element || typeof element !== 'string') {
            return "Please enter a valid search input.";
        }
        let resultOfContainsSearch = this.countries.filter(country => country.toLowerCase()
            .includes(element.toLowerCase()));
        if (resultOfContainsSearch.length === 0) {
            return `No results found for "${element}".`;
        }
        return resultOfContainsSearch;
    }
    // Method to search for countries whose names are equal to the input
    searchByNameEquals(element) {
        if (!element || typeof element !== 'string') {
            return "Please enter a valid search input.";
        }
        let resultOfEqualSearch = this.countries.filter(country => country.toLowerCase()
            === element.toLowerCase());
        if (resultOfEqualSearch.length === 0) {
            return `No results found for "${element}".`;
        }
        return resultOfEqualSearch;
    }

    addToStart(element) {
        if (typeof element === 'string') {
            for (let i = this.countries.length - 1; i >= 0; i--) {
                this.countries[i + 1] = this.countries[i];
            }
            this.countries[0] = element;
        } else {
            console.log("Please enter a valid input to add it at the beginning of the array.");
        }
    }
    addToEnd(element) {
        if (typeof element === 'string') {
            this.countries[this.countries.length] = element;
        }
        else {
            console.log("Please enter a valid input to add it at the end of the array.");
        }
    }
    // Method to delete elements from the array (start and/or end)
    deleteFromArray(start, end) {
        if (((start >= 0 && end >= start) && (end < this.countries.length))) {
            this.countries.splice(start, end - start + 1);
        } else {
            console.log("Invalid start or end positions.try again.");
        }
    }
    deleteByName(element) {
        if (!element || typeof element !== 'string') {
            console.log("Please enter a valid name for deletion.");
            return;
        }

        const index = this.countries.indexOf(element);
        if (index !== -1) {
            this.countries.splice(index, 1); // Deletes the element with the specified name
        } else {
            console.log("Element not found in the array. Deletion failed.");
        }
    }

    shrink(chunkSize) {
        const result = [];
        for (let i = 0; i < this.countries.length; i += chunkSize) {
            result.push(this.countries.slice(i, i + chunkSize));
        }
        return result;
    }
    // Method to join arrays
    joinArrays(arr) {
        if (!arr || typeof arr !== 'string') {
            console.log("Please enter a valid array input");
        }
        this.countries = this.countries.concat(arr);
    }
    //array length
    getArrayLength() {
        return this.countries.length;
    }
    // Method to get the index of an element
    getElementIndex(element) {
        if (!element || typeof element !== 'string') {
            console.log("Please enter a valid input to get the index.");
        }
        return this.countries.indexOf(element);
    }
    // Method to check if an element exists in the array and return a boolean
    doesElementExist(element) {
        if (!element || typeof element !== 'string') {
            console.log("Please enter a valid input to check if is exist or not.");
        }
        return this.countries.includes(element);
    }
}
const countryList = new Array();
countryList.addToArray("palestine");
countryList.addToArray("jordan");
countryList.addToArray("syria");
countryList.addToArray("lebanon");
console.log("original array:", countryList.countries);
// countryList.addToStart("qatar");
// console.log("after add element at the beginning of the array:", countryList.countries);

// countryList.sortFromAToZ();
// console.log("Sorting array from A to Z:", "[" + countryList.countries.join(", ") + "]");

// countryList.sortFromZToA();
// console.log("Sorting array from Z to A:", "[" + countryList.countries.join(", ") + "]");

// const containsSearchResults = countryList.searchByNameContains("s");
// console.log("the output of the element that you searched for in the array:")
// console.log(containsSearchResults);

// const equalSearchResults = countryList.searchByNameEquals("PALESTINE");
// console.log("the output of the element that you searched for in the array:");
// console.log(equalSearchResults);
// countryList.addToStart(0);//print an error message
// countryList.addToEnd("usa");
// console.log(countryList.countries);
// countryList.addToEnd(99);//print an error message

// countryList.deleteFromArray(1, 3); // Deletes elements from index 1 to 3
// console.log(countryList.countries);
// countryList.deleteFromArray(8, 11);//print an error message
// countryList.deleteByName("usa");//remove usa
// console.log(countryList.countries);
// countryList.deleteByName("oman");//print an error message
// countryList.deleteByName(11);//print an error message
// console.log(countryList.countries);
// const subArrays = countryList.shrink(1);
// console.log(subArrays);
// countryList.joinArrays("India");
countryList.joinArrays("usa");
console.log(countryList.countries);
// countryList.joinArrays(99);
// console.log("the length of the array is:" + countryList.getArrayLength());
// console.log("the index of the element that you checked:")
// console.log(countryList.getElementIndex("usa"));
// console.log(countryList.getElementIndex(7));//print an error message
// console.log(countryList.getElementIndex());
console.log("check if the entered element is exist or not:")
console.log(countryList.doesElementExist("lebanon"));
console.log(countryList.doesElementExist(0));