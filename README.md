<h1>
  <p align="center">  Mercedes-Benz.io Challenge 
</h1>
<h2>Task 1 - Manual Testing</h2>

<h2>Task 2 - Automated Testing</h2>

<h4>How was the automation done?<h4/>
- Cypress as framework
- JavaScript as language
- Allure as reporter

There are two ways to run the automated tests:
First is to run the command, in CLI, designed for the browser, one at a time.
Each time the test runs a test result will be created with allure.
To open allure report -> `allure open`.

The details of the car are saved in a JSON file on cypress\documents\

The second way to run, is to setup the project with Github Actions creating a pipeline.

<h4>How to Setup?</h4>

- Download and Install Node (https://nodejs.org/en/download/)
- Clone or download this repository
- Open the folder repository on your code editor
- using the terminal, install dependencies by running the command: `npm install`

 <h4>How to run?</h4>

- Run test with chrome: `npm run cy:chrome`

- Run test with firefox: `npm run cy:firefox`

- Run test with edge: `npm run cy:edge`

- Run test with electron: `npm run cy:electron`

- Open report: `allure open`

<h2>Task 3 - QA-Ops</h2>
