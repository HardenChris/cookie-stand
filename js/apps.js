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


console.log(localsArray);

console.log(seattle);
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





// function getLineItems(store) {
//  let parentEl = document.querySelector(`#${store.name}`);

//  for (let total = 0 ; total < store.cookiesPerHr.length; total++) {
//    let newItem = document.createElement('li');

//    newItem.innerText = store.cookiesPerHr[total];

//    parentEl.appendChild(newItem);
//  }
//  let finalEl = document.createElement('li');
//  finalEl.innerText = 'Total: ' + store.dailyTotal + ' cookies';
//  parentEl.appendChild(finalEl);
// }

//getLineItems(seattle);
//getLineItems(tokyo);
//getLineItems(dubai);
//getLineItems(paris);
//getLineItems(lima);
//seattle.hourSales();
//getLineItems(seattle);
//lima.hourSales();
//getLineItems(lima);
//dubai.hourSales();
//getLineItems(dubai);
//paris.hourSales();
//getLineItems(paris);
//tokyo.hourSales();
//getLineItems(tokyo);
////'diamond'.hourSales();
////getLineItems('diamond');



//
//function generateTableHead(table, data) {
//  let thead = table.createTHead();
//  let row = thead.insertRow();
//  for (let key of data) {
//    let th = document.createElement('th');
//    let text = document.createTextNode(key);
//    th.appendChild(text);
//    row.appendChild(th);
//  }
//}
//
//function generateTable(table, data) {
//  for (let element of data) {
//    let row = table.insertRow();
//    for (key in element) {
//      let cell = row.insertCell();
//      let text = document.createTextNode(element[key]);
//      cell.appendChild(text);
//    }
//  }
//}
//
//let table = document.querySelector('table');
//let data = Object.keys(seattle);
//generateTableHead(table, data);
//generateTable(table, seattle);



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


let diamond = new LocationBuilder('diamond', 23, 65, 6.3);
diamond.hourSales();
//diamond.getLineItems();
diamond.renderTableRow();
console.log(LocationBuilder.all);
//seattle
