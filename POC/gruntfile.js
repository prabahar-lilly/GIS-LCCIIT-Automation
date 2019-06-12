/**
 * Created by Alagappan on 16/12/15.
 */
module.exports = function (grunt) {
    require('time-grunt')(grunt);


    // Project configuration.
    grunt.initConfig({

        // Metadata.
        meta: {
            version: '0.1.0'
        },
        banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* http://PROJECT_WEBSITE/\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'YOUR_NAME; Licensed MIT */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['lib/FILE_NAME.js'],
                dest: 'dist/FILE_NAME.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/FILE_NAME.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['spec/**/*.js', 'lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        protractor: {
            options: {
                //configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },

            // Chrome - IT Portal POC Sequential
            lcci_it_portal_poc_chrome: {
                options: {
                    keepAlive: true,
                    configFile: "lcci.itportal.poc.chrome.protractor.conf.js",
                    webdriverManagerUpdate: false,
                    args: {
                        params: {
                            itPortal: {
                                siteUrl: 'https://cirr-lcci-it-portal-vue-dev.herokuapp.com',
                                userName: 'C287459',
                                userPwd: 'Lilly123'
                            },
                            portalVersion: '1x',
                            capabilities: {
                                'shardTestFiles': false,
                                'maxInstances': 1
                            },
                        },
                        specs: ["./spec/poc-spec.js"]
                    }
                },
                run: {}
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-protractor-runner');

    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

    /*
    grunt lcci_itportal_poc --params='{ "itPortal" : {"siteUrl" : "https://cirr-lcci-it-portal-vue-dev.herokuapp.com", "userName" : "C287459", "userPwd" : "Lilly123"} ,"versionNo" : "01" }' --target="chrome"
     */
    grunt.registerTask('lcci_itportal_poc', 'LCCI IT Portal - POC', function (n) {
        var target = grunt.option('target');
        if (target === 'firefox') {
            grunt.task.run('protractor:lcci_it_portal_poc_firefox');
        } else if (target === 'safari') {
            grunt.task.run('protractor:lcci_it_portal_poc_chrome')
        } else {
            grunt.task.run('protractor:lcci_it_portal_poc_chrome');
        }
    });


    /*grunt.registerTas'k'('new_site_saucelabs', [
        'protractor:new_site_saucelabs_chrome', 'protractor:new_site_saucelabs_firefox', 'protractor:new_site_saucelabs_IE11', 'protractor:new_site_saucelabs_Safari', 'protractor:new_site_saucelabs_edge'
    ]);*/

};