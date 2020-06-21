import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('');
  }

  getNavBarTitle(width, height): Promise<any> {
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('app-main-nav-bar div.mainTitle')).getText() as Promise<any>;
  }

  getNavBarRevatureIcon() {
    return element(by.css('[src = "https://imgur.com/QMNMf4M.png"]'));
  }

  getNavBarViewQCReportsButton(width, height) {
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('[routerLink = "/qc"]'));
  }

  getNavBarViewAssessmentReportsButton(width, height) {
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('[routerLink = "/assessment"]'));
  }

  uploadTestJSONFile() {
    const path = require('path');
    const fileToUpload = '../JSONTestFiles/data.json',
      absolutePath = path.resolve(__dirname, fileToUpload);

    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    element(by.css('input[type="submit"]')).click();
  }

}
