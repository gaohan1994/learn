import Ad from './obj'; 

class Stype {

    public name;

    constructor () {
        this.name = 'Ghan';
    }

    sayName() {
        const fields = Ad.fields;
        console.log(this.name);
    }
}

class Subtype extends Stype {

    private age;

    constructor (age) {
        super();
        this.age = age || 0;
    }

    sayAge() {
        console.log(this.age);
    }
}