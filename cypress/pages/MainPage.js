import Helper from '../utils/Helper';

const filter = 'div.wrapper';
const btnFilter = 'span.filter-toggle';
const preOwned = 'wb-tab-bar> :nth-child(1)';
const colorFilter = '.fab-filter > :nth-child(7)';
const colorShowList = `${colorFilter} > .category-filter-row > .category-filter-row__container`;
const colorBrilliantBlueMetallic = 'ul > li:nth-child(4)';
const sortSelect = '#srp-result > wb-select-control > wb-select > select';
const carResults = '.dcp-cars-srp-results';
const carTile = `${carResults}__tile `;

class MainPage {
  navigateTo() {
    cy.clearLocalStorage();
    cy.visit(Cypress.config().baseUrl);
    Helper.acceptAllCookies();
  }

  provideLocationInformation() {
    Helper.fillLocationInformation();
  }

  filterPreOwnedCarsbyColor() {
    this.openFilterIfClosed();
    cy.get(preOwned).click();
    this.openFilterIfClosed();
    cy.get(colorFilter).click();
    cy.get(colorShowList).click().find(colorBrilliantBlueMetallic).click();
  }

  openFilterIfClosed() {
    Helper.verifyLoading();
    cy.get(filter).then((el) => {
      if (!el.hasClass('show')) cy.get(btnFilter).click();
    });
  }

  mostExpensiveCar() {
    this.sortByPriceDescending();
    this.goToFirstResultDetailsPage();
  }

  sortByPriceDescending() {
    cy.get(sortSelect).select(5);
  }

  goToFirstResultDetailsPage() {
    cy.get(carTile).first().click();
  }
}

export default new MainPage();
