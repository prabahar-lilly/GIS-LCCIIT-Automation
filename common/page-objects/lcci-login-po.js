//'use strict';
const EC = protractor.ExpectedConditions;
const path = require('path');


const LCCIITPortalLogin_PO = function () {
    
    this.userName = element(by.id('username'));  // Username Text Area
    this.userPassword = element(by.id('password')); // Password Text Area
    this.loginButton = element(by.className('.ping-button.normal.allow')); // Login Button
    this.currentUser = element(by.className('userName'));   // Logged in User

    
    this.ecCondUserName1 = EC.and(EC.visibilityOf(this.userName),
        EC.visibilityOf(this.loginButton),
        EC.elementToBeClickable(this.loginButton));
    
    this.ecCondPassword1 = EC.and(EC.visibilityOf(this.userPassword),
        EC.visibilityOf(this.loginButton),
        EC.elementToBeClickable(this.loginButton));
        

    this.typeUserName = async (uName) => {
        await browser.wait(this.ecCondUserName1, 5000);
        await this.userName.click();
        await this.userName.clear();
        await this.userName.sendKeys(uName);
        return this.userName.getAttribute('value');
    };
    
    
    this.typeUserPwd = async (uPwd) => {
        await browser.wait(this.ecCondPassword1, 5000);
        await this.userPassword.click();
        await this.userPassword.clear();
        await this.userPassword.sendKeys(uPwd);
        return this.userPassword.getAttribute('value');
    };

    this.clickLoginBtn = async () => {
        await browser.driver.wait(EC.elementToBeClickable(this.loginButton, 6000));
        await this.loginButton.click();
        await browser.driver.wait(EC.visibilityOf(this.currentUser), 6000);
    };   
        
};
module.exports = LCCIITPortalLogin_PO;