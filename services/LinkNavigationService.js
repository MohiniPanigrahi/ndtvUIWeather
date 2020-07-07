let EC = protractor.ExpectedConditions;
import {ElementUtils} from '../utils/ElementUtils'
export class LinkNavigationService{
    constructor(){
        console.log("Super class")

    }

    navigateMainNavLink(navLinkText){
        let indiaLink = element(by.partialLinkText(navLinkText))
        browser.wait(EC.visibilityOf(indiaLink, 2000))
        indiaLink.click()
    }

    selectFromSections(module){
        let sections = element(by.cssContainingText('#topnav_section',"Sections"))
        browser.wait(EC.visibilityOf($('.noti_wrap'), 5000))
        $('.noti_wrap').$$('.notnow').click()
        browser.wait(EC.visibilityOf(sections, 2000))
        browser.executeScript('window.scrollTo(0,10000);').then(function () {
            sections.click();
        })

        ElementUtils.selectElementFromList($$('#topnav'), module).click()
    }
}