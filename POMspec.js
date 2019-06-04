var loginpage = require('./loginpage');
var teaminfo = require('./teaminfo');
var myprojects = require('./myprojects');
var startproject = require('./startproject');
var tabnavigation = require('./tabnavigation');

describe('IT Portal', function() {

    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

    it('Login to IT Portal', function() {
        loginpage.loginp();
        });


    it('Team Info', function(){
            teaminfo.teamin();
        });

    xit ('Tab Nav', function(){
        tabnavigation.tab();
    })


    it ('My projects', function(){
        myprojects.projectsIT();
        });

    it('start project with us', function(){
        startproject.startprojectwithus();
        })


});