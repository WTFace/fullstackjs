"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_js_1 = __importDefault(require("./../utilities/arrays.js"));
var numbers_js_1 = __importDefault(require("./../utilities/numbers.js"));
var strings_js_1 = __importDefault(require("./../utilities/strings.js"));
var arr = [1, 2, 3, 7];
var strArr = ['a', 'b', 'c', 'd'];
// describe('test utilities', () => {
it('addArr returns sum of elements', function () {
    expect(arrays_js_1.default.addArr(arr)).toBe(arr.reduce(function (acc, cur) { return acc + cur; }));
});
it('concat two arrays', function () {
    expect(arrays_js_1.default.concatArr(arr, strArr)).toHaveSize(arr.length + strArr.length);
});
it('cut3 removes 3rd elem', function () {
    expect(arrays_js_1.default.cut3(arr)).toEqual([1, 2, 7]);
});
it('lgNum returns the biggest num', function () {
    expect(arrays_js_1.default.lgNum(arr)).toBe(Math.max.apply(Math, arr));
});
it('sum', function () {
    var _a = [1, 2], a = _a[0], b = _a[1];
    expect(numbers_js_1.default.sum(a, b)).toBeGreaterThanOrEqual(a);
});
it('multiply', function () {
    expect(numbers_js_1.default.multiply(0, 3)).not.toBeNaN();
});
it('capitalize', function () {
    var a = 'a';
    expect(strings_js_1.default.capitalize(a)).toBe('A');
});
// });
