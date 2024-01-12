import{ Page } from '@playwright/test';

async function login (page: Page, username: string, password: string): Promise<void> {


    await page.goto('http://localhost:3001/dashboard');
    await page.fill('[placeholder="Username"]', username);
    await page.fill('[placeholder="Password"]', password);
    //await page.click('[role="button"]');
    //await expect(page.locator("//div[@class='profile-pic']")).toBeVisible;
    await page.getByRole('button').click();
};

export {login };