/**
 * 继承
*/

/**
 * 
 * ---- 最佳继承方案 ----
 * ES5
*/

/**
 * 演变过程ES5
*/
// function SuperType () {
//     this.property = true;
// }

// SuperType.prototype.getSuperType = function () {
//     return this.property;
// }

// function SubType () {
//     this.subproperty = false;
// }

// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// }

// var instance = new SubType();
// console.log('instance.constructor === SuperType', instance.constructor === SuperType);
// console.log(instance.getSuperType());

/**
 * 
 * 重写
 * 
 * 1.必须在用SuperType的实例替换原型之后，在重写方法
 * 2.SuperType的实例并不影响
 * 3.不能使用对象字面量创建源性方法，这样会重写原型链导致切断联系
*/

/**
 * right
*/
// SubType.prototype.getSuperType = function () {
//     return false;
// }

/**
 * error
*/
// SubType.prototype = {
//     getSuperType: function () {
//         return false;
//     }
// }

// var instance = new SubType();

// console.log(instance.getSuperType());

/**
 * 原型链的问题
*/

// function SuperType () {
//     this.colors = ['red', 'blue', 'green'];
// }

// function SubType () {}

// SubType.prototype = new SuperType();

// var instance1 = new SubType();

// instance1.colors.push('black');

// console.log(instance1.colors); // 'red', 'blue', 'green', 'black'

// var instance2 = new SubType(); 

// console.log(instance2.colors); // 'red', 'blue', 'green', 'black'


/**
 * 改造
 * 借用构造函数
 * 这样每个SubType实例都会有属于自己的属性副本
*/

// function SubType () {
//     SuperType.call(this);
// }


/**
 * 组合继承
 * 
 * combination inheritance
 * 
 * 使用原型链实现对原型属性和方法的继承
 * 使用构造函数来实现对实例属性的继承
*/

function SuperType (name) {
    this.name = name;
    this.colors = [ 'red', 'yellow', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name)
}

function SubType (name, age) {
    // 继承属性
    SuperType.call(this, name);

    this.age = age;
}
//继承方法
SubType.prototype = new SuperType();

SubType.prototype.constructor = SuperType;

SubType.prototype.sayAge = function () {
    console.log(this.age);
}

var instance1 = new SubType('Ghan', 22);

instance1.colors.push('black');

instance1.sayAge();
instance1.sayName();

/**
 * 原型式继承
 * 思路：借助原型可以基于已有的对象创建新对象
 * 
 * ES5新增 Object.create() 方法规范化了原型式继承，该方法接受两个参数
 * 1.用作新对象圆形的对象
 * 2.作为新对象定义额外属性的对象（可选）
 * 
 * 在传入一个参数得情况下 Object.create() 和 Object() 相同
*/

// function object(o) {
//     //创建一个临时性的构造函数
//     function F () {};

//     //构造函数的原型 = 传入的对象
//     F.prototype = o;

//     //返回该构造函数的实例
//     return new F();
// }

// var person = {
//     name: 'ghan',
//     friends: ['G1', 'G2', 'G3'],
// }

// var anotherPerson = Object.create(person);
// anotherPerson.name = 'Greg';
// anotherPerson.friends.push('G4');

// var yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = 'Linda';
// yetAnotherPerson.friends.push('G5');

// console.log(person.friends);

/**
 * 寄生式继承
 * 创建一个仅用于封装继承过程的函数
*/
function createAnother (original) {
    var clone = Object.create(original);
    clone.sayHi = function () {
        console.log('hi');
    }
    return clone;
}

function Person () {
    this.name = 'Ghan';
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

var anotherPerson = createAnother(new Person());

anotherPerson.name = 'ghan123';
anotherPerson.sayName();

var anotherPerson2 = createAnother(new Person());
anotherPerson2.sayName();

/**
 * 
 * 组合继承是最常用的继承方式,但是缺点是无论什么情况下，都会调用
 * 两次超类型构造函数
 * 
*/

function SuperType () {
    this.name = 'super';
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType (age) {
    // 第二次调用
    SuperType.call(this);
    this.age = age;
}

// 第一次调用
SubType.prototype = new SuperType();

SubType.prototype.constructor = SuperType;

SubType.prototype.sayAge = function () {
    console.log(this.age);
}

/**
 * 
 * 寄生组合式继承
 * 使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型
*/

function inheritPrototype (subType, superType) {
    var prototype = Object.create(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 指定对象
}


