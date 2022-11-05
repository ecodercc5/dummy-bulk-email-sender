import puppeteer from "puppeteer";
import { IEmail } from "./email";

const type = async (page: puppeteer.Page, selector: string, text: string) => {
  const element = await page.waitForSelector(selector);

  await element?.type(text);
};

const clickNewMail = async (page: puppeteer.Page) => {
  return page.evaluate(async () => {
    const dataAutomationButtons = Array.from(
      document.querySelectorAll(
        `button[data-automation-type="RibbonSplitButton"]`
      )
    );

    const newMailBtn = dataAutomationButtons.find((btn: any) => {
      return btn.innerText.includes("New mail");
    });

    (newMailBtn as HTMLElement).click();
  });
};

const clickSend = async (page: puppeteer.Page) => {
  return page.evaluate(async () => {
    const buttons = Array.from(document.querySelectorAll("button"));

    const sendBtn = buttons.find((btn: any) => {
      return btn.title === "Send (⌘+Enter)";
    });

    (sendBtn as HTMLElement).click();
  });
};

const sendEmail = async (page: puppeteer.Page, email: IEmail) => {
  const { to, subject, body } = email;

  await clickNewMail(page);

  await type(page, `div[contenteditable="true"][aria-label="To"]`, to);
  await type(page, `input[aria-label="Add a subject"]`, subject);
  await type(
    page,
    `div[contenteditable="true"][aria-label="Message body, press Alt+F10 to exit"]`,
    body
  );

  await clickSend(page);

  await new Promise((r) => setTimeout(r, 2000));
};

const sendAllEmails = async (page: puppeteer.Page, emails: IEmail[]) => {
  for (const email of emails) {
    await sendEmail(page, email);
  }
};

const launchOutlook = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://outlook.office.com/mail/");

  return page;
};

const getIntoOutlookAuth = async (page: puppeteer.Page, email: string) => {
  // login into
  const emailInput = await page.waitForSelector(`input[type="email"]`);
  const submitEmail = await page.waitForSelector(`input[type="submit"]`);

  await emailInput?.type(email);

  await Promise.all([
    await submitEmail?.click(),
    await page.waitForNavigation(),
  ]);
};

export namespace OutlookEmailSender {
  export const sendEmails = async (emails: IEmail[]) => {
    const page = await launchOutlook();

    // get into outlook auth
    await getIntoOutlookAuth(page, "eric25@mit.edu");

    // wait for touchstone login
    await new Promise((r) => setTimeout(r, 5000));

    await page.waitForFunction(
      "window.location.href === 'https://outlook.office.com/mail/'"
    );

    await new Promise((r) => setTimeout(r, 5000));

    console.log("[sending emails]");

    await sendAllEmails(page, emails);
  };
}
