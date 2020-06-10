import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  getAllGraphsOnPage(){
    return element.all(by.id('divChart'));
  }

  // First Test Protractor gets the Title Text
  getTitleText(): Promise<string> {
    return element(by.tagName('app-test-chart')).getText() as Promise<string>;
  }

  // Second Test Gets the Canvas Table
  getCanvasTable(): Promise<any> {
    return element(by.tagName('canvas')).getText() as Promise <any>;
  }

  // Third Test Changes teh Canvas Table
  changeCanvasTable(): Promise<any> {
    return element(by.tagName('label')).getText() as Promise<any>;
  }
  selectPrevLabel(){
    browser
        .actions()
        .click()

  }
  selectNextLabel(){
    browser
        .actions()
        .click()
        
  }
}
