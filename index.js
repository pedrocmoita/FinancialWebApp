const { request, response } = require('express');
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Starting server at ${port}`);});
app.use(express.static('public'));
app.use(express.json());

/*
app.post('/api', (request, response) => {
    console.log("I got a request");
    const data = request.body; 
    response.json({
        status: "success",
        stock: data.stock_symbol,
      });
});
*/

app.get('/income_statement/:stock', async (request, response) => {
  const stock = request.params.stock;
  const api_key = process.env.API_KEY;
  const api_url = "https://financialmodelingprep.com/api/v3/income-statement/"+stock+"?apikey="+api_key;
  const income_statement_response = await fetch(api_url);
  const income_statement_data = await income_statement_response.json();
  response.json(income_statement_data);
});