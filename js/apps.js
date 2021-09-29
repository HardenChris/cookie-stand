'use strict';

//functions:
function generateRange(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

let seattle = {
  name: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  cookiesPerHr: [],
  dailyTotal: 0,
  hourSales: function() {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.dailyTotal = this.dailyTotal + finalCookieSales;
      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
    }
  }
};
console.log(seattle);


let tokyo = {
  name: 'tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookPerCust: 1.2,
  cookiesPerHr: [],
  dailyTotal: 0,
  hourSales: function() {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.dailyTotal = this.dailyTotal + finalCookieSales;
      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
    }
  }
};
console.log(tokyo);


let dubai = {
  name: 'dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookPerCust: 3.7,
  cookiesPerHr: [],
  dailyTotal: 0,
  hourSales: function() {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.dailyTotal = this.dailyTotal + finalCookieSales;
      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
    }
  }
};
console.log(dubai);


let paris = {
  name: 'paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookPerCust: 2.3,
  cookiesPerHr: [],
  dailyTotal: 0,
  hourSales: function() {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.dailyTotal = this.dailyTotal + finalCookieSales;
      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
    }
  }
};
console.log(paris);


let lima = {
  name: 'lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookPerCust: 4.6,
  cookiesPerHr: [],
  dailyTotal: 0,
  hourSales: function() {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.dailyTotal = this.dailyTotal + finalCookieSales;
      this.cookiesPerHr.push(`${hours[hr]}: ${finalCookieSales} cookies`);
    }
  }
};
console.log(lima);


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
