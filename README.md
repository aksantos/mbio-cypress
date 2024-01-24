# Mercedes-Benz.io Challenge

## Task 1 - Manual Testing

## Task 2 - Automated Testing

This project was created to solve a challenge requested to automate the test case:

- Validate the negative path of enquiring the highest price at Mercedes-Benz

#### Technologies used:

#### ➡️ Cypress as framework

#### ➡️ JavaScript as language

#### ➡️ Allure as reporter

There are two ways to run the automated tests:

- The first is to run the command designed for each browser, one at a time.
  - Each time the test runs a test result will be created with allure.
  - The details of the car are saved in a `JSON` file on cypress\documents\
- The second way to run is to set up the project with Github Actions creating a pipeline.

#### To setup:

- Download and Install NodeJS (https://nodejs.org/en/download/)
- Clone or download the repository
- Open the repository folder on your code editor
- In the terminal, install dependencies by running `npm install`

#### To run:

- Run the test with chrome: `npm run chrome`
- Run the test with firefox: `npm run firefox`
- Run the test with edge: `npm run edge`
- Run the test with electron: `npm run electron`
- Create an Allure Report: `npm run allure:report`
- Open report: `allure open`

## Task 3 - QA-Ops

- A pipeline was created using GitHub Actions, where it runs whenever there's a push to the master branch.
- It can also be run manually from the Actions tab.
- The pipeline runs against Chrome and Edge browser
