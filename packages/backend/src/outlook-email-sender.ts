import puppeteer from "puppeteer";

const sendEmails_ = async (page: puppeteer.Page, emails: any[]) => {
  for (const email of emails) {
    const { to, subject, message } = email;

    await page.evaluate(async () => {
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

    const toInput = await page.waitForSelector(
      `div[contenteditable="true"][aria-label="To"]`
    );

    await toInput?.type(to);

    const subjectInput = await page.waitForSelector(
      `input[aria-label="Add a subject"]`
    );

    await subjectInput?.type(subject);

    const bodyInput = await page.waitForSelector(
      `div[contenteditable="true"][aria-label="Message body, press Alt+F10 to exit"]`
    );

    await bodyInput?.type(message);

    await page.evaluate(async () => {
      const buttons = Array.from(document.querySelectorAll("button"));

      const sendBtn = buttons.find((btn: any) => {
        return btn.title === "Send (⌘+Enter)";
      });

      (sendBtn as HTMLElement).click();
    });

    await new Promise((r) => setTimeout(r, 2000));
  }
};

export namespace OutlookEmailSender {
  export const sendEmails = async (emails: any[]) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://outlook.office.com/mail/");

    // login into
    const emailInput = await page.waitForSelector(`input[type="email"]`);
    const submitEmail = await page.waitForSelector(`input[type="submit"]`);

    await emailInput?.type("eric25@mit.edu");

    console.log("yo");
    await Promise.all([
      await submitEmail?.click(),

      await page.waitForNavigation(),
    ]);

    // touchstone login

    await new Promise((r) => setTimeout(r, 5000));

    // const mitKerbInput = await page.waitForSelector(`input[name="j_username"]`);
    // const mitKerbPassword = await page.waitForSelector(
    //   `input[name="j_password"]`
    // );
    // const submitKerb = await page.waitForSelector(`input[type="submit"]`);

    // console.log(mitKerbInput);

    //   await new Promise((r) => setTimeout(r, 3000));
    //   await submitKerb?.click();

    // bypass security
    //   await new Promise((r) => setTimeout(r, 20000));

    await page.waitForFunction(
      "window.location.href === 'https://outlook.office.com/mail/'"
    );

    await new Promise((r) => setTimeout(r, 5000));

    console.log("sending emails");

    await sendEmails_(page, emails);
  };
}
