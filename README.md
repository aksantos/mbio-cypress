<h1>
  <p align="center">  Mercedes-Benz.io Challenge 
</h1>
<h2>Task 1 - Manual Testing</h2>

#Task 2 - Automated Testing

<h4>How was the automation done?<br/>
➡️ Cypress as framework<br/>
➡️ JavaScript as language<br/>
➡️ Allure as reporter<br/></h4>
There are two ways to run the automated tests:<br/>
The first is to run the command designed for each browser, one at a time.<br/>
Each time the test runs a test result will be created with allure.<br/>
To open the allure report -> **allure open**<br/>

The details of the car are saved in a JSON file on cypress\documents\

The second way to run is to set up the project with Github Actions creating a pipeline.

<h4>How to Setup?</h4>

- Download and Install Node (https://nodejs.org/en/download/)
- Clone or download this repository
- Open the folder repository on your code editor
- using the terminal, install dependencies by running the command: `npm install`

 <h4>How to run?</h4>

- Run the test with chrome: `npm run chrome`

- Run the test with firefox: `npm run firefox`

- Run the test with edge: `npm run edge`

- Run the test with electron: `npm run electron`

- Open report: `allure open`

<h2>Task 3 - QA-Ops</h2>
