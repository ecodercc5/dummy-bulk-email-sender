import { OutlookEmailSender } from "./outlook-email-sender";

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

OutlookEmailSender.sendEmails(emails);
