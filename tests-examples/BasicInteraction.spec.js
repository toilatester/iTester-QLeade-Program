// @ts-check
const { test, expect } = require('@playwright/test');
const { assert } = require('console');
const { chromium } = require('playwright');

let context; // Shared context variable
let page;   // Shared page variable

test.beforeEach(async ({ page }) => {
    await page.goto('localhost:3000/dashboard');
    const loginVn = page.getByText('Đăng nhập');
    const loginEng = page.getByText('Login');
    await page.getByPlaceholder('Username').fill('vietnnq');
    await page.getByPlaceholder('Password').fill('viet123123');
    await expect(loginVn.or(loginEng)).toBeVisible();
    if (await loginVn.isVisible()) {
        await loginVn.click();
    }
    else {
        await loginEng.click();
    }
});

var msgConfirm = 'Are you sure want to delete this monitor?';

test.describe('Basic Interaction', () => {
    // // open login page
    // test('Verify successful login', async ({ page }) => {
    //     const homePage = page.getByText(' Add New Monitor');
    //     await expect(homePage).toBeVisible({ timeout: 20000 });
    // });

    // //create new monitor
    // test('Create new monitor', async ({ page }) => {
    //     await page.getByText(' Add New Monitor').click();

    //     await page.locator('//*[@id="name"]').fill('Playwright Practice Health Check');
    //     await page.locator('//*[@id="url"]').fill('https://google.com');
    //     await page.locator('//*[@id="interval"]').fill('20');
    //     await page.locator('//*[@id="monitor-submit-btn"]').click();

    //     await expect(page.locator("//*[text()=' Playwright Practice Health Check']")).toBeVisible({ timeout: 10000 });
    // });

    // test('View Monitor Details', async ({ page }) => {
    //     await page.locator("//*[text()=' Playwright Practice Health Check']").click();
    //     await expect(page.locator("//*[text()='Message']/following::tr/td[3]")).toContainText("200 - OK");
    // });


    // test('Pause Monitor', async ({ page }) => {
    //     await page.locator("//*[text()=' Playwright Practice Health Check']").click();
    //     await page.locator("//*[text()=' Pause']").click();
    //     await page.locator("//*[contains(@class, 'btn btn-primary') and normalize-space(text()) = 'Yes']").nth(1).click();

    //     await expect(page.locator("//*[text()='Paused Successfully.']")).toBeVisible({ timeout: 10000 });

    // });

    // test('Search Monitors', async ({ page }) => {
    //     await page.locator("//*[(@placeholder='Search…')]").fill('Input data wrong');
    //     await expect(page.locator("//*[text()=' Playwright Practice Health Check']")).toBeHidden();

    //     await page.locator("//*[(@placeholder='Search…')]").fill('Playwright Practice Health Check');
    //     await expect(page.locator("//*[text()=' Playwright Practice Health Check']")).toBeVisible();
    // });


    // test('Edit Monitor', async ({ page }) => {
    //     await page.locator("//*[text()=' Playwright Practice Health Check']").click();
    //     await page.getByText("Edit").click();
    //     await page.locator('//*[@id="interval"]').fill('30');
    //     await page.locator('//*[@id="monitor-submit-btn"]').click();
    // });


    // test('Delete Monitor', async ({ page }) => {
    //     await page.locator("//*[text()=' Playwright Practice Health Check']").click();
    //     await page.locator("//*[text()=' Delete']").click();
    //     await page.locator(`//*[text()='${msgConfirm}']/following::*[@type='button'][1]`).click();
    //     await expect(page.locator("//*[text()=' Playwright Practice Health Check']")).toBeHidden();
    // });

    // await page.locator("//select[@id='notification-type']/child::*[text()='Telegram']").isVisible();
    // test('Notification Test', async ({ page }) => {
    //     await page.locator("//*[text()=' Playwright Practice Health Check']").click();
    //     await page.getByText("Edit").click();
    //     await page.locator("//*[@type='button' and text()='Setup Notification']").click();
    //     await page.locator("//select[@id='notification-type']").click();
    //     const selectElement = await page.$('select#notification-type');
    //     if (selectElement) {
    //         await selectElement.selectOption({ value: 'telegram' });
    //     }

    //     await page.locator("//*[@for='notification-name']/following-sibling::*").fill('@send_uptime_kumar_bot');
    //     await page.locator("//*[@id='telegram-bot-token']/child::*[@type='password']").fill('6456872436:AAEYzHudXmGwiAowRyJDLdRIySL_0H8kdas');
    //     await page.locator("//*[@id='telegram-chat-id']").fill("5362421562");
    //     (await page.waitForSelector('button:has-text("Test")')).isVisible();
    //     await page.getByRole('button', { name: "Test" }).click();
    //     await (page.getByRole('alert', { name: 'Send Successfully.' })).isVisible();
    //     expect(page.getByRole('button', { name: 'Send Successfully' })).toBeVisible;

    // });


    test('Export data ', async ({ page }) => {
        await page.locator("li[class='nav-item']").click();
        await page.getByText(' Settings').click();
        await page.getByText(' Backup').click();
        await page.getByRole('button', { name: "Export" }).click();
        await page.waitForTimeout(5000);


        await page.goto('chrome://downloads/');
        await page.waitForTimeout(3000);
        console.log("----->" + await page.locator("#mainContainer #name").textContent());





    // const elementHandle = await page.evaluateHandle(() => {
    //     const mainContainer = document.getElementById('mainContainer');
    //     if (mainContainer !== null) {
    //         const shadowRoot = mainContainer.shadowRoot;
    //         if (shadowRoot !== null) {
    //             return shadowRoot.querySelector('downloads-item[id="frb0"]');
    //         }
    //     }
    // });
    // if (elementHandle) {
    //     const element = elementHandle.asElement();
    //     if (element) {
    //         await element.click();
    //     } else {
    //         console.error('Failed to cast elementHandle to ElementHandle<Element>.');
    //     }
    // } else {
    //     console.error('Element handle is null or undefined.');
    // }

});

});