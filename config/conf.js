var config = require('./config.json')
//var express = require("express");

exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-browser-side-navigation']
        }
    },

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../workflows/Weather.js'],

    jasmineNodeOpts: {
        // defaultTimeoutInterval: 30000
    },

    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        require('babel-register');
      require('babel-core/register')({ presets: ['env'] });
        browser.params.config = config["weather"];
        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;
        };
        browser.driver.manage().window().maximize();
    }
}
global.WEB_ELEMENT_SYNC_TIMEOUT = 30000;