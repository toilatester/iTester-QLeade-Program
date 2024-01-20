import{test , expect } from '@playwright/test';
import { login } from '../page/login.ts'; 

const testusername = 'hanhppn';
const testpassword = 'Hanh290901';

test.beforeEach('Login' , async ({ page }) => {
    await login(page, testusername, testpassword);
});

test ( ' Edit ', async({ page }) => {
    await page.getByTitle('24-hour').click();
    await page.locator('svg[data-icon="edit"]').click();
    await page
        .locator('input[id="interval"]')
        .fill('75');
    await page
        .locator('input[id="retry-interval"]')
        .fill('60');
    await page.getByRole('button', {name: 'Save'}).click();
    expect(page.getByRole('alert',{name : 'Saved.'})).toBeVisible;
});

test ( 'Delete ', async({ page }) => {
    await page.getByTitle('24-hour').click();
    await page.getByRole('button', {name: ' Delete'}).click();
    await page.getByRole('button', {name: 'Yes'}).click();
    expect(page.getByRole('alert',{name : 'Deleted Successfully..'})).toBeVisible;
});

test ( 'Notification Test Telegram ', async({ page }) => {
    await page.getByTitle('24-hour').click();
    await page.locator('svg[data-icon="edit"]').click();
    await page.getByRole('button',{ name : 'Setup Notification'}).click();
    await page.locator('select[id="notification-type"]').selectOption('Telegram');
    await page
        .locator('input[id="notification-name"]')
        .fill("My Telegram Alert (5)");
    await page
        .locator('//div[@id="telegram-bot-token"]//input[@class="form-control"]')
        .fill("6419771274:AAGVSgAI72H8pZ4E8oum8V0sIaSDuk-yQr0");
        await page
        .locator('input[id="telegram-chat-id"]')
        .fill("-4139271149");
    await page.getByRole('button',{ name : "Test"}).click();
    expect(page.getByRole('alert',{name : 'Send Successfully.'})).toBeVisible;
});

test ( 'Export data ', async ({page }) => {
    await page.locator("li[class='nav-item']").click();
    await page.getByText(' Settings').click();
    await page.getByText(' Backup').click();
    await page.getByRole('button',{ name : "Export"}).click();
    await page.waitForTimeout(5000);
    /*const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download file').click();
    const download = await downloadPromise;
    const download_now= await download.saveAs('c:\Users\LAP12445-local\Documents\GitHub\iTester-QLead-Program\web-application-automation-testing' + download.suggestedFilename());
    expect(download_now).toBeDefined;*/
    await page.goto('chrome://downloads/');
   /* const downloads = await page.evaluate(() => {
        const items = document.querySelectorAll('downloads-item');
        return Array.from(items).map((item) => (item as HTMLElement).innerText);
      });
  
      expect(downloads.length).toBeGreaterThan(0);*/
    expect(page.locator('downloads-item[id="frb0"]')).toBeVisible;
});


