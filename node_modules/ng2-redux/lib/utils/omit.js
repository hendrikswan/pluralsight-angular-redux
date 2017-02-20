"use strict";
/**
 * Creates a copy of object, but with properties matching 'props'
 * omitted.
 *
 * @param {Object} object: the object to be copied and filtered.
 * @param {string[]} props: a list of property names to be excluded
 *  from the filtered copy.
 */
function omit(object, props) {
    var clone = Object.assign({}, object);
    props.forEach(function (prop) { return delete clone[prop]; });
    return clone;
}
exports.omit = omit;
;
//# sourceMappingURL=omit.js.map