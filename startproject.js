    var startproject = function(){

    this.startprojectwithus = function(){


    var spwu = element.all(by.css('.btn-large.white-text.red.accent-2.lit_create_prgBtn')).filter(function(val){
        return val.getText().then(function(retval){
        return retval = 'START PROJECT WITH US'

            })
        }).click();
        browser.sleep(3000);

        expect(element(by.css('.container')).getText()).toContain('LCCI Project request Form');


        var projectname = element(by.id('project_name'));
        projectname.sendKeys('test');

        var projectoverview = element(by.id('projectOverview'));
        projectoverview.sendKeys('Testing Automation for LCCI Portal');

        element(by.css('.select-dropdown.dropdown-trigger')).click();
        browser.sleep(1000);


        element.all(by.css('.dropdown-content.select-dropdown li')).filter(function(val){
        return val.getText().then(function(retval){
        return retval == 'LCCI'
            browser.sleep(2000);
            })
            }).click();


            var d = new Date();
            var startDate = element(by.id('desiredStartDate'));
            startDate.sendKeys(d.getFullYear() + '-0' + d.getMonth() + '-0' + d.getDate())


        var submitbutton = element(by.css('.btn.waves-effect.waves-light'));
        submitbutton.click();   
        browser.sleep(2000);  
    
    }
}
module.exports = new startproject();
