## 重建学习仓库

---

### 1.学习Javascript设计模式

> 学习资源：
> <br/> 
> 《Javascript高级程序设计》第六章面向对象的程序设计
> <br/>
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

[构造器模式](https://www.w3cschool.cn/zobyhd/467ndozt.html)


