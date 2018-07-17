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
*/

function Person (name, age, job) {
    
}