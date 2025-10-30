import { Page, Locator } from "@playwright/test";

export default class ADTPage {
  readonly page: Page;
  public ADT: {
    ADTLink: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.ADT = {
      ADTLink: page.locator(''),
      searchBar: page.locator(""),
      hospitalSearchBar: page.locator(""),
      patientName: page.locator(""),
      patientCode: page.locator(""),
    };
  }

  /**
   * @Test9.3 Executes a patient search in the ADT (Admission, Discharge, Transfer) section using a reusable helper function.
   *
   * @description This method navigates to the ADT section by highlighting and clicking the ADT link,
   *              waits for the page to load, and initiates a patient search using the PatientSearchHelper class.
   *              The function verifies successful navigation to the ADT page and performs the search operation.
   * 
   */

  async searchPatientInADT() {
    // write your logic here
  }
}
