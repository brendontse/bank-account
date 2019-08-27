//business logic
function bank(account) {
  this.accounts = []
}

function Account(name, balance) {
  this.name = name,
  this.balance = balance
  this.currentId = 0
}

Account.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

Account.prototype.assignId = function() {
  this.currentId =+ 1;
  return this.currentId;
}

Account.prototype.depositMoney = function(depositAmount) {
  this.balance += depositAmount
  return this.balance
}

//user interface
$(document).ready(function(){
  $("form#accountForm").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedDeposit = parseInt($("input#initialDeposit").val());
    var newAccount = new Account(inputtedName, inputtedDeposit);
    accounts.push(newAccount);
    console.log(newAccount);
    console.log(bank);
  });

  $("form#depositForm").submit(function(Event){
    event.preventDefault();
    var depositAmount = parseInt($('input#deposit').val());
    var newBalance = newAccount.depositMoney(depositAmount);
    console.log(newBalance);
  });

  $('form#withdrawForm').submit(function(event) {
    event.preventDefault();
    var withdrawAmount = parseInt($('input#withdraw').val());
  });

});
