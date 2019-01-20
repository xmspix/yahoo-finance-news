# Installation
```
$npm i --save yahoo-finance-news
```
# Usage
```
var yahooFinanceNews = require('yahoo-finance-news');

// Get news by symbol
yahooFinanceNews.get('AAPL', function(data){
  //console.log(data);
});

// Get news by multiple symbols
yahooFinanceNews.get(['AAPL','NVDA','MSFT'], function(data){
  //console.log(data);
});
```
