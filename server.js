var express = require('express');
var app = express();

var transactions = [
    {
        date: '1/1/2015',
        description: 'The Quik E Mart',
        originalDescription: 'Quik E Mart',
        amount: '12.73',
        transactionType: 'debit',
        category: 'groceries',
        accountName: 'checking1'
    },
    {
        date: '2/2/2015',
        description: 'The Quik E Mart',
        originalDescription: 'Quik E Mart',
        amount: '32.98',
        transactionType: 'debit',
        category: 'groceries',
        accountName: 'checking1'
    }];


app.route('/transactions')
  .get(function(req, res) {
    console.log("GET transactions");
    res.json(transactions);
  });

app.param('id', function(req, res, next, id) {
  req.transactionId = id;
  next();
});

app.route('/transactions/:id')
  .get(function(req, res, next) {
    var searchedId = req.transactionId;
    console.log("GET transaction " + searchedId);
    var searchedTransaction = transactions[searchedId];
    if(!searchedTransaction) {
      res.status(404);
      next();
    }
    res.json(transactions[searchedId]);
  });

var server = app.listen(8080, function() {
  console.log("Server listening!");
});