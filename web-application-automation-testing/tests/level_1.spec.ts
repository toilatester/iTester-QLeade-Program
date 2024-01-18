import{test , expect } from '@playwright/test';
import { login } from '../page/login.ts'; 

const testusername = 'hanhppn';
const testpassword = 'Hanh290901';

test('Login' , async ({ page }) => {
    await login(page, testusername, testpassword);
     expect(page.locator("//div[@class='profile-pic']")).toBeVisible;
});

test ( 'Add Monitor' , async ({ page }) => {
    await login(page, testusername, testpassword);
    await page.locator("//a[@href='/add']").click();
    await page
    .locator("//input[@id='name']")
    .fill('Add Monitor');
    await page.getByLabel('URL').fill('https://hanhppn');
    await page.getByRole('button',{name:'Save'}).click();
    expect(page.getByRole('alert',{name : 'Added Successfully.'})).toBeVisible;
});

test ( 'View Monitor Details', async ({page} ) => {
    await login(page, testusername, testpassword);
    await page.getByTitle('24-hour').click();
    const nameMonitor = await page.locator('h1').textContent();
    const locator = page.locator('p.url a');
    const url_locator = await locator.getAttribute ('href');
    expect(nameMonitor).toBe('Add Monitor');
     expect(url_locator).toBe('https://hanhppn');

});

test ('Pause Monitor', async ({page}) => {
    await login(page, testusername, testpassword);
    await page.locator("//div[@class='info']").click();
    await page.getByRole('button',{name: 'Pause'}).click();
    await page.getByRole('button',{name: 'Yes'}).click();
    expect(page.getByRole('alert',{name : 'Paused Successfully.'})).toBeVisible;
}
);

test ('Search', async ({page})=> {
    await login(page, testusername, testpassword);
    await page
     .getByPlaceholder('Search…')
     .fill('Add Monitor');
    await page.keyboard.press('Enter');
    expect(page.locator("//a[@class='active router-link-exact-active item disabled']")).toBeVisible;
}
)