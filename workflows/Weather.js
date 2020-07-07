'use strict'
const { browser, element, ExpectedConditions } = require("protractor");
let EC = protractor.ExpectedConditions;
import { WeatherService } from '../service/WeatherService'

let weatherService = new WeatherService();

describe('Launching of browser and going to Weather panel and checking the pincode', function () {

    beforeEach(() => {
        let config = browser.params.config;
        let hostname = config.host;
        browser.get(hostname);
    })

    it("Click On India and goto Sections, weather and enter pincode", () => {
        weatherService.navigateMainNavLink("INDIA")
        weatherService.selectFromSections("WEATHER")
        weatherService.enterCityAndVerify("Amritsar")
        browser.sleep(5000)
    })

})