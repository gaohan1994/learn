class PersonTs {

    private name;

    private age;

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    toString () {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
    
}