const express = require('express');
require('dotenv').config();
console.log(process.env); 
const app = express();
app.listen(3000, () => console.log('listening at 3000...'));
app.use(express.static('public'));
//financialmodelingprep --> 250calls per day

const api_keys = process.env.API_KEY;
const fmp = require('financialmodelingprep')(api_keys);
let stock = "DIS";

//EXEMPLOS

fmp.stock(stock).quote().then(response => console.log(response));                                 V
//fmp.market.sector_performance().then(response => console.log(response));                          V
//fmp.stock(stock).profile().then(response => console.log(response));                               V
//fmp.stock(stock).financial.ratios().then(response => console.log(response));                      V
//fmp.market.trading_hours().then(response => console.log(response));                               V
//fmp.etf.quote(stock = 'qqq').then(response => console.log(response));                             V

//Os unicos que se podem usar nesta api são:

//STOCKS

//profile()                                                                 /profile
//quote()                                                                   /quote
//rating()                                                                  /company/rating
//current_price()                                                           /stock/real-time-price
//history({start_date, end_date, limit, type} = {})                         /historical-price-full/{ticker}?{opts}
//dividend_history({start_date, end_date, limit, type} = {})                /historical-price-full/stock_dividend/{ticker}?{opts}
//split_history({start_date, end_date, limit, type} = {})                   /historical-price-full/stock_split/{ticker}?{opts}

//MARKET

//most_active()                                                             /stock/actives
//most_gainer()                                                             /stock/gainers
//most_loser()                                                              /stock/losers
//sector_performance()                                                      /stock/sectors-performance
//trading_hours()    

//ETF

//list()                                                                     /symbol/available-etfs
//quote(stock = 'all')*                                                      /quote
//history(stock, { start_date, end_date, data_type, limit } = {})*           /historical-price-full/etf/{ticker}?{opts}
//dividend_history(stock, { start_date, end_date, data_type, limit } = {})*  /historical-price-full/stock_dividend/{ticker}?{opts}
//split_history(stock, { start_date, end_date, data_type, limit } = {})*     /historical-price-full/stock_split/{ticker}?{opts}

//########################################################################################################

//finnhub --> 60calls per min

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cd5h00aad3i5nc8nva1gcd5h00aad3i5nc8nva20"
const finnhubClient = new finnhub.DefaultApi()

//Os unicos que é preciso usar nesta api são:

//finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error, data, response) => {  console.log(data)});                  V

//finnhubClient.marketNews("general", {}, (error, data, response) => { console.log(data)});                             V

//finnhubClient.companyBasicFinancials("AAPL", "all", (error, data, response) => {console.log(data)});                  V

//finnhubClient.insiderSentiment('AAPL', '2015-01-01', '2022-03-01', (error, data, response) => {console.log(data);});  V

//finnhubClient.financialsReported({"symbol": "AAPL"}, (error, data, response) => {console.log(data);});                V

//finnhubClient.filings({"symbol": "AAPL"}, (error, data, response) => {console.log(data)});                            V

//finnhubClient.recommendationTrends('AAPL', (error, data, response) => {console.log(data)});                           V

//finnhubClient.quote("AAPL", (error, data, response) => {console.log(data)});                                          V
                    
//finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {console.log(data)});      V

//########################################################################################################

//polygon.io

