
const { SpecReporter } = require('jasmine-spec-reporter');
const moment = require('moment');

exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['POMspec.js'],
  capabilities: {
    'browserName': 'chrome'
   },
   directConnect: true,
   framework: 'jasmine2',
        jasmineNodeOpts: {
          showColors: true,
          defaultTimeoutInterval: 30000,
          print: function() {}
        },
        
        
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    let currentCommand = Promise.resolve();
    const webdriverSchedule = browser.driver.schedule;
    browser.driver.schedule = (command, description) => {
      currentCommand = currentCommand.then(() =>
        webdriverSchedule.call(browser.driver, command, description)
      );
      return currentCommand;
    };

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: '/Users/suparna/Reports',
        filePrefix: 'xmlresults'
    }));
    var fs = require('fs-extra');

    fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });

    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');

                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer.from(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
},

onComplete: function() {
  var browserName, browserVersion;
  var capabilities = browser.getCapabilities();

  capabilities.then(function (caps) {
     browserName = caps.get('browserName');
     browserVersion = caps.get('version');
     platform = caps.get('platform');

     var HTMLReport = require('protractor-html-reporter-2');
     var today = new Date(),
     timeStamp = moment().format('YYYY-MM-DD HH:mm');
     testConfig = {
         reportTitle: 'Protractor Test Execution Report',
         outputPath: '/Users/suparna/Reports',
         outputFilename: timeStamp,
         screenshotPath: '../screenshots',
         testBrowser: browserName,
         browserVersion: browserVersion,
         modifiedSuiteName: false,
         screenshotsOnlyOnFailure: true,
         testPlatform: platform
     };
     new HTMLReport().from('/Users/suparna/Reports/xmlresults.xml', testConfig);
 });

},

}


