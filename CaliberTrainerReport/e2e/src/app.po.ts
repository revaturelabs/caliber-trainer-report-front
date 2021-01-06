import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

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

  getNavBarViewReviewPageButton(width, height) {
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('[routerLink = "/review-page"]'));
  }

  getNavBarViewAssessmentReportsButton(width, height) {
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('[routerLink = "/assessment"]'));
  }

  uploadTestJSONFile() {
    const path = require('path');
    const fileToUpload = '../JSONTestFiles/data.json';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    element(by.css('input[type="submit"]')).click();
    let ec = protractor.ExpectedConditions;
    browser.wait(ec.alertIsPresent(), 5000, "Alert is not present")
  }

  navigateToReportsPage(reportPage: string){
    this.navigateTo();
    if (reportPage === 'QC'){
      this.getNavBarViewQCReportsButton(1920, 1080).click();
    }else {
      this.getNavBarViewAssessmentReportsButton(1920, 1080).click();
    }
  }

  testQCTables(chartName: string){
    let graphWidth;
    graphWidth = element(by.id(chartName)).getAttribute('width');
    expect(graphWidth).toBeGreaterThan(1000);
    expect(element(by.xpath('//table/th[2]')).isPresent()).toBe(true);
  }

  dropdownRawDataQCTest(dropdownValue: string, chartName: string) {
    this.navigateToReportsPage('QC');
    element(by.id('qc-graph-selector')).click();
    element(by.css(`[value=${dropdownValue}]`)).click();
    this.testQCTables(chartName);
  }

  doubleClickQCTest(tag: string, chartName: string) {
    this.navigateToReportsPage('QC');
    browser.actions().doubleClick(element(by.css(`${tag} .card-title`))).perform();
    this.testQCTables(chartName);
  }

}
