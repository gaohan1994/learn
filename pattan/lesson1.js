/**
 * 
 * --- 工厂模式 ----
*/

/**
 * 
 * Final
*/




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

function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

/**
 * 使用 new 调用构造函数会经历以下4个步骤
 * 1.创建一个新对象
 * 2.将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
 * 3.执行构造函数中的代码
 * 4.返回新对象
*/
var pc1 = new Person('Ghan', 22, 'ENG');

/**
 * 原型模式
*/
function Person () { }

Person.prototype.name = 'Ghan';
Person.prototype.age = 24;
Person.prototype.job = 'ENG'

Person.prototype.sayName = function () {
    console.log(this.name);
}

/**
 * 理解远行对象
*/
