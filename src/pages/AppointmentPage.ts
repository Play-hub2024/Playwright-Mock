import { Page, Locator } from "@playwright/test";

export default class AppointmentPage {
  readonly page: Page;
  public appointment: {
    appointmentLink: Locator;
    counterItem: Locator;
    titleName: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
    newVisitTab: Locator;
    newVisitHeading: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.appointment = {
      appointmentLink: page.getByRole('link', { name: 'Appointment ' }),
      counterItem: page.getByRole('link', { name: 'Appointment Booking List' }),
      titleName: page.locator(""),
      searchBar: page.locator('#quickFilterInput'),
      hospitalSearchBar: page.locator("(//input[@type='text'])[1]"),
      patientName: page.locator('.patient-name'),
      patientCode: page.locator(""),
      newVisitTab: page.getByRole('link', { name: 'New Visit' }),
      newVisitHeading: page.locator(``),
    };
  }

  /**
   * @Test2 Validates the presence of the specified patient name in the 'ShortName' column of the search results grid.
   *
   * @description This method checks whether the provided patient name appears in the search results under the 'ShortName'
   *              column. It waits for the column to be visible, retrieves the list of displayed names, and verifies that the
   *              expected patient name is included. If the name is found, the method confirms success; otherwise, it logs
   *              an error for troubleshooting purposes.
   *
   * @param {string} patientName - The expected patient name to validate in the search results.
   * @return {Promise<void>} - No return value, but logs any error encountered during the verification process.
   */
  async verifypatientName(patientName: Record<string, string>) {
    // write your logic here
    await this.appointment.appointmentLink.click();
    //  await this.appointment.newVisitTab.click();
    await this.page.locator('(//span[text()="Click to Activate"])[1]').click();
    await this.appointment.searchBar.fill('FirstNov5 LastNov5')

    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(5000)
    // await this.appointment.hospitalSearchBar.click();

  }

  /**
   * @Test11 This method opens the New Visit page in the appointment module using the Alt + N keyboard shortcut.
   *
   * @description This function clicks the appointment link to navigate to the appointment module.
   *              It then clicks on the "New Visit" tab and simulates pressing the Alt + N keyboard shortcut to open
   *              the New Visit page. After triggering the shortcut, it waits for the page to load and verifies that
   *              the New Visit page is displayed by checking the visibility of the New Visit heading and the URL.
   */
  async openNewVisitPageThroughKeyboardButton() {
    // write your logic here

    const element = this.page.locator("//a[text()='X']");
    if (await element.isVisible()) {
      await element.click();
    }
    await this.appointment.appointmentLink.click();
    await this.page.waitForTimeout(1000)
    await this.appointment.newVisitTab.click();
    await this.page.waitForTimeout(1000)
    await this.page.keyboard.press('Alt+N');


  }

  /**
   * @Test9.1 This method performs a patient search in the appointment section using reusable function.
   *
   * @description This function highlights the appointment link, clicks on it to navigate to the appointment page,
   *              waits for the page to load, and triggers the patient search action using a helper function.
   *              It ensures that the patient search is executed successfully and returns true if the search operation is completed.
   */
  async searchPatientInAppointment() {
    // write your logic here
  }
}
