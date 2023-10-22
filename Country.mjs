export class Country {
    constructor(id, name, population) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.cities = [];
    }
}