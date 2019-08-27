// bank logic
var bank = new Bank();
function Bank(account) {
  this.accounts = [],
  this.currentId = 0;
}

Bank.prototype.addToBank = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Bank.prototype.findAccount = function(id) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].id === id) {
        return this.accounts[i];
      }
    }
  };
  return false;
};

// account logic
function Account(name, balance) {
  this.name = name,
  this.balance = balance
}

Account.prototype.findBalance = function() {
  return this.balance;
}

Account.prototype.depositMoney = function(depositAmount) {
  this.balance += depositAmount
  return this.balance
}

Account.prototype.withdrawMoney = function(withdrawAmount) {
  this.balance -= withdrawAmount
  return this.balance
}

//user interface
var newAccount;

$(document).ready(function(){
  $("form#accountForm").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedDeposit = parseInt($("input#initialDeposit").val());
    newAccount = new Account(inputtedName, inputtedDeposit);
    bank.addToBank(newAccount);
    console.log(newAccount);

  });

  $("form#depositForm").submit(function(Event){
    event.preventDefault();
    var depositAmount = parseInt($('input#deposit').val());
    var newBalance = newAccount.depositMoney(depositAmount);
    $('#output').html(newBalance);

  });

  $('form#withdrawForm').submit(function(event) {
    event.preventDefault();
    var withdrawAmount = parseInt($('input#withdraw').val());
    var newBalance = newAccount.withdrawMoney(withdrawAmount);
    $('#output').html(newBalance);
  });

});
