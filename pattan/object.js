/**
 * 
 * ----- learn from javascript高级程序设计 ------
 * 
 * Section6 面相对象的程序设计
*/

/**
 * 访问器属性
 * 1.Configurable default: true
 * 2.Enumerable default: true
 * 3.Get default: undefined
 * 4.Set default: undefined 
 * 
 * 访问器属性必须通过 Object.defineProperty() 定义
*/

var book = {
    _year: 2004,
    edition: 1,
};

Object.defineProperty(book, 'year', {
    get: function () {
        return this._year;
    },
    set: function (newValues) {
        console.log('newValues: ', newValues);
        if (newValues > 2004) {
            this._year = newValues;
            this.edition += newValues - 2004;
        }
    },
});

book.year = 2005;

console.log(book);

/**
 * Object.defineProperties 大体和 Object.defineProperty 相同
*/













