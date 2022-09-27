"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const main = async () => {
    const testAccount = await nodemailer_1.default.createTestAccount();
    //   SMTP transport
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: testAccount.user,
            pass: testAccount.pass, // generated ethereal password
        },
        //   auth: {
        //     user: "eric25@mit.edu",
        //     pass: "CRCEC5168$;",
        //   },
    });
    //   const PASSWORD = "lepdqcwaqsglifpm";
    //   const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: true, // use SSL
    //     auth: {
    //       user: "ericchen9025@gmail.com",
    //       pass: PASSWORD,
    //     },
    //   });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Eric Chen 👻" <eric@mit.edu>',
        to: "ericchen9025@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>", // html body
    });
    console.log(info);
};
main();
