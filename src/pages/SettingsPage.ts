import { Locator, Page } from "@playwright/test";

export class SettingsPage {
    readonly page: Page;
    private settingsLink: Locator;
    private radiologySubmodule: Locator;
    private addImagingTypeButton: Locator;
    private imagingItemNameField: Locator;
    private addButton: Locator;
    private searchBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.settingsLink = page.getByRole('link', { name: 'Settings ' })
    this.radiologySubmodule = page.getByRole('link', { name: 'Radiology', exact: true })
    this.addImagingTypeButton = page.getByText('Add Imaging Type')
    this.imagingItemNameField = page.getByRole('textbox', { name: 'Enter Type Name' })
    this.addButton = page.getByRole('button', { name: 'Add' })
    this.searchBar = page.getByPlaceholder(`search`);
    }

    /**
   * @Test13 This method automates the process of creating a new imaging type in the Radiology section of the Settings module.
   *
   * @description This function performs the following actions:
   *              1. Navigates to the Settings module and clicks on the Radiology submodule.
   *              2. Clicks on the "Add Imaging Type" button to open the modal for adding a new imaging type.
   *              3. Fills the "Imaging Item Name" field with a random name (Test-{random4digitnumber}) and clicks "Add".
   *              4. Verifies that the newly added imaging type appears in the list of imaging types.
   */
    async addAndVerifyNewImagingType() {
        // write your logic here
        await this.settingsLink.click();
    await this.radiologySubmodule.click();
    await this.addImagingTypeButton.click();
    const randomSuffix = Math.floor(Math.random() * 1000000);
    const imagingItemName = `7${randomSuffix.toString().padStart(5, '0')}`;

    await this.imagingItemNameField.fill(imagingItemName);
    await this.addButton.click();
    }
}