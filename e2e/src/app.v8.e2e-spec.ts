import { by, element, browser, protractor, $ } from 'protractor';

describe(' V8 test ', () => {

    beforeEach(() => {
        browser.get('https://clarity.design/');
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = false;
    })

    it('simple test', () => {

        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath('//a[text()="Get Started"]'))), 5000);
        element(by.xpath('//a[text()="Get Started"]')).click();

        expect(element(by.xpath('//h1[text()="Get started with Clarity Design System"]')).isPresent()).toBe(true);
    })

    afterEach(() => {
        browser.waitForAngularEnabled(true);
    })

})




