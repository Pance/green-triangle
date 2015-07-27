var Transaction = Backbone.Model.extend({
    urlRoot: '/transactions',
    initialize: function() {
          console.log("new Transaction!");
            }
});
var Transactions = Backbone.Collection.extend({
    url: '/transactions'
});

var someTransactions = new Transactions();
someTransactions.fetch({
  success: function(transactions) {
    console.log("fetched " + transactions.length + " transactions");
  }
});