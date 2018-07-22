/**
 * 
 * --- 工厂模式 ----
*/

/**
 * 
 * Final 
 * ---- 最广泛的使用方法 ----
 * 
 * 组合模式-- 使用构造函数来定义实例属性 使用原型模式定义公共方法
 * 
 * ES5
*/

function AnimalES5 (name, age, type) {
    this.name = name;
    this.age = age;    
    this.type = type;
}

AnimalES5.prototype = {
    constructor: AnimalES5,
    toString: function () {
        console.log(`my name is: ${this.name}, i'm ${this.age} years old, type: ${this.type}`);
    }
}

var cat = new AnimalES5('Gas', 11, 'cat');

cat.toString();

/**
 * ES6
*/

class AnimalES6 {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;    
        this.type = type;
    }

    toString() {
        console.log(`my name is: ${this.name}, i'm ${this.age} years old, type: ${this.type}`);
    }
}

var cat1 = new AnimalES6('Gas', 11, 'cat');
var cat2 = new AnimalES6('gda', 12, 'cat');

cat1.toString();
cat2.toString();

console.log('cat1.toString === cat2.toString', cat1.toString === cat2.toString);

/**
 * 演变过程 ES5
*/

function createPerson (name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

var p1 = createPerson('Ghan', 21, 'engineer');
var p2 = createPerson('Ghan2', 22, 'hello');

// p1.sayName();
// p2.sayName();

/**
 * 构造函数模式
 * 1.没有显示创建对象
 * 2.直接将方法和属性付给了this对象
 * 3.没有return语句
*/

/**
 *
 * function Person (name, age, job) {
 *  this.name = name;
 *  this.age = age;
 *  this.job = job;
 *  this.sayName = function () {
 *      console.log(this.name);
 *  };
 * } 
*/


/**
 * 使用 new 调用构造函数会经历以下4个步骤
 * 1.创建一个新对象
 * 2.将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
 * 3.执行构造函数中的代码
 * 4.返回新对象
*/
// let pc1 = new Person('Ghan', 22, 'ENG');

/**
 * 原型模式
*/

/**
 *
 * function Person () { }
 * Person.prototype.name = 'Ghan';
 * Person.prototype.age = 24;
 * Person.prototype.job = 'ENG'
 * Person.prototype.sayName = function () {
 *     console.log(this.name);
 * }
*/

/**
 * 组合模式
 * 最常见的模式
 * ---构造函数用于定义实例属性
 * ---原型模式用于定义方法和共享的属性
*/

function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friedns = ['G', 'h'];
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}

var person1 = new Person('Na', 29, 'Na');
var person2 = new Person('BB', 24, 'BB');
person1.friedns.push('hhaha');

// console.log(person1.friedns);
// console.log(person2.friedns);


/**
 * 动态原型模式
 * ---结果和组合模式一样 只是一次性在构造函数中完成操作 且只会执行一次
*/

function PersonCb (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friedns = ['G', 'h'];

    /**
     * mater code
    */
    if (typeof this.sayName !== 'function') {
        console.log('constructor function');
        PersonCb.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}

var pcb1 = new PersonCb('Ghan', 24, 'asd');
var pcb2 = new PersonCb('ghh', 22, 'das');
// pcb1.sayName();
// pcb2.sayName();















