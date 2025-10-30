import { Page, Locator } from "playwright";

export default class LaboratoryPage {
  private page: Page;
  private laboratoryLink: Locator;
  private laboratoryDashboard: Locator;
  private settingsSubModule: Locator;
  private addNewLabTest: Locator;
  private addButton: Locator;
  private closeButton: Locator;
  private starIcon: Locator;
  private errorMessageLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.laboratoryLink = page.getByRole('link', { name: 'Laboratory ' });
    this.laboratoryDashboard = page.locator('');
    this.settingsSubModule = page.getByRole('link', { name: 'Settings', exact: true });
    this.addNewLabTest = page.getByText('Add New Lab Test');
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.closeButton = page.getByRole('button', { name: 'Close' });
    this.starIcon = page.getByTitle('Remember this Date');
    this.errorMessageLocator = page.getByText('error');
  }

  /**
   * @Test5 This method verifies the error message when attempting to add a new lab test without entering required values.
   *
   * @description Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without
   *              providing any input. Captures and returns the displayed error message.
   * @Note Do not close "Add Lab Test" Modal
   */
  async verifyErrorMessage() {
    // write your logic here
    await this.laboratoryLink.click();
    await this.settingsSubModule.click();
    await this.addNewLabTest.click();
    await this.addButton.click();
  }

  /**
   * @Test12 This method verifies the tooltip text of the star icon in the laboratory dashboard.
   *
   * @description This function navigates to the laboratory page and dashboard, hovers over the star icon, and
   *              waits for the tooltip to appear. It verifies the visibility of the star icon and retrieves the tooltip
   *              text. 
   */
  async verifyStarTooltip() {
    // write your logic here
    await this.laboratoryLink.click();
    await this.starIcon.hover();

    // await expect(this.starIcon);

    // Retrieve and log the tooltip text
    const tooltipText = await this.starIcon.innerText();
    console.log('Tooltip Text:', tooltipText);

  }
}
