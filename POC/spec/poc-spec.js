let path = require('path');
let EC = protractor.ExpectedConditions;

let LCCIITPortalLogin_PO = new browser.params.LCCIITPortalLogin_PO();

// Data Config JSON Path
//let dataConfigJSONAbsPath = browser.params.dataConfigJSONAbsPath;

// Read Data Config JSON
//let DataConfigJson = fs.readFileSync(dataConfigJSONAbsPath);
//let dataConfigJson = JSON.parse(DataConfigJson);

//------------------******------JSON File: User Login details------*******
let portalUserName = browser.params.lcciITPortal.userName;
let portalPassword = browser.params.lcciITPortal.userPwd;
let portalSiteURL = browser.params.lcciITPortal.siteUrl;


//---------------------------------- Functionality Validation of POC scenarios-----------------------------//

beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
});

describe('lcciITPortal-poc-spec', () => {
    it('lcciITPortal-poc-spec', async () => {
    });
});

// Login to ITPortal

describe('IT Portal => Login into LCCI IT Portal', () => {
    it('IT Portal => Login as : ' + portalUserName, async () => {
        await browser.driver.get(portalSiteURL);
        await LCCIITPortalLogin_PO.typeUserName(portalUserName);
        await LCCIITPortalLogin_PO.typeUserPwd(portalPassword);
        expect(await LCCIITPortalLogin_PO.clickLoginBtn()).toBe(true);
    });
});