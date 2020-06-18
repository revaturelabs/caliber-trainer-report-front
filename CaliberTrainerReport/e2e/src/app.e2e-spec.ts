import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Caliber Graphe Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display test chart message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('test-chart works!');
  // });
  
  //
  it('should display only good chart message', () => {
    
  });

  // test case is set to good change it to look at bad results
  it('should change the display to only bad', () =>{

  });

  // test case to test if the number of charts are showing up properly
  // in the QC overview, when the screen is Big.
  it('should display all graphs', () =>{
    page.navigateTo();
    expect(page.getAllGraphs().count()).toBe(2);
  });

  // test case to test if the number of charts are showing up properly
  // in the QC overview, when the screen is not Big.
  it('should display all graphs', () =>{
    page.navigateTo();
    expect(page.getAllGraphsMobileView().count()).toBe(2);
  });



  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
