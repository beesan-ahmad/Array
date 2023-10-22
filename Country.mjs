export class Country {
    constructor(id, name, population, cities = []) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.cities = cities;
    }
}