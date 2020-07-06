'use strict'
const { browser, element, ExpectedConditions } = require("protractor");
let EC = protractor.ExpectedConditions;
import {ElementUtils} from '../utils/ElementUtils'

describe('Launching of browser and going to Weather panel and checking the pincode', function () {

    beforeEach(() => {
        let config = browser.params.config;
        let hostname = config.host;
        browser.get(hostname);
    })

    it("Click On India and goto Sections, weather and enter pincode", () => {
        // let indiaLink = $$('a[href* = "india?pfrom=home-mainnavgation"]')
        // let indiaLink = element(by.xpath('//a[contains(text(),"INDIA")]')) 
        let indiaLink = element(by.partialLinkText('INDIA'))
        browser.wait(EC.visibilityOf(indiaLink, 2000))
        indiaLink.click()
        let sections = $$('#topnav_section')
        browser.wait(EC.visibilityOf(sections), 2000)
        ElementUtils.selectElementFromList(sections, "Weather")
    })

})