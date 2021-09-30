'use strict';

//functions:
function generateRange(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
//
////console.log(LocalsArray);
//
//
//let seattle = {
//  name: 'seattle',
//  minCustPerHour: 23,
//  maxCustPerHour: 65,
//  avgCookPerCust: 6.3,
//  cookiesPerHr: [],
//  dailyTotal: 0,
//  hourSales: function() {
//    for (let hr = 0; hr < hours.length; hr++) {
//      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
//      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
//      this.dailyTotal = this.dailyTotal + finalCookieSales;
//      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
//    }
//  }
//};
////console.log(seattle);
//
//
//let tokyo = {
//  name: 'tokyo',
//  minCustPerHour: 3,
//  maxCustPerHour: 24,
//  avgCookPerCust: 1.2,
//  cookiesPerHr: [],
//  dailyTotal: 0,
//  hourSales: function() {
//    for (let hr = 0; hr < hours.length; hr++) {
//      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
//      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
//      this.dailyTotal = this.dailyTotal + finalCookieSales;
//      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
//    }
//  }
//};
////console.log(tokyo);
//
//
//let dubai = {
//  name: 'dubai',
//  minCustPerHour: 11,
//  maxCustPerHour: 38,
//  avgCookPerCust: 3.7,
//  cookiesPerHr: [],
//  dailyTotal: 0,
//  hourSales: function() {
//    for (let hr = 0; hr < hours.length; hr++) {
//      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
//      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
//      this.dailyTotal = this.dailyTotal + finalCookieSales;
//      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
//    }
//  }
//};
////console.log(dubai);
//
//
//let paris = {
//  name: 'paris',
//  minCustPerHour: 20,
//  maxCustPerHour: 38,
//  avgCookPerCust: 2.3,
//  cookiesPerHr: [],
//  dailyTotal: 0,
//  hourSales: function() {
//    for (let hr = 0; hr < hours.length; hr++) {
//      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
//      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
//      this.dailyTotal = this.dailyTotal + finalCookieSales;
//      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
//    }
//  }
//};
////console.log(paris);
//
//
//let lima = {
//  name: 'lima',
//  minCustPerHour: 2,
//  maxCustPerHour: 16,
//  avgCookPerCust: 4.6,
//  cookiesPerHr: [],
//  dailyTotal: 0,
//  hourSales: function() {
//    for (let hr = 0; hr < hours.length; hr++) {
//      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
//      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
//      this.dailyTotal = this.dailyTotal + finalCookieSales;
//      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
//    }
//  }
//};
//console.log(lima);

//const localsArray =[];


function LocationBuilder(locName, minCustPerHr, maxCustPerHr, avgCookPerCust) {
  this.name = locName;
  this.minCustPerHour = minCustPerHr;
  this.maxCustPerHour = maxCustPerHr;
  this.avgCookPerCust = avgCookPerCust;
  this.cookiesPerHr = [];
  this.dailyTotal = 0;
  this.hourSales = function () {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour, this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.dailyTotal = this.dailyTotal + finalCookieSales;
      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
    }
  };
}
//console.log(objectTemp('test', '12', '35', '2.1'));

//let diamondLocal = new LocationBuilder('diamond', 12, 35, 2.1)

let seattle = new LocationBuilder('seattle', 23, 65, 6.3);
let tokyo = new LocationBuilder('tokyo', 3, 24, 1.2);
let dubai = new LocationBuilder('dubai', 11, 38, 3.7);
let paris = new LocationBuilder('paris', 20, 38, 2.3);
let lima = new LocationBuilder('lima', 2, 16, 4.6);

console.log(seattle.cookiesPerHr);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);





//console.log(new LocationBuilder('diamond', 12, 35, 2.1));
//
//console.log(diamondLocal.dailyTotal);
//console.log(diamondLocal.cookiesPerHr);
////console.log(getNum);
//console.log;




//console.log(hourSales());

//localsArray.push(
//  new LocationBuilder('diamond', 12, 35, 2.1),
//  new LocationBuilder('denise', 2, 75, 5.4),
//  new LocationBuilder('joshua', 32, 37, 1.6)
//);
//





function getLineItems(store) {
  let parentEl = document.querySelector(`#${store.name}`);

  for (let total = 0 ; total < store.cookiesPerHr.length; total++) {
    let newItem = document.createElement('li');

    newItem.innerText = store.cookiesPerHr[total];

    parentEl.appendChild(newItem);
  }
  let finalEl = document.createElement('li');
  finalEl.innerText = 'Total: ' + store.dailyTotal + ' cookies';
  parentEl.appendChild(finalEl);
}

//getLineItems(seattle);
//getLineItems(tokyo);
//getLineItems(dubai);
//getLineItems(paris);
//getLineItems(lima);
seattle.hourSales();
getLineItems(seattle);
lima.hourSales();
getLineItems(lima);
dubai.hourSales();
getLineItems(dubai);
paris.hourSales();
getLineItems(paris);
tokyo.hourSales();
getLineItems(tokyo);
////'diamond'.hourSales();
////getLineItems('diamond');



