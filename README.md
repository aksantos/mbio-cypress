# Mercedes-Benz.io Challenge

## Task 1 - Manual Testing

The PDF document containing the results of manual testing can be downloaded from [here](link_to_pdf).

## Task 2 - Automated Testing

This project addresses the challenge of automating the test case for validating the negative path of inquiring about the highest price at Mercedes-Benz.

### Technologies Used:

- **Cypress as Framework**
- **JavaScript as Language**
- **Allure as Reporter**

### Running Automated Tests:

There are two methods to execute the automated tests:

1. **Command Line:**

   - Run the command for each browser individually.
   - After each test run, an Allure test result is generated.
   - Car details are saved in a `JSON` file located at `cypress/documents/`.

2. **GitHub Actions Pipeline:**
   - Utilize the GitHub Actions pipeline for automated testing.

### Setup Instructions:

1. **NodeJS Installation:**

   - Download and Install NodeJS from [here](https://nodejs.org/en/download/).

2. **Repository Setup:**

   - Clone or download the repository.

3. **Code Editor Setup:**

   - Open the repository folder in your preferred code editor.

4. **Dependency Installation:**
   - In the terminal, install dependencies by running `npm install`.

### Execution Instructions:

- Run the test with Chrome: `npm run chrome`
- Run the test with Firefox: `npm run firefox`
- Run the test with Edge: `npm run edge`
- Run the test with Electron: `npm run electron`
- Create an Allure Report: `npm run allure:report`
- Open the generated report: `allure open`

## Task 3 - QA-Ops

A GitHub Actions pipeline has been implemented, triggered on every push to the master branch. Additionally, it can be manually executed from the Actions tab. The pipeline runs against both Chrome and Edge browsers.
