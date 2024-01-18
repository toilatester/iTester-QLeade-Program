const{test,expect}= require ('@playwright/test');
const {LoginPage} = require('./LoginPage');

test('Login Uptime Kuma successfully', async({page})=>{
const loginPage = new LoginPage(page);
await loginPage.navigateTo('http://localhost:3000/dashboard');
await loginPage.inputUserName('nhutbm');
await loginPage.inputPassWord('Aa123456');
await loginPage.clickLogin();
await expect(page).toHaveTitle('Uptime Kuma - Login');
});