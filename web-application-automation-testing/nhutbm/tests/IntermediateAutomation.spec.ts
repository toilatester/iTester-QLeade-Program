import { test, expect } from '@playwright/test';

let randomNumber = Math.floor(Math.random() * 100) + 20;
let  urlDiscord = "https://"+ randomNumber + "discordwebhook.com";
let hostName = "nhutbm" + randomNumber;
let emailFrom = hostName + "nefrom@gmail.com";
let emailTo = hostName + "neto@gmail.com";
let botToken = randomNumber.toString();
let oldInterval = randomNumber.toString();
let updateInterval = randomNumber.toString();
let name = "FriendlyName" + randomNumber;
let url = "https://" + name + ".com.vn";

test('6. **Edit Monitor:**', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await page.locator('xpath=//input[@id="floatingInput"]').clear();
  await page.locator('xpath=//input[@id="floatingInput"]').fill('nhutbm');
  await page.locator('xpath=//input[@id="floatingPassword"]').clear();
  await page.locator('xpath=//input[@id="floatingPassword"]').fill('Aa123456');
  await page.locator('xpath=//button[@type="submit" and text()="Login"]').click();
  await expect(page).toHaveTitle('Uptime Kuma - Login');
  // await page.getByText('FriendlyName').click();
  await page.locator('xpath=(//div[@class="monitor-list scrollbar"]//a[contains(@href,"dashboard")])[1]').click();
  await page.locator('xpath=//div[@class="functions"]//a[@href="/edit/8"]').click();
  await page.locator('xpath=//input[@id="interval"]').clear();
  await page.locator('xpath=//input[@id="interval"]').fill(updateInterval);
  await page.locator('xpath=//button[@id="monitor-submit-btn"]').click();
  await page.waitForTimeout(5000);
  await page.goBack();
});

test('7. **Delete Monitor:**', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await page.locator('xpath=//input[@id="floatingInput"]').clear();
  await page.locator('xpath=//input[@id="floatingInput"]').fill('nhutbm');
  await page.locator('xpath=//input[@id="floatingPassword"]').clear();
  await page.locator('xpath=//input[@id="floatingPassword"]').fill('Aa123456');
  await page.locator('xpath=//button[@type="submit" and text()="Login"]').click();
  await expect(page).toHaveTitle('Uptime Kuma - Login');
  await page.locator('//a[@href="/add" and @title="Tooltip on top top top debug"]').click();
  await page.locator('xpath=//input[@id="name"]').fill(name);
  await page.locator('xpath=//input[@id="url"]').fill(url);
  await page.locator('xpath=//input[@id="interval"]').fill(oldInterval);
  await page.locator('xpath=//button[@id="monitor-submit-btn"]').click();
  await page.locator('xpath=(//div[@class="monitor-list scrollbar"]//a[contains(@href,"dashboard")])[1]').click();
  await page.locator('xpath=(//button[@class="btn btn-danger"])[1]').click();
  await page.waitForTimeout(2000);
  let confirmDelete = await page.locator('xpath=//div[@class="modal-body" and text()="Are you sure want to delete this monitor?"]').textContent();
  console.log("Confirm before delete: " + confirmDelete);
  await page.locator('xpath=(//button[@type="button" and @class="btn btn-danger"])[1]').click();
  await page.waitForTimeout(5000);
  await page.goBack();
  await expect(page).toHaveTitle("Uptime Kuma");
  try {
    // Attempt to find the element
    const elementHandle = await page.waitForSelector(
      '//div[@class="monitor-list scrollbar"]//a[contains(@href,"dashboard")])[1]',
      { state: 'attached' } // Ensure the element is visible
    );
    console.log("Monitor: "+ name +" found!");
  } catch (error) {
    console.log("Monitor: "+ name +" not found!");
  }
});

