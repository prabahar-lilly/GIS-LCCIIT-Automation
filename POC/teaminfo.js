var teaminfo=function() {

    this.teamin =function(){

        var team = element.all(by.css('.white-text')).filter(function(elem){
            return elem.getText().then(function(text){
            return text == 'Our Team Information' ;

                });
            }).click();
            browser.sleep(5000); 

                            var EAD = element.all(by.css('.navigation__link')).filter(function(elem){
                                    return elem.getText().then(function(text){
                                    return text == 'Enterprise Application Development' ;
                                        });
                                            }).click();
                                    browser.sleep(5000);  
                                    
                            var DS = element.all(by.css('.navigation__link')).filter(function(elem){
                                        return elem.getText().then(function(text){
                                        return text == 'Data services' ;
                                            });
                                                }).click();
                                        browser.sleep(5000);
                
                            var displaytext = element(by.css('.lit_teamDesc.center'));
                            displaytext.getText().then(function(text){
                            expect(text).toContain('member');
                            console.log(text);
                            });

                            var DH = element.all(by.css('.navigation__link')).filter(function(elem){
                                return elem.getText().then(function(text){
                                return text == 'Digital Health' ;
                                    });
                                        }).click();
                
                
                                browser.sleep(2000);
                
                
                            var ourservices = element.all(by.css('.right.hide-on-med-and-down'));
                            return ourservices.getText().then(function(coloumn){
                                console.log(coloumn);
                                expect(coloumn).toEqual['Our Services Our work Our Processes My Projects Our Team'];
                
                            });
    };

    };

    module.exports = new teaminfo();