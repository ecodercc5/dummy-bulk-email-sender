"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var Template;
(function (Template) {
    Template.createFill = (templatingFunction) => {
        const fill = (text, values) => {
            // there are edge cases that I'm going to ignore for now
            let finalMessage = text;
            for (const variable of Object.keys(values)) {
                const template = templatingFunction(variable);
                const value = `${values[variable]}`;
                finalMessage = finalMessage.replaceAll(template, value);
            }
            return finalMessage;
        };
        return fill;
    };
})(Template = exports.Template || (exports.Template = {}));
