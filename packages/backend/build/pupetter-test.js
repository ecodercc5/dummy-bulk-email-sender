"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const $USERNAME = "j_username";
const $PASSWORD = "j_password";
const emails = [
    // {
    //   to: "javi11@mit.edu",
    //   subject: "Gorillas for the win",
    //   body: "I am Eric",
    // },
    // {
    //   to: "javi11@mit.com",
    //   subject: "Monkeyysss",
    //   body: "I am a asdfkjlqwjero",
    // },
    {
        to: "javi11@mit.edu",
        subject: "Monkeyysss",
        body: "I am a asdfkjlqwjero",
    },
    {
        to: "javi11@mit.edu",
        subject: "I am so happy!!!!",
        body: "I am a asdfkjlqwjero",
    },
];
const sendEmails = async (page, emails) => {
    for (const email of emails) {
        const { to, subject, body } = email;
        await page.evaluate(async () => {
            const dataAutomationButtons = Array.from(document.querySelectorAll(`button[data-automation-type="RibbonSplitButton"]`));
            const newMailBtn = dataAutomationButtons.find((btn) => {
                return btn.innerText.includes("New mail");
            });
            newMailBtn.click();
        });
        const toInput = await page.waitForSelector(`div[contenteditable="true"][aria-label="To"]`);
        await (toInput === null || toInput === void 0 ? void 0 : toInput.type(to));
        const subjectInput = await page.waitForSelector(`input[aria-label="Add a subject"]`);
        await (subjectInput === null || subjectInput === void 0 ? void 0 : subjectInput.type(subject));
        const bodyInput = await page.waitForSelector(`div[contenteditable="true"][aria-label="Message body, press Alt+F10 to exit"]`);
        await (bodyInput === null || bodyInput === void 0 ? void 0 : bodyInput.type(body));
        await page.evaluate(async () => {
            const buttons = Array.from(document.querySelectorAll("button"));
            const sendBtn = buttons.find((btn) => {
                return btn.innerText.includes("Send");
            });
            sendBtn.click();
        });
        await new Promise((r) => setTimeout(r, 2000));
    }
};
const main = async () => {
    const browser = await puppeteer_1.default.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://outlook.office.com/mail/");
    // login into
    const emailInput = await page.waitForSelector(`input[type="email"]`);
    const submitEmail = await page.waitForSelector(`input[type="submit"]`);
    await (emailInput === null || emailInput === void 0 ? void 0 : emailInput.type("eric25@mit.edu"));
    console.log("yo");
    await Promise.all([
        await (submitEmail === null || submitEmail === void 0 ? void 0 : submitEmail.click()),
        await page.waitForNavigation(),
    ]);
    // touchstone login
    await new Promise((r) => setTimeout(r, 5000));
    console.log("help");
    const mitKerbInput = await page.waitForSelector(`input[name="j_username"]`);
    const mitKerbPassword = await page.waitForSelector(`input[name="j_password"]`);
    const submitKerb = await page.waitForSelector(`input[type="submit"]`);
    console.log(mitKerbInput);
    //   await new Promise((r) => setTimeout(r, 3000));
    //   await submitKerb?.click();
    // bypass security
    //   await new Promise((r) => setTimeout(r, 20000));
    await page.waitForFunction("window.location.href === 'https://outlook.office.com/mail/'");
    await new Promise((r) => setTimeout(r, 5000));
    await sendEmails(page, emails);
    // for (const mail of emails) {
    //   const composeBtn = await page.waitForSelector(
    //     `div[data-automation-type="RibbonSplitButton"] button[data-automation-type="RibbonSplitButton"]`
    //   );
    //   console.log("yurrrrrrr");
    //   await composeBtn?.click();
    //   const { email, subject, body } = mail;
    //   const emailInp = await page.waitForSelector(
    //     `.G4a5Z .AALfT div[contenteditable="true"]`
    //   );
    //   const subjectInput = await page.waitForSelector(
    //     `input[placeholder="Add a subject"]`
    //   );
    //   const bodyInput = await page.waitForSelector(
    //     `.dbf5I.Umiif.SPY2A.tEMfE.sBugl.eQcvi`
    //   );
    //   console.log("ready to type email");
    //   await emailInp?.type(email);
    //   await subjectInput?.type(subject);
    //   await bodyInput?.type(body);
    //   const sendEmailBtn = await page.waitForSelector(
    //     `button[title="Send (⌘+Enter)"]`
    //   );
    //   console.log("sending");
    //   console.log(sendEmailBtn);
    //   await sendEmailBtn?.click();
    //   await new Promise((r) => setTimeout(r, 2000));
    //   // await page.waitForSelector(`#ReadingPaneContainerId .DLFwp`);
    // }
    // touchstone send me a push auth
    //   const sendMeAPushAuth = await page.waitForSelector(
    //     `.row-label.push-label button[type="submit"]`
    //   );
    //   await sendMeAPushAuth?.click();
    //   await browser.close();
};
main();
const main2 = async () => {
    const browser = await puppeteer_1.default.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.producthunt.com/");
    // const els = await page.$$eval(".styles_item__Sn_12", (products) => {
    //   return products.map((product) => {
    //     const upvote = product.querySelector(
    //       "button .style_color-light-grey__mkoQQ.style_fontSize-12__obnXo.style_fontWeight-600__Qmfob"
    //     )?.innerHTML;
    //     return product;
    //   });
    // });
    const els2 = await page.$$(".styles_item__Sn_12");
    const filtered = await Promise.all(els2.map((el, index) => {
        return el.$eval("button .style_color-light-grey__mkoQQ.style_fontSize-12__obnXo.style_fontWeight-600__Qmfob", (e, index) => {
            return Number(e.innerHTML) >= 180 ? index : false;
        }, index);
    }))
        .then((result) => result.filter((n) => n !== false))
        .then((indices) => indices.map((index) => els2[index]));
    console.log(els2);
    console.log(filtered);
};
// main2();
