"use strict";
function isFunction(thing) {
    return !!(thing &&
        thing.constructor &&
        thing.call &&
        thing.apply);
}
exports.isFunction = isFunction;
function isObject(thing) {
    return !!(thing &&
        typeof thing === 'object' &&
        !isFunction(thing));
}
exports.isObject = isObject;
function isPlainObject(thing) {
    return isObject(thing) && thing.constructor === Object;
}
exports.isPlainObject = isPlainObject;
//# sourceMappingURL=type-checks.js.map