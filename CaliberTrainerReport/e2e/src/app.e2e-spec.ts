import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('Testing Navigation and Top Navbar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1
  it('should display the title of the application on the navbar on wide screen', () => {
    page.navigateTo();
    expect(page.getNavBarTitle(1920, 1080)).toEqual('EXCALIBER');
  });

  // 2
  it('should display Revature icon on navbar', () => {
    page.navigateTo();
    expect(page.getNavBarRevatureIcon().isPresent()).toBe(true);
  });

  // 3
  it('should display QC button on navbar', () => {
    page.navigateTo();
    expect(page.getNavBarViewQCReportsButton(1920, 1080).getText()).toBe('View QC Reports');
  });

  // 4
  it('should display Assessment button on navbar', () => {
    page.navigateTo();
    expect(page.getNavBarViewAssessmentReportsButton(1920, 1080).getText()).toBe('View Assessment Reports');
  });

  // 5
  it('should display QC button under Hamburger collapse button', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(315, 812);
    element(by.css('app-main-nav-bar .hambIcon')).click();
    expect(element(by.css('[href="/qc"]')).getText()).toBe('View QC Reports');
  });

  // 6
  it('should display Assessment button under Hamburger collapse button', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(315, 812);
    element(by.css('app-main-nav-bar .hambIcon')).click();
    expect(element(by.css('[href="/assessment"]')).getText()).toBe('View Assessment Reports');
  });

  // 7
  it('should navigate to QC reports page from Homepage', () => {
    page.navigateTo();
    page.getNavBarViewQCReportsButton(1920, 1080).click();
    expect(element(by.css('app-qc h2')).getText()).toBe('QC Technical Status');
  });

  // 8
  it('should navigate to assessment reports page from Homepage', () => {
    page.navigateTo();
    page.getNavBarViewAssessmentReportsButton(1920, 1080).click();
    expect(element(by.css('app-assessment h2')).getText()).toBe('Assessment Technical Status');
  });

  // 9
  it('should navigate to QC reports page with Hamburger Icon', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(315, 812);
    element(by.css('app-main-nav-bar .hambIcon')).click();
    element(by.id('demo2')).click();
    expect(element(by.css('app-qc h2')).getText()).toBe('QC Technical Status');
  });

  // 10
  it('should navigate to Assessment reports page with Hamburger Icon', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(315, 812);
    element(by.css('app-main-nav-bar .hambIcon')).click();
    element(by.id('demo3')).click();
    expect(element(by.css('app-assessment h2')).getText()).toBe('Assessment Technical Status');
  });

});

describe('(NEGATIVE)Testing graph display', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 15
  it('should not display qc batches technical status chart without uploading json file', () => {
    page.navigateToReportsPage('QC');
    expect(element(by.css('app-qcbatches-technical-status #divChart1 .chartjs-render-monitor')).isPresent()).toBe(false);
  });

  // 16
  it('should not display qc batches individual category technical chart without uploading json file', () => {
    page.navigateToReportsPage('QC');
    expect(element(by.css('app-qcbatches-indiv-category-technical-status #divChart2 .chartjs-render-monitor')).isPresent()).toBe(false);
  });

  // 17
  it('should not display qc week category technical chart without uploading json file', () => {
    page.navigateToReportsPage('QC');
    expect(element(by.css('app-qcbatches-week-category-technical-status #divChart3 .chartjs-render-monitor')).isPresent()).toBe(false);
  });
});

describe('(POSITIVE)Testing file upload and graph display', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 11
  it('should upload JSON file', () => {
    page.navigateTo();
    page.uploadTestJSONFile();
    expect(element(by.css('app-progress .uploaded-file')).isPresent()).toBe(true);
  });

  // 12
  it('should display qc batches technical status chart after json file upload', () => {
    page.navigateToReportsPage('QC');
    expect(element(by.css('app-qcbatches-technical-status #divChart1 .chartjs-render-monitor')).isPresent()).toBe(true);
  });

  // 13
  it('should display qc batches individual category technical status chart after json file upload', () => {
    page.navigateToReportsPage('QC');
    expect(element(by.css('app-qcbatches-indiv-category-technical-status #divChart2 .chartjs-render-monitor')).isPresent()).toBe(true);
  });

  // 14
  it('should display qc week category technical status chart after json file upload', () => {
    page.navigateToReportsPage('QC');
    expect(element(by.css('app-qcbatches-week-category-technical-status #divChart3 .chartjs-render-monitor')).isPresent()).toBe(true);
  });

  // 18
  it('should full display the first graph and show graph raw data in table when dropdown for the graph is selected', () => {
    page.dropdownRawDataQCTest('status', 'firstChart');
  });

  // 19
  it('should full display the second graph and show graph raw data in table when dropdown for the graph is selected', () => {
    // value individual
    page.dropdownRawDataQCTest('individual', 'secondChart');
  });

  // 20
  it('should full display the third graph and show graph raw data in table when dropdown for the graph is selected', () => {
    // value week
    page.dropdownRawDataQCTest('week', 'thirdChart');
  });

  // 21
  it('should full display the first graph when double clicking the first graph title', () => {
    page.doubleClickQCTest('app-qcbatches-technical-status', 'firstChart');
  });

  // 22
  it('should full display the second graph when double clicking the second graph title', () => {
    page.navigateToReportsPage('QC');
    browser.actions().doubleClick(element(by.css('app-qcbatches-indiv-category-technical-status .card-title'))).perform();
    page.testQCTables('secondChart');
  });

  // 23
  it('should full display the third graph when double clicking the third graph title', () => {
    page.navigateToReportsPage('QC');
    browser.actions().doubleClick(element(by.css('app-qcbatches-week-category-technical-status .card-title'))).perform();
    page.testQCTables('thirdChart');
  });

  // 24
  it('should be able to navigate to the home page from the qc reports page by clicking the title', () => {
    page.navigateToReportsPage('QC');
    element(by.css('.mainTitle')).click();
    expect(element(by.tagName('app-home')).isPresent()).toBe(true);
  });

  // 25
  it('should be able to navigate to the home page from the assessment reports page by clicking the title', () => {
    page.navigateToReportsPage('Assessment');
    element(by.css('.mainTitle')).click();
    expect(element(by.tagName('app-home')).isPresent()).toBe(true);
  });

  // 29
  it('should navigate to the home page from the qc reports page by clicking the icon', () => {
    page.navigateToReportsPage('QC');
    element(by.css('.mainLogoIMG')).click();
    expect(element(by.tagName('app-home')).isPresent()).toBe(true);
  });

  // 30
  it('should navigate to the home page from the Assessments reports page by clicking the icon', () => {
    page.navigateToReportsPage('Assessment');
    element(by.css('.mainLogoIMG')).click();
    expect(element(by.tagName('app-home')).isPresent()).toBe(true);
  });

});

