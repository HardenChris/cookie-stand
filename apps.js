'use strict';

//functions:
function generateRange(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

let seat = {
  name: seat,
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  cookiesPerHr: [],
  dailyTotal: 0,
  hourSales: function() {
    for (let hr = 0; hr < hours.length; hr++) {
      let getNum = generateRange(this.minCustPerHour,this.maxCustPerHour);
      let finalCookieSales = (Math.round(getNum * this.avgCookPerCust));
      this.cookiesPerHr.push(finalCookieSales);
    }
  }
};

function getLineItems(store) {
  let parentEl = document.querySelector('#${store.name}');

  for (let total = 0 ; total < store.cookiesPerHr.length; total++) {
    let newItem = document.createElement('li');

    newItem.innerText = store.cookiesPerHr[total];

    parentEl.appendChild(newItem);
  }

}

console.log(seat);0
0seat.hourSales();
console.log(seat.cookiesPerHr);
getLineItems(seat);
