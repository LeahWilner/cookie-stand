'use strict';
console.log('js file loaded.');




// (6:00 AM to 8:00 PM for all locations)

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// cookiePurchased = eachHour x average cookies purchased x randomNumber of customers.

// Use a method of that object to generate a random number of customers per hour.
// Store the results for each location in a separate array…
// perhaps as a property of the object representing that location.
// Store the min/max hourly customers,
// and the average cookies per customer, in object properties.

let locSeattle = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerSale: 6.3

};


let locTokyo = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerSale: 1.2

};

let locDubai = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 3.7

};

let locParis = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 2.3

};

let locLima = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerSale: 4.6

};







console.log(locSeattle, locTokyo, locDubai, locParis, locLima);



// Calculating the sum of these hourly totals;






//  generating sales data and providing output on an html document.
// Display the values of each array as unordered lists in the browser.

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies
