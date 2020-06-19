import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('');
  }

  getNavBarTitle(width, height): Promise<any> {
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('app-main-nav-bar div.mainTitle')).getText() as Promise<any>;
  }

  getNavBarRevatureIcon(){
    return element(by.css('[src = "https://imgur.com/QMNMf4M.png"]'));
  }

  getNavBarViewQCReportsButton(width, height){
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('[routerLink = "/qc"]'));
  }

  getNavBarViewAssessmentReportsButton(width, height){
    browser.driver.manage().window().setSize(width, height);
    return element(by.css('[routerLink = "/assessment"]'));
  }


  getAllGraphsOnPage() {
    return element.all(by.id('divChart'));
  }

  // First Test Protractor gets the Title Text
  getTitleText(): Promise<string> {
    return element(by.tagName('app-test-chart')).getText() as Promise<string>;
  }

  // Second Test Gets the Canvas Table
  getCanvasTable(): Promise<any> {
    return element(by.tagName('canvas')).getText() as Promise<any>;
  }

  // Third Test Changes teh Canvas Table
  changeCanvasTable(): Promise<any> {
    return element(by.tagName('label')).getText() as Promise<any>;
  }
  selectPrevLabel() {
    browser
      .actions()
      .click()

  }
  selectNextLabel() {
    browser
      .actions()
      .click()
  }

  getAllGraphs() {
    browser.sleep(3000);
    browser.driver.manage().window().setSize(1920, 1080); // isBig = true
    element(by.id('demo')).click();
    return element.all(by.tagName('canvas'));
  }
  getAllGraphsMobileView() {
    browser.sleep(3000);
    browser.driver.manage().window().setSize(1000, 1080); // isBig = false
    element(by.className('hambIcon')).click();
    element(by.id('demo2')).click();
    return element.all(by.tagName('canvas'));
  }
}
