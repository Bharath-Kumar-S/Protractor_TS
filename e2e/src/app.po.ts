import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath('//*[@id = "rocket"]/following-sibling::span')).getText() as Promise<string>;
  }

  getTextofheader() {
    return element(by.xpath('//*[@id = "rocket"]/following-sibling::span')).getText() as Promise<string>;
  }

  LearnAngularIink() {
    element(by.linkText('Learn Angular')).click();
  }
}
