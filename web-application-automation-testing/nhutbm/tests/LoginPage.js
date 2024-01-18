const { expect } = require ('@playwright/test');

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page=page;
        this.userNameTXT = page.locator('xpath=//input[@id="floatingInput"]');
        this.passWordTXT = page.locator('xpath=//input[@id="floatingPassword"]');
        this.logInBTT = page.locator('xpath=//button[@type="submit" and text()="Login"]');
    }
    async navigateTo(url){
        await this.page.goto(url);
    }

    async inputUserName(value)
    {
        await this.userNameTXT.clear();
        await this.userNameTXT.fill(value);
    }

    async inputPassWord(value)
    {
    
        await this.passWordTXT.clear();
        await this.passWordTXT.fill(value);
    }

    async clickLogin()
    {
        await this.logInBTT.click();
    }


    async pageObjectModel(){
        await this.clickLogin();
    }
    

}