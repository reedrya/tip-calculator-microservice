# tip-calculator-microservice

**Communication Contract**

  A. In order to REQUEST data from the microservice I implemented, download and run the code locally, and open the terminal in the directory where the code is saved. Then, run "node tip-calculator.js" in the terminal to start the microservice. The endpoint is /calculate-
  tip. It requires amount and tipPercentage to be sent as query parameters. Here is an example call: http://localhost:3000/calculate-tip?amount=100&tipPercentage=15. This tells the browser to access the endpoint /calculate-tip and sends the parameters amount with the value
  100 and tipPercentage with the value 15. When implemented properly, it should display 115 as the total in the web browser.

  B. My microservice exposes a GET endpoint at /calculate-tip. It responds with a JSON object containing the key "total". For my test program, I utilized the axios library, but you could also use Node.js' built-in https module if you wish.

  C. ![image](https://github.com/reedrya/stardew-companion-cli/assets/157441470/a8f4e4f0-1d56-493a-a4c6-e2befbaf9c6f)
