import { Page, Locator } from "@playwright/test";

export default class UtilitiesPage {
  readonly page: Page;
  public utilities: {
    utilitiesModule: Locator;
    ChangeBillingCounter: Locator;
    counters: Locator;
    counterItem: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.utilities = {
      utilitiesModule: page.getByRole('link', { name: 'Utilities ' }),
      ChangeBillingCounter: page.locator('//a[text()=" Change Billing Counter "]'),
      counters: page.locator(""),
      counterItem: page.locator(""),
    };
  }

  /**
 * @Test1 This method verifies the load time and selection of a billing counter.
 * 
 * @description Navigates to the Utilities module, opens the Change Billing Counter modal, 
 *              and measures the load time of the modal. If the modal loads within an acceptable
 *              time limit, the method selects the first available billing counter. If no counters
 *              are available, it logs a message. The function handles errors gracefully and logs 
 *              any exceptions encountered.
 */
  async verifyBillingCounterLoadState() {
    // write your logic here
    await this.utilities.utilitiesModule.click();
    await this.utilities.ChangeBillingCounter.click();
    await this.page.waitForTimeout(1000)
    const counter = await this.page.locator("//a[text()='X']");
    if (counter) {
      await counter.click();
    }
await this.utilities.utilitiesModule.click();
  }
}
