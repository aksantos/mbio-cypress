import Helper from '../utils/Helper';
import data from '../fixtures/data.json';
import { faker } from '@faker-js/faker';

const vehicleDetails = '.dcp-vehicle-details-list';
const btnEnquire = 'dcp-buy-box__contact-seller';
const firstName = 'rfq-contact__first-name';
const lastName = 'rfq-contact__last-name';
const email = 'rfq-contact__email';
const phone = 'rfq-contact__phone';
const postalCode = 'rfq-contact__postal-code';
const comments = 'rfq-contact__comments';
const btnProceed = 'dcp-rfq-contact-button-container__button-next';
const errorMessage = '.dcp-error-message > p';

class DetailsPage {
  saveCarDetailsToJsonFile() {
    cy.get(vehicleDetails).should('not.be.empty');
    cy.get(vehicleDetails).then((el) => {
      cy.writeFile(
        `cypress/documents/${Helper.saveDate()}-CarDetails.json`,
        Helper.getInformations(el.text())
      );
    });
  }

  fillEnquireNowWithInvalidDataAndProceed() {
    cy.getDataTestId(btnEnquire).click();
    Helper.verifyLoading();
    cy.getDataTestId(firstName).find('input').type(faker.person.firstName());
    cy.getDataTestId(lastName).find('input').type(faker.person.lastName());
    cy.getDataTestId(email).find('input').type(faker.internet.email());
    cy.getDataTestId(phone).find('input').type(faker.string.numeric(20));
    cy.getDataTestId(postalCode).find('input').type(faker.location.zipCode('####'));
    cy.getDataTestId(comments).find('textarea').type(faker.lorem.words(4));
    cy.get('wb-checkbox-control').find('input').first().click({ force: true });
    cy.getDataTestId(btnProceed).click();
  }

  validateErrorMessage() {
    cy.get(errorMessage).should('have.text', data.errorMessage);
  }
}

export default new DetailsPage();
