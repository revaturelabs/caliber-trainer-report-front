import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('Testing Navigation and Top Navbar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title of the application on the navbar on wide screen', () => {
    page.navigateTo();
    expect(page.getNavBarTitle(1920, 1080)).toEqual('EXCALIBER');
  });

  it('should display Revature icon on navbar', () => {
    page.navigateTo();
    expect(page.getNavBarRevatureIcon().isPresent()).toBe(true);
  });

  it('should display QC button on navbar', () => {
    page.navigateTo();
    expect(page.getNavBarViewQCReportsButton(1920, 1080).getText()).toBe('View QC Reports');
  });

  it('should display Assessment button on navbar', () => {
    page.navigateTo();
    expect(page.getNavBarViewAssessmentReportsButton(1920, 1080).getText()).toBe('View Assessment Reports');
  });

  it('should display QC button under Hamburger collapse button', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(315, 812);
    element(by.css('app-main-nav-bar .hambIcon')).click();
    expect(element(by.css('[href="/qc"]')).getText()).toBe('View QC Reports');
  });

  it('should display Assessment button under Hamburger collapse button', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(315, 812);
    element(by.css('app-main-nav-bar .hambIcon')).click();
    expect(element(by.css('[href="/assessment"]')).getText()).toBe('View Assessment Reports');
  });

  it('should navigate to QC assessment reports page from Homepage', () => {
    page.navigateTo();
    page.getNavBarViewQCReportsButton(1920, 1080).click();
    expect(element(by.css('app-qc h2')).getText()).toBe('QC Technical Status');
  });

  it('should navigate to QC assessment reports page from Homepage', () => {
    page.navigateTo();
    page.getNavBarViewAssessmentReportsButton(1920, 1080).click();
    expect(element(by.css('app-assessment h2')).getText()).toBe('Assessment Technical Status');
  });

});
