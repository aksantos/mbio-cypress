import DetailsPage from '../pages/DetailsPage';
import MainPage from '../pages/MainPage';

describe('Validate the negative path of enquiring the highest price', () => {
  // Cypress.on('uncaught:exception', () => {
  //   return false;
  // });

  context('steps', () => {
    it('Open Mercedes-benz United Kingdom market', () => {
      MainPage.navigateTo();
    });

    it('Fill location information', () => {
      MainPage.provideLocationInformation();
    });

    it('Filter the cars by color', () => {
      MainPage.filterPreOwnedCarsbyColor();
    });

    it('Navigate to the Vehicle Details of the most expensive car', () => {
      MainPage.mostExpensiveCar();
    });

    it('Save VIN number and Model Year to a file', () => {
      DetailsPage.saveCarDetailsToJsonFile();
    });

    it('Fill the “Contact Details and Account Creation” form with invalid data', () => {
      DetailsPage.fillEnquireNowWithInvalidDataAndProceed();
    });

    it('Validate error message from enquire', () => {
      DetailsPage.validateErrorMessage();
    });
  });
});
