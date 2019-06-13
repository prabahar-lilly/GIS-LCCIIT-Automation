var myprojects =function(){

    this.projectsIT =function(){

        var project = element(by.linkText('My Projects'));
        project.click();
        browser.sleep(2000);

        
        element(by.css('.topTitle.red-text.text-darken-4')).getText().then(function(val){
        expect((val)).toBe('My Projects');
        browser.sleep(2000);

         })


        var createnewproject = element(by.css('.waves-effect.waves-light.btn'));
         createnewproject.click();
         browser.sleep(2000);

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
         browser.sleep(5000);  


        var LCCIIT = element(by.css('.responsive-img'));
             LCCIIT.click();
             browser.sleep(2000);
     
     }
};
module.exports = new myprojects();