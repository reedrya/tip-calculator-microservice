const axios = require('axios');

const baseUrl = 'http://localhost:3000';

async function testTipCalculation() {
  try {
    const amount = 200;
    const tipPercentage = 20;

    console.log('Sending request to:', `${baseUrl}/calculate-tip`);
    console.log('Request data:', { amount, tipPercentage });

    const response = await axios.get(`${baseUrl}/calculate-tip`, {
      params: {
        amount,
        tipPercentage,
      },
    });

    console.log('Calculated total:', response.data.total);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testTipCalculation();
