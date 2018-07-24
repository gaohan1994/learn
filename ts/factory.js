var PersonTs = /** @class */ (function () {
    function PersonTs(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonTs.prototype.toString = function () {
        console.log("name: " + this.name + ", age: " + this.age);
    };
    return PersonTs;
}());
