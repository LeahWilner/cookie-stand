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


Store.prototype.numCust = function(){
  return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
};

Store.prototype.cookiePurchased = function(){
  for(let i = 0; i < hours.length; i++){
    this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
  }
};




function createSalesHeader(){
  let tHead = document.getElementById('hoursOfOperation');
  let tHeadRow = document.createElement('tr');
  tHead.appendChild(tHeadRow);
  let emptyCell = document.createElement('th');
  tHeadRow.appendChild(emptyCell);
  for (let i = 0; i < hours.length; i++){
    let thCell = document.createElement('th');
    thCell.textContent = hours[i];
    tHeadRow.appendChild(thCell);
  }
  let lastCell = document.createElement('th');
  lastCell.textContent = 'Daily Location Total';
  tHeadRow.appendChild(lastCell);
}

createSalesHeader();
// let table = document.getElementById('cookieTable');





Store.prototype.createSalesBody = function(){
  let tBody = document.getElementById('cookieHourlyData');
  let tBodyRow = document.createElement('tr');
  console.log('here!',tBody, tBodyRow);

  //get store location then,
  //create a td
  let storeLocation = document.createElement('td');
  //update the textContent to (this.location)
  storeLocation.textContent = this.location;
  //append the location to the row
  tBodyRow.appendChild(storeLocation);
   
  let cookieStoreTotal = 0;

  // create a for loop to iterate through our this.hourlyArray
  for(let i = 0; i < hours.length; i++){
    console.log('cookie numbers: ',this.hourlyArray[i]);
    let hourlyCookies = document.createElement('td');
    hourlyCookies.textContent = this.hourlyArray[i];
    cookieStoreTotal = cookieStoreTotal + this.hourlyArray[i];
    tBodyRow.appendChild(hourlyCookies);
  }

  // add a final cell for the store daily totals



  let totalCell = document.createElement('th');
  totalCell.textContent = cookieStoreTotal;
  tBodyRow.appendChild(totalCell);


  tBody.appendChild(tBodyRow);
}; //closes our main table body










//lasty we need to render the final total for each store for each day.
// create a variable to hold the total as we are iterating through the hourly array

//append the total to the row.


// Store.prototype.renderFooter = function(){
// let td = document.getElementById('footerTotals');
 

//};//closes the footer function called renderFooter




























let locSeattle = new Store('Seattle', 23, 65, 6.3, []);
let locTokyo = new Store('Tokyo', 3, 24, 1.2, []);
let locDubai = new Store('Dubai', 11, 38, 3.7, []);
let locParis = new Store('Paris', 20, 38, 2.3, []);
let locLima = new Store('Lima', 2, 16, 4.6, []);

console.log(locSeattle, locTokyo, locDubai, locParis, locLima);

// console.log(locSeattle);


locSeattle.cookiePurchased();
// locTokyo.cookiePurchased();
// locDubai.cookiePurchased();
// locParis.cookiePurchased();
// locLima.cookiePurchased();

locSeattle.createSalesBody();
// locTokyo.createSalesBody();
// locDubai.createSalesBody();
// locParis.createSalesBody();
// locLima.createSalesBody();
