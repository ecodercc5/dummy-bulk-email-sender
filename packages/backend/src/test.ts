import nodemailer from "nodemailer";

const main = async () => {
  const testAccount = await nodemailer.createTestAccount();

  //   SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: testAccount.user, // generated ethereal user
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
    from: '"Eric Chen 👻" <eric@mit.edu>', // sender address
    to: "ericchen9025@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log(info);
};

main();
