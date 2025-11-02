import { Page, Locator } from "@playwright/test";

export default class DispensaryPage {
  readonly page: Page;
  private maxRetries = 3;
  private timeoutDuration = 5000;
  public dispensary: {
    dispensaryLink: Locator;
    activateCounter: Locator;
    counterSelection: Locator;
    counterName: Locator;
    activatedCounterInfo: Locator;
    deactivateCounterButton: Locator;
    titleName: Locator;
    name: Locator;
    prescription: Locator;
    reports: Locator;
    fromDate: Locator;
    showReportButton: Locator;
    userCollectionReport: Locator;
    counterDropdown: Locator;
    counterNameFromTable: Locator
  };

  constructor(page: Page) {
    this.page = page;
    this.dispensary = {
      dispensaryLink: page.getByRole('link', { name: 'Dispensary ' }),
      activateCounter: page.locator('(//span[text()="click to Activate"])[1]'),
      counterSelection: page.locator('//a[text()=" Counter "]'),
      counterName: page.locator(''),
      activatedCounterInfo: page.locator(``),
      deactivateCounterButton: page.locator(``),
      titleName: page.locator(''),
      name: page.locator(''),
      prescription: page.locator(""),
      reports: page.getByRole('link', { name: 'Reports', exact: true }),
      fromDate: page.locator('#date'),
      showReportButton: page.getByRole('button', { name: 'Show Report' }),
      userCollectionReport: page.getByRole('link', { name: ' User Collection Report' }),
      counterDropdown: page.locator('#ddlCounter'),
      counterNameFromTable: page.locator(``),
    };
  }

  /**
   * @Test3 Verifies the activation message for a randomly selected counter in the Dispensary module.
   *
   * @description This method navigates to the Dispensary module and checks if multiple counters are available.
   *              If counters exist, it selects one at random, activates it, and verifies that the activation message
   *              correctly displays the name of the selected counter. Logs are included to provide insights into
   *              counter selection and activation status. The method highlights elements during interactions
   *              for better visibility in debugging.
   */
  async verifyActiveCounterMessageInDispensary() {
    // write your logic here
    await this.dispensary.dispensaryLink.click();
    await this.page.waitForTimeout(3000);
    await this.dispensary.dispensaryLink.click();
    await this.page.waitForTimeout(3000);
    await this.page.locator("//i[text()='Main Dispensary']").click();
    await this.dispensary.counterSelection.click();
    await this.dispensary.activateCounter.click();
    await this.dispensary.counterSelection.click();
    //  await this.page.waitForTimeout(30000);
    


  }

  /**
   * @Test10 This method verifies if the counter is activated in the dispensary section.
   *
   * @description Navigates to the dispensary module, selects the 'Morning Counter' from the dropdown, 
   * and generates the user collection report for the specified date.
   * 
   */
  async generateMorningCounterReport(data: Record<string, string>) {
    // write your logic here
    const { FromDate } = data;

    await this.dispensary.dispensaryLink.click();

    await this.page.locator('a').filter({ hasText: 'Main Dispensarydispensary' }).click();
    await this.dispensary.reports.click();
    await this.dispensary.userCollectionReport.click();
    await this.dispensary.fromDate.first().fill(FromDate);
    await this.dispensary.counterDropdown.selectOption('1');
    await this.dispensary.showReportButton.click();
    await this.page.waitForTimeout(2000);
     const tableLength = (await this.page.$$(`div[col-id="CounterName"]`)).length;

     console.log('Table lenght', tableLength);
  };
}
