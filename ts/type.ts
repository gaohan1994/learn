/**
 * ----- 学习泛型 -----
 * 
 * 1.传入和返回必须相同的情况
 */

 /**
  * 
  * 不使用泛型
  */

// function identity(arg: number): number {
//     return arg;
// }

/**
 * 使用 any 虽然可以接受任何类型的参数 但是返回不一定和传入相同
 *
 * @param {*} arg
 * @returns {*}
 */

// function identity(arg: any): any {
//     return arg;
// }

/**
 * 使用类型变量 T 只用于表示类型而不是值
 * 
 * 传入的属性的类型和返回类型都是 T
 *
 * @template T
 * @param {T} arg
 * @returns {T}
 */

// function identity<T>(arg: T): T {
//     return arg;
// }

// const identity = <T>(arg: T): T => {
//     return arg;
// }

/**
 * ---- 使用泛型变量 -----
 */
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}


/**
 * ----- 学习创建泛型接口 -----
 */

// function identity<T>(arg: T): T {
//     return arg;
// }

const identity = <T>(arg: T): T => {
    return arg;
}

/**
 * 泛型接口
 *
 * @interface GenericIdentityFn
 */
interface GenericIdentityFn {
    <T>(arg: T): T;
}

const myIdentity: GenericIdentityFn = identity;

/**
 * 泛型接口 传入一个参数锁死类型
 *
 * @interface GenericIdentityFnt
 * @template T
 */
interface GenericIdentityFnt<T extends number | string> {
    (arg: T): T
}

const myIdentityT: GenericIdentityFnt<string> = identity;

const identityFn: GenericIdentityFnt<number> = (arg) => {
    return 4;
}

/**
 * ----- 泛型类 -----
 */

class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;

myGenericNumber.add = (x, y) => { return x + y; };


/**
 * ---- 泛型约束 -----
 */

function create<T>(c: { new (): T }): T {
    return new c();
}

