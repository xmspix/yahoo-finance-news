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
  /*
   [{
     items: [
     {
       title: "China’s Economy Slows to the Weakest Pace Since 2009",
       description: "Gross domestic product rose 6.4 percent in the fourth quarter from a year earlier compared with 6.5 percent in the previous three-month period.  The government’s response with targeted stimulus measures is being tested by the standoff with U.S. President Donald Trump over trade at a time when the global expansion is already looking shakier.  “Growth will improve from the second quarter onwards,” said Morgan Stanley’s Chief China Economist Robin Xing in an interview with Bloomberg Television in Hong Kong.",
       link: "https://finance.yahoo.com/news/china-economy-slows-weakest-pace-020040147.html?.tsrc=rss",
       date: "Mon, 21 Jan 2019 03:49:48 +0000"
     },
     {
       title:"Verizon Is Finally on Board With Bundling",
       description:"Verizon is offering Apple Music to its top-tier customers.",
       link:"https://finance.yahoo.com/news/verizon-finally-board-bundling-002400383.html?.tsrc=rss",
       date:"Mon, 21 Jan 2019 00:24:00 +0000"
     }
     ...
    ],
    symbol: "AAPL"
  }]
*/

// Get news by multiple symbols
yahooFinanceNews.get('AAPL,NVDA,MSFT', function(data){
  //console.log(data);
});
```
