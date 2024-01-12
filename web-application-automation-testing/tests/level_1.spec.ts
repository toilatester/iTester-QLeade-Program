import{test , expect } from '@playwright/test';
import { login } from '../page/login.ts'; 

const testusername = 'hanhppn';
const testpassword = 'Hanh290901';

test('Login' , async ({ page }) => {

    /*await page.goto('http://localhost:3001/dashboard');
    await page.getByPlaceholder('Username').fill("hanhppn");
    await page.getByPlaceholder('Password').fill("Hanh290901");
    await page.getByRole('button').click();*/
    await login(page, testusername, testpassword);
    await expect(page.locator("//div[@class='profile-pic']")).toBeVisible;
});

test ( 'Add Monitor' , async ({ page }) => {
    await login(page, testusername, testpassword);
    await page.locator("//a[@href='/add']").click();
    await page
    .locator("//input[@id='name']")
    .fill('Add Mornitor');
    await page.getByLabel('URL').fill('https://hanhppn');
    await page.getByRole('button',{name:'Save'}).click();
    await expect(page.getByRole('alert',{name : 'Added Successfully.'})).toBeVisible;
});

test ( 'View Monitor Details', async ({page} ) => {
    await login(page, testusername, testpassword);
    await page.locator("//a[@class='item disabled']//div[contains(text(),'Add Mornitor')]").click();

   //await page.getByText(' Add Mornitor').click();
    const nameMonitor = await page.locator('h1').textContent();
    const linkMonitor = await page.getByRole('link', { name: 'https://hanhppn/'})
    await expect(nameMonitor).toBe('Add Mornitor');
    await expect(linkMonitor).toBe('https://hanhppn');
});