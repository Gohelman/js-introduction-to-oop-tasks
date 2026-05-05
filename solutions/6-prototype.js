// BEGIN 
function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function() {
  return this.value;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(currency) {
  let newValue = this.value;
  
  if (this.currency === 'usd' && currency === 'eur') {
    newValue = this.value * 0.7;
  } else if (this.currency === 'eur' && currency === 'usd') {
    newValue = this.value * 1.2;
  } 
  
  return new Money(newValue, currency);
};

Money.prototype.add = function(money) {
  let otherValue = money.getValue();
  const otherCurrency = money.getCurrency();

  if (this.currency !== otherCurrency) {
    if (otherCurrency === 'eur' && this.currency === 'usd') {
      otherValue = otherValue * 1.2;
    } else if (otherCurrency === 'usd' && this.currency === 'eur') {
      otherValue = otherValue * 0.7;
    }
  }
  
  const newValue = this.value + otherValue;
  return new Money(newValue, this.currency);
};

Money.prototype.format = function() {
  const currencySymbol = this.currency === 'usd' ? 'USD' : 'EUR';
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: currencySymbol
  });
};

export default Money;
// END
