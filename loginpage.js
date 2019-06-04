var loginpage= function(){

this.loginp = function(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();

    browser.get('https://cirr-lcci-it-portal-vue-dev.herokuapp.com/');

    var username = element(by.id('username'));
    username.sendKeys('C263749');

    var pass = element(by.id('password'));
    pass.sendKeys('Ankit@207');

    var signon = element(by.css('.ping-button.normal.allow'));
    signon.click();


    browser.getCurrentUrl().then(function(url){
        expect((url)).toContain('portal');
        browser.sleep(5000);

    var logo = element.all(by.css('.white-text'));
    logo.getText().then(function(text){
        expect((text)).toContain('Welcome to LCCI IT');
        console.log(text);
        browser.sleep(5000);
        });
    });
};
}
module.exports = new loginpage();