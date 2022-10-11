"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("./template");
const message = template_1.Template.createMessage("Hello {{message}} , my name is {{name}}", {
    message: "World",
    name: "Eric",
});
console.log(message);
