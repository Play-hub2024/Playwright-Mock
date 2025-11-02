import { Locator, Page } from "playwright";

export default class ProcurementPage {
  readonly page: Page;
  private procurement: Locator;
  private purchaseRequest: Locator;
  private purchaseOrder: Locator;
  private goodsArrivalNotification: Locator;
  private quotations: Locator;
  private settings: Locator;
  private reports: Locator;
  private favoriteButton: Locator;
  private okButton: Locator;
  private printButton: Locator;
  private firstButton: Locator;
  private previousButton: Locator;
  private nextButton: Locator;
  private lastButton: Locator;
  private fromDate: Locator;
  private toDate: Locator;
  private invalidMsg: Locator;
  private requestedDateColumn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.procurement = page.getByRole('link', { name: 'Procurement ' });
    this.purchaseRequest = page.locator(`//a[text()=' Purchase Request ']`);
    this.purchaseOrder = page.locator(`//a[text()=' Purchase Order ']`);
    this.goodsArrivalNotification = page.locator(`//a[text()=' Goods Arrival Notification ']`);
    this.quotations = page.locator(`//a[text()=' Quotation ']`);
    this.settings = page.locator(`//a[text()=' Settings ']`);
    this.reports = page.locator(`//a[text()=' Reports ']`);
    this.favoriteButton = page.locator(``);
    this.okButton = page.locator('//button[text()=" OK "]');
    this.printButton = page.locator(`//button[text()='Print']`);
    this.firstButton = page.locator(`//button[text()='First']`);
    this.previousButton = page.locator(`//button[text()='Previous']`);
    this.nextButton = page.locator(`//button[text()='Next']`);
    this.lastButton = page.locator(`//button[text()='Last']`);
    this.fromDate = page.locator('#date').nth(0);
    this.toDate = page.locator(`#date`).nth(1);
    this.invalidMsg = page.locator(``);
    this.requestedDateColumn = page.locator(``);
  }

  /**
   * @Test4 This method verifies the visibility of essential elements in the Purchase Request List on the Procurement page.
   *
   * @description Navigates to the Procurement module and verifies the presence of multiple elements, including buttons
   *              and options related to the Purchase Request List. It highlights each element and checks if it is visible
   *              on the page. If any element is missing, the method returns false, and a warning is logged.
   */
  async verifyPurchaseRequestListElements() {
    // write your logic here
    await this.procurement.click();
    await this.page.waitForTimeout(5000);
    await this.procurement.click();
    await this.page.waitForTimeout(5000);
    // Wait for UI
    // await this.page.waitForLoadState('domcontentloaded');

    // const elementsToCheck: Locator[] = [
    //   this.fromDate,
    //   this.toDate,
    //   this.okButton,
    //   this.requestedDateColumn,
    // ];
    // for (const el of elementsToCheck) {
    //   if (!(await el.isVisible())) {
    //     console.warn(`Element not visible: ${el}`);
    //     return false;
    //   }
    // }
    // return true;
  }

  /**
 * @Test8 This method verifies the error message displayed after entering an invalid date in the filter.
 *
 * @description This method navigates to the Procurement module, selects the Purchase Request tab, 
 *              and applies an invalid date filter. Upon clicking the OK button, it captures and validates 
 *              the error message displayed to confirm that the application correctly identifies the invalid input.
 */
  async verifyNoticeMessageAfterEnteringIncorrectFilters() {
    // write your logic here
    await this.procurement.click();
    await this.page.waitForLoadState('domcontentloaded');

    // Enter invalid dates (e.g. from > to)
    await this.fromDate.fill('0001-03-30');
    //await this.toDate.fill('2024-12-31');
    //await this.okButton.click();

    // Wait for error / notice message to appear
    //const errorLocator = this.page.locator('//p[@class="msg-status"]');
    //await errorLocator.waitFor({ state: 'visible' });
    //return await errorLocator.textContent() ?? '';


  }

  /**
   * @Test14 This method verifies that all dates in the requested date column are within the specified range.
   *
   * @description This method navigates to the Purchase Request List, applies a date filter,
   *              and checks if all dates in the requested date column fall within the specified range.
   *              The method parses the date format and compares each date against the range.
   *
   */
  async verifyRequestedDateColumnDateWithinRange(data: Record<string, string>) {
    // write your logic here
    const { FromDate, ToDate } = data;

    await this.procurement.click();
     await this.page.waitForTimeout(3000);
    await this.procurement.click();
     await this.page.waitForTimeout(3000);
    await this.fromDate.fill(FromDate);
    await this.toDate.fill(ToDate);
    await this.page.waitForTimeout(3000);
    await this.okButton.click();
    await this.page.waitForTimeout(3000)
  }
}
