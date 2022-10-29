"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var Template;
(function (Template) {
    Template.createMessage = (message, values) => {
        // there are edge cases that I'm going to ignore for now
        let finalMessage = message;
        for (const variable of Object.keys(values)) {
            const template = `{{${variable}}}`;
            const value = `${values[variable]}`;
            finalMessage = finalMessage.replaceAll(template, value);
        }
        return finalMessage;
    };
})(Template = exports.Template || (exports.Template = {}));
