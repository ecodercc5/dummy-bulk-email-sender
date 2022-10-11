import { Template } from "./template";

const message = Template.createMessage(
  "Hello {{message}} , my name is {{name}}",
  {
    message: "World",
    name: "Eric",
  }
);

console.log(message);
