/**
 * 继承
 * 
 * 
*/

function SuperType () {
    this.property = true;
}

SuperType.prototype.getSuperType = function () {
    return this.property;
}

function SubType () {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

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
SubType.prototype.getSuperType = function () {
    return false;
}

/**
 * error
*/
SubType.prototype = {
    getSuperType: function () {
        return false;
    }
}

var instance = new SubType();

console.log(instance.getSuperType());