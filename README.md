## 重建学习仓库

---

## 目录
- [Learn Javascript Patton](#learn-javascript-patton)
- [Learn React Motion](#learn-react-motion)


## Learn Javascript Patton

> 学习资源：<br/>
> 《Javascript高级程序设计》第六章面向对象的程序设计<br/>
> [w3cschool](https://www.w3cschool.cn/zobyhd/467ndozt.html)

工厂模式最佳方法之组合模式 by 高程

```

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
```

---

继承 by 高程

学习了Javascript继承的几种方式的优点和缺点，以及演变方式。其中组合模式是最常用的

```javascript

function SuperType () {
    this.name = 'Ghan';
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType (age) {
    // 第二次调用
    SuperType.call(this);
    this.age = age;
}

//  第一次调用
SubType.prototype = new SuperType();
SubType.prototype.constructor = SuperType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

```

但是这种模式有一个缺点就是继承的时候调用了两次超类型的构造函数

```javascript

function inheritPrototype (subType, superType) {
    var prototype = object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType () {
    this.name = 'Ghan';
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType (age) {
    this.age = age;
}

// 一次
inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
}

```

最终最优方法：

```javascript

/**
 * ES5
*/

function inheritanceES5 (subType, superType) {
    var prototype = superType.prototype;
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperTypeES5 () {
    this.name = 'Ghan';
}

SuperTypeES5.prototype.sayName = function () {
    console.log(this.name);
}

function SubTypeES5 (age) {
    this.age = age;
}

inheritanceES5(SubTypeES5, SuperTypeES5);

SubTypeES5.prototype.sayAge = function () {
    console.log(this.age);
}

var instanceES5 = new SubTypeES5(23);

instanceES5.sayName();
instanceES5.sayAge();

/**
 * ES6
*/

class SuperTypeES6 {
    constructor () {
        this.name = 'Ghan'
    }

    sayName () {
        console.log(this.name);
    }
}

class SubTypeES6 extends SuperTypeES6 {
    constructor (age) {
        super();
        this.age = age;
    }

    sayAge () {
        console.log(this.age);
    }
}

var instanceES6 = new SubTypeES6(11);

instanceES6.sayName();
instanceES6.sayAge();

```

[构造器模式](https://www.w3cschool.cn/zobyhd/467ndozt.html)

## Learn React Motion

> 学习资源: <br/>
> [react-motion](https://github.com/chenglou/react-motion)<br/>
> [关于 React Motion的简要介绍](https://juejin.im/post/5b48061551882519790c77f3)

``react-motion``库，可以根据``react state``来控制``css``。

`` spring``API接收2个参数，第一个是目标数值，第二个是配置选项。

``Motion``API主要接收2个参数``defaultStyle``和``style``，其中``style``属性将会给``Motion``的子组件继承，在``Motion``的子组件内就能根据``style``中的属性进行操作了。

``StaggeredMotion``API和``Motion``差不多，和``Motion``的不用点在于``StaggeredMotion``可以接收多个``style``参数。

``motion.js``内将展示我从``react-motion``官方``demo``学习之后，自己仿照写的几个``demo``.


1.