"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outlook_email_sender_1 = require("./outlook-email-sender");
const emails = [
    {
        to: "ericchen9025@gmail.com",
        subject: "Hello World",
        body: "This is a test email",
    },
    {
        to: "ericchen9025@gmail.com",
        subject: "Goodbye World",
        body: "This is another test email",
    },
];
outlook_email_sender_1.OutlookEmailSender.sendEmails(emails);
