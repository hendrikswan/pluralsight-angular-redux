"use strict";
class JsonSchemaErrorBase extends Error {
    constructor(message) {
        super();
        if (message) {
            this.message = message;
        }
        else {
            this.message = this.constructor.name;
        }
    }
}
exports.JsonSchemaErrorBase = JsonSchemaErrorBase;
//# sourceMappingURL=/Users/hansl/Sources/angular-cli/packages/@ngtools/json-schema/src/error.js.map