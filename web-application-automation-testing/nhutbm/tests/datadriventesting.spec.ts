import { test, expect } from '@playwright/test';

import fs from 'fs';

const testDataPath = 'testdata/data.json';

const testData = JSON.parse(fs.readFileSync(testDataPath, "utf8"));
for(const user of testData){
    test(`Login with user ${user.username}`, async({page})=>{
    await page.goto('http://localhost:3000/dashboard');
    await page.locator('xpath=//input[@id="floatingInput"]').clear();
    await page.locator('xpath=//input[@id="floatingInput"]').fill(user.username);
    await page.locator('xpath=//input[@id="floatingPassword"]').clear();
    await page.locator('xpath=//input[@id="floatingPassword"]').fill(user.password);
    await page.locator('xpath=//button[@type="submit" and text()="Login"]').click();
    await expect(page).toHaveTitle('Uptime Kuma - Login');
    }

    )
}