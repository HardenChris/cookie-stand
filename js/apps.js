'use strict';

//functions:
function generateRange(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

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
  LocationBuilder.all.push(this);
}
LocationBuilder.all = [];


//console.log(objectTemp('test', '12', '35', '2.1'));

//let diamondLocal = new LocationBuilder('diamond', 12, 35, 2.1)

let seattle = new LocationBuilder('seattle', 23, 65, 6.3);
let tokyo = new LocationBuilder('tokyo', 3, 24, 1.2);
let dubai = new LocationBuilder('dubai', 11, 38, 3.7);
let paris = new LocationBuilder('paris', 20, 38, 2.3);
let lima = new LocationBuilder('lima', 2, 16, 4.6);

const localsArray =[];
localsArray.push(
  seattle,
  tokyo,
  dubai,
  paris,
  lima);


// console.log(localsArray);
// console.log(seattle);
// console.log(tokyo);
// console.log(dubai);
// console.log(paris);
// console.log(lima);


LocationBuilder.prototype.renderTableRow = function() {
  let parentEl = document.getElementById('location-body');
  console.log(parentEl,'wow');
  let rowEl = document.createElement('tr');

  let dataEl = document.createElement('td');
  dataEl.innerText = this.name;
  rowEl.appendChild(dataEl);

  for (let sale = 0; sale < this.cookiesPerHr.length; sale++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.cookiesPerHr[sale];
    rowEl.appendChild(dataEl);
  }
  dataEl = document.createElement('td');
  dataEl.innerText = this.dailyTotal;
  rowEl.appendChild(dataEl);


  parentEl.appendChild(rowEl);
  console.log(parentEl);
};


// let diamond = new LocationBuilder('diamond', 23, 65, 6.3);
// diamond.hourSales();


seattle.hourSales();
dubai.hourSales();
tokyo.hourSales();
paris.hourSales();
lima.hourSales();


//diamond.getLineItems();
// diamond.renderTableRow();
// console.log(LocationBuilder.all);
//seattle


function createNewLocal(event) {
  event.preventDefault();
  //console.log(event);
  let locName = event.target[1].value;
  let maxCustPerHr = event.target[2].value;
  let minCustPerHr = event.target[3].value;
  let avgCookPerCust = event.target[4].value;
  // console.log(locName);
  // console.log(maxCustPerHr);
  // console.log(minCustPerHr);
  // console.log(avgCookPerCust);
  let tempLoc = new LocationBuilder ( locName, maxCustPerHr, minCustPerHr, avgCookPerCust);
  tempLoc.hourSales();
  console.log(tempLoc.hourSales());
  console.log(tempLoc);
  localsArray.push(tempLoc);
  console.log(localsArray);
  tempLoc.renderTableRow();
}

// seattle.renderTableRow();
// dubai.renderTableRow();
// tokyo.renderTableRow();
// paris.renderTableRow();
// lima.renderTableRow();

const newBuilder = document.getElementById('location-form');
newBuilder.addEventListener('submit', createNewLocal);

