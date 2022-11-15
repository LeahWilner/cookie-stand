'use strict';
console.log('js file loaded.');

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];




function Store(location, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale, hourlyArray){
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyArray = hourlyArray;

}

let locSeattle = new Store('Seattle', 23, 65, 6.3, []);
// let locTokyo = new Store('Tokyo', 3, 24, 1.2, []);
// let locDubai = new Store('Dubai', 11, 38, 3.7, []);
// let locParis = new Store('Paris', 20, 38, 2.3, []);
// let locLima = new Store('Lima', 2, 16, 4.6, []);

// console.log(locSeattle, locTokyo, locDubai, locParis, locLima);

console.log(locSeattle);


Store.prototype.numCust = function(){
  return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
},

Store.prototype.cookiePurchased = function(){
  for(let i = 0; i < hours.length; i++){
    this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
  }
};


locSeattle.cookiePurchased();
// locTokyo.cookiePurchased();
// locDubai.cookiePurchased();
// locParis.cookiePurchased();
// locLima.cookiePurchased();