test('8. **Notification Test:**', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await page.locator('xpath=//input[@id="floatingInput"]').clear();
  await page.locator('xpath=//input[@id="floatingInput"]').fill('nhutbm');
  await page.locator('xpath=//input[@id="floatingPassword"]').clear();
  await page.locator('xpath=//input[@id="floatingPassword"]').fill('Aa123456');
  await page.locator('xpath=//button[@type="submit" and text()="Login"]').click();
  await expect(page).toHaveTitle('Uptime Kuma - Login');
  await page.locator('xpath=//div[contains(@class,"dropdown dropdown-profile-pic")]').click();
  await page.waitForTimeout(1500);
  await page.locator('xpath=//a[@href="/settings/general" and @class="dropdown-item"]').click();
  await page.locator('xpath=//a[@href="/settings/notifications"]').click();
  await page.locator('xpath=//button[@class="btn btn-primary me-2" and text()="Setup Notification"]').click();
  //Setup Telegram
  await page.locator('xpath=//input[@id="notification-name"]').clear();
  await page.locator('xpath=//input[@id="notification-name"]').fill('Notification By Telegram');
  await page.locator('xpath=//div[@id="telegram-bot-token"]/input').clear();
  await page.locator('xpath=//div[@id="telegram-bot-token"]/input').fill(botToken);
  await page.locator('xpath=//input[@id="telegram-chat-id"]').clear();
  await page.locator('xpath=//input[@id="telegram-chat-id"]').fill(botToken);
  await page.locator('xpath=(//button[@class="btn btn-primary"])[3]').click();
  //Setup Email
  await page.locator('xpath=//button[@class="btn btn-primary me-2" and text()="Setup Notification"]').click();
  await page.waitForTimeout(2000);
  await page.locator('xpath=//select[@id="notification-type"]').click();
  await page.locator('xpath=//select[@id="notification-type"]').selectOption("Email (SMTP)");
  await page.locator('xpath=//input[@id="notification-name"]').clear();
  await page.locator('xpath=//input[@id="notification-name"]').fill('Notification By Email');
  await page.locator('xpath=//input[@id="hostname"]').clear();
  await page.locator('xpath=//input[@id="hostname"]').fill(hostName);
  await page.locator('xpath=//input[@id="port"]').clear();
  await page.locator('xpath=//input[@id="port"]').fill(botToken);
  await page.locator('xpath=//input[@id="from-email"]').clear();
  await page.locator('xpath=//input[@id="from-email"]').fill(emailFrom);
  await page.locator('xpath=//input[@id="to-email"]').clear();
  await page.locator('xpath=//input[@id="to-email"]').fill(emailTo);
  await page.locator('xpath=(//button[@class="btn btn-primary"])[3]').click();
  //Setup Discord
  await page.locator('xpath=//button[@class="btn btn-primary me-2" and text()="Setup Notification"]').click();
  await page.waitForTimeout(2000);
  await page.locator('xpath=//select[@id="notification-type"]').click();
  await page.locator('xpath=//select[@id="notification-type"]').selectOption("Discord");
  await page.locator('xpath=//input[@id="notification-name"]').clear();
  await page.locator('xpath=//input[@id="notification-name"]').fill('Notification By Discord');
  await page.locator('xpath=//input[@id="discord-webhook-url"]').clear();
  await page.locator('xpath=//input[@id="discord-webhook-url"]').fill(urlDiscord);
  await page.locator('xpath=(//button[@class="btn btn-primary"])[3]').click();
});

test('9. **Chart Interaction:**', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await page.locator('xpath=//input[@id="floatingInput"]').clear();
  await page.locator('xpath=//input[@id="floatingInput"]').fill('nhutbm');
  await page.locator('xpath=//input[@id="floatingPassword"]').clear();
  await page.locator('xpath=//input[@id="floatingPassword"]').fill('Aa123456');
  await page.locator('xpath=//button[@type="submit" and text()="Login"]').click();
  await expect(page).toHaveTitle('Uptime Kuma - Login');

  
});

test('10. **Export Data:**', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await page.locator('xpath=//input[@id="floatingInput"]').clear();
  await page.locator('xpath=//input[@id="floatingInput"]').fill('nhutbm');
  await page.locator('xpath=//input[@id="floatingPassword"]').clear();
  await page.locator('xpath=//input[@id="floatingPassword"]').fill('Aa123456');
  await page.locator('xpath=//button[@type="submit" and text()="Login"]').click();
  await expect(page).toHaveTitle('Uptime Kuma - Login');
  await page.locator('xpath=//div[contains(@class,"dropdown dropdown-profile-pic")]').click();
  await page.locator('xpath=//a[@href="/settings/general"]').click();
  await page.locator('xpath=//a[@href="/settings/backup"]').click();
  await page.waitForTimeout(2000);
  //Download
  // Start waiting for download before clicking. Note no await.
  const downloadPromise = page.waitForEvent('download');
  await page.locator('xpath=(//button[@class="btn btn-primary"])[2]').click();
  const download = await downloadPromise;

  // Wait for the download process to complete and save the downloaded file somewhere.
  await download.saveAs('./filedownload/' + download.suggestedFilename());
});
