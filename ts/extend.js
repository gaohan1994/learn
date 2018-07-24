var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stype = /** @class */ (function () {
    function Stype() {
        this.name = 'Ghan';
    }
    Stype.prototype.sayName = function () {
        console.log(this.name);
    };
    return Stype;
}());
var Subtype = /** @class */ (function (_super) {
    __extends(Subtype, _super);
    function Subtype(age) {
        var _this = _super.call(this) || this;
        _this.age = age || 0;
        return _this;
    }
    Subtype.prototype.sayAge = function () {
        console.log(this.age);
    };
    return Subtype;
}(Stype));
