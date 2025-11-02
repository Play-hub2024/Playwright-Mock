import { Locator, Page } from "playwright";

export default class RadiologyPage {
  readonly page: Page;
  private radiologyModule: Locator;
  private listRequestSubModule: Locator;
  private fromDate: Locator;
  private okButton: Locator;
  private addReportButton: Locator;
  private closeModalButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.radiologyModule = page.locator('//a[@href="#/Radiology"]');
    this.listRequestSubModule = page.locator('//a[@href="#/Radiology/ImagingRequisitionList"]').nth(0);
    this.fromDate = page.locator(`//input[@id="date"]`).nth(0);
    this.okButton = page.locator(`//button[@class="btn green btn-success"]`);
    this.addReportButton = page.locator('//a[@danphe-grid-action="show-add-report"]').nth(0);
    this.closeModalButton = page.locator(`//a[@title="Cancel"]`);
  }
  /**
   * @Test6.1 This method performs a radiology request and handles alerts that may arise during the process.
   *
   * @description This method navigates through the Radiology module, applies a date filter,
   *              attempts to add a report, and handles any resulting alert dialogs.
   *              It loops through the process twice to ensure the requests are handled.
   */
  async performRadiologyRequestAndHandleAlert() {
await this.radiologyModule.click();
await this.page.waitForTimeout(3000);
await this.radiologyModule.click(); 
await this.page.waitForTimeout(3000);
await this.fromDate.fill("2020-01-01");
await this.addReportButton.click();
await this.closeModalButton.click();
  this.page.on('dialog', async dialog => {
    // console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); // or dialog.dismiss()
  });

    // write your logic here
  }

  /**
   * @Test6.2 This method handles alert dialogs that may appear during radiology requests.
   *
   * @description Listens for dialog events on the page. If the alert matches the expected
   *              message, it accepts the dialog; otherwise, it dismisses it.
   *
   * @return boolean - Returns true if the alert handling was successful.
   */
  async handleAlert(): Promise<boolean> {
    // write your logic here
    return false;
  }
}
