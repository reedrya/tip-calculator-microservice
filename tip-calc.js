const express = require('express');

const app = express();
const port = 3000;

// Function to calculate tip
function calculateTip(amount, tipPercentage) {
  const tipAmount = amount * (tipPercentage / 100);
  return amount + tipAmount;
}

// Endpoint to receive amount and tip percentage
app.get('/calculate-tip', (req, res) => {
  const { amount, tipPercentage } = req.query;

  // Check if required parameters are present
  if (!amount || !tipPercentage) {
    return res.status(400).send('Missing required parameters: amount and/or tipPercentage');
  }

  // Validate input types are numbers
  // https://www.w3schools.com/jsref/jsref_isnan.asp
  if (isNaN(amount) || isNaN(tipPercentage)) {
    return res.status(400).send('Invalid input types: amount and tipPercentage must be numbers');
  }

  const tipAmount = calculateTip(Number(amount), Number(tipPercentage));
  res.json({ total: tipAmount });
  console.log('Received request data:', { amount, tipPercentage });
});

app.listen(port, () => {
  console.log(`Tip calculator microservice listening on port ${port}`);
});
