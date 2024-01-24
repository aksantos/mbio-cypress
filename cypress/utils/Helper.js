import data from '../fixtures/data.json';

const btnAgreeAll = 'handle-accept-all-button';
const selectState = 'wb-select-control.dcp-header-location-modal-dropdown > wb-select > select';
const inputPostalCode = 'wb-input-control > wb-input > input';
const inputPostalCodeError = '.wb-modal-edit-content__section > wb-control-error';
const radioPrivate = '[value=P]';
const btnContinue = 'state-selected-modal__close';
const cookieBannerTitle = 'wb7-heading';
const loader = 'div.dcp-loader';

class Helper {
  acceptAllCookies() {
    cy.get(cookieBannerTitle, { timeout: 10000 }).should('be.visible');
    //   'force' is used because the parent has a CSS property 'display: none'
    cy.getDataTest(btnAgreeAll).click({ multiple: true, force: true });
  }

  fillLocationInformation() {
    cy.get(selectState).select(data.state);
    cy.get(radioPrivate).click({ force: true });
    /* the frontend validation in the postal code input should be fixed because in some test runs
    the value of a correct postal code is being flagged as invalid */
    cy.get(inputPostalCode)
      .type(data.postalCode)
      .then((el) => {
        if (cy.get(inputPostalCodeError).contains(data.postalCodeErrorMessage)) {
          cy.wait(1000);
          cy.get(inputPostalCode).type('{upArrow}{upArrow}');
        }
      });

    cy.getDataTestId(btnContinue).click();
  }

  verifyLoading() {
    cy.get(loader)
      .invoke('show')
      .then((el) => {
        if (el.hasClass('dcp-loader--hide')) {
          return;
        } else {
          cy.wait(1000);
          this.verifyLoading();
        }
      });
  }

  saveDate() {
    let date = new Date(),
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  getInformations(str) {
    const modelYearRegex = /Model Year \d{4}/g;
    const vinNumberRegex = /VIN [A-HJ-NPR-Z0-9]{17}\b/g;
    const result = new Map();

    const modelYearMatch = modelYearRegex
      .exec(str)
      .toString()
      .replace(/Model Year /, '');
    if (modelYearMatch) result.set('Model Year', Number(modelYearMatch));

    const vinMatch = vinNumberRegex.exec(str).toString().replace(/VIN /, '');
    if (vinMatch) result.set('VIN', vinMatch);

    return Object.fromEntries(result);
  }
}

export default new Helper();
