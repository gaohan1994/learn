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

[构造器模式](https://www.w3cschool.cn/zobyhd/467ndozt.html)


