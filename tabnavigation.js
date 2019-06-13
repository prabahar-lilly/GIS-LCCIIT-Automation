var tabnavigation =function(){
        
        this.tab =function(){

        var services = element(by.linkText('Our Services'));
        services.click();
        browser.sleep(2000);

        var work = element(by.linkText('Our Work'));
        work.click();
        browser.sleep(2000);

        var processes = element(by.linkText('Our Processes'));
        processes.click();
        browser.sleep(2000);

        var projects = element(by.linkText('My Projects'));
        projects.click();
        browser.sleep(2000);


        var team = element(by.linkText('Our Team'));
        team.click();
        browser.sleep(2000);


    }
}

module.exports = new tabnavigation();