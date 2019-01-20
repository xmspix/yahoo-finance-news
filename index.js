'use strict'
const fs = require('fs');
const request = require('request');
const requestPromise = require('request-promise');
var xmlJs = require("xml-js");

module.exports.yahoo_finance_news = async function(symbols, callback) {
  if (Array.isArray(symbols) == false) {
    const symbol = [];
    symbol.push(symbols)
    next(symbol)
  } else {
    next(symbols)
  }

  function next(symbols) {
    const promises = symbols.map(symbol => requestPromise({
      url: `https://feeds.finance.yahoo.com/rss/2.0/headline?s=${symbol}&region=US&lang=en-US`,
      json: true,
      transform: function(body) {
        var options = {
          compact: true,
          ignoreComment: true
        };
        var result = xmlJs.xml2json(body, options);
        var json = JSON.parse(result);
        var title = json.rss.channel.item.map(item => item.title._text)
        var description = json.rss.channel.item.map(item => item.description._text)
        var link = json.rss.channel.item.map(item => item.link._text)
        var date = json.rss.channel.item.map(item => item.pubDate._text)
        var tmp = []
        for (var i = 0; i < title.length; i++) {
          const item = {
            title: title[i],
            description: description[i],
            link: link[i],
            date: date[i]
          }
          tmp.push(item)
        }
        return [{
          'items': tmp,
          'symbol': symbol
        }];
      }
    }));
    Promise.all(promises).then((data) => {
      const results = [].concat(...data.map(Object.values));
      Promise.all(results).then((completed) => {
        // fs.writeFileSync('test.json', JSON.stringify(completed));
        if (callback) {
          callback(JSON.stringify(completed))
        }
      });
    })
  }
}
