'use strict';
function sum(a, b) {
  let total = a + b;
  return total;
}

const seattle = {};
seattle.minCustPerHour = 23;
seattle.maxCustPerHour = 65;
seattle.avgCookPerCust = 6.3;
seattle.getNumberOfCookiesSoldEachHour = function getRandomInt() {
  const min = Math.ceil(23);
  const max = Math.floor(65);
  const cookiesAvg = (6.3);
  return (Math.round(Math.floor(Math.random() * (max - min + 1) + min) * cookiesAvg));
};
//console.log(seattle.getNumberOfCookiesSoldEachHour());
seattle.test1 = function hoursFn(){
  const hourlySale = [];
  for (let i = 0; i < 14; i++){
    hourlySale.push(seattle.getNumberOfCookiesSoldEachHour());
  }
  return hourlySale;
};
//console.log(seattle.test1());
seattle.hourlyCookieSales = seattle.test1();
//console.log(seattle.hourlyCookieSales)
seattle.dailyFinalCookieSalesFn = function finalCookieSales(){
  let answer = sum(seattle.hourlyCookieSales[0],seattle.hourlyCookieSales[1]);
  for (let i = 0; i < seattle.hourlyCookieSales.length; i++){
    answer = sum(answer, seattle.hourlyCookieSales[i]);
  }
  //console.log(answer);
  return answer;
};
//console.log(seattle.dailyFinalCookieSalesFn());
seattle.dailyFinalCookieSales = seattle.dailyFinalCookieSalesFn();


const tokyo = {};
tokyo.minCustPerHour = 3,
tokyo.maxCustPerHour = 24,
tokyo.avgCookPerCust = 1.2,
tokyo.getNumberOfCookiesSoldEachHour = function getRandomInt() {
  const min = Math.ceil(23);
  const max = Math.floor(65);
  const cookiesAvg = (6.3);
  return (Math.round(Math.floor(Math.random() * (max - min + 1) + min) * cookiesAvg));
};
//console.log(tokyo.getNumberOfCookiesSoldEachHour());
tokyo.test1 = function hoursFn(){
  const hourlySale = [];
  for (let i = 0; i < 14; i++){
    hourlySale.push(tokyo.getNumberOfCookiesSoldEachHour());
  }
  return hourlySale;
};
//console.log(tokyo.test1());
tokyo.hourlyCookieSales = tokyo.test1();
//console.log(tokyo.hourlyCookieSales);
tokyo.dailyFinalCookieSalesFn = function finalCookieSales(){
  let answer = sum(tokyo.hourlyCookieSales[0],tokyo.hourlyCookieSales[1]);
  for (let i = 0; i < tokyo.hourlyCookieSales.length; i++){
    answer = sum(answer, tokyo.hourlyCookieSales[i]);
  }
  //console.log(answer);
  return answer;
};
//console.log(tokyo.dailyFinalCookieSalesFn());
tokyo.dailyFinalCookieSales = tokyo.dailyFinalCookieSalesFn();


const lima = {};
lima.minCustPerHour = 2,
lima.maxCustPerHour = 16,
lima.avgCookPerCust = 4.6,
lima.getNumberOfCookiesSoldEachHour = function getRandomInt() {
  const min = Math.ceil(23);
  const max = Math.floor(65);
  const cookiesAvg = (6.3);
  return (Math.round(Math.floor(Math.random() * (max - min + 1) + min) * cookiesAvg));
};
//console.log(lima.getNumberOfCookiesSoldEachHour());
lima.test1 = function hoursFn(){
  const hourlySale = [];
  for (let i = 0; i < 14; i++){
    hourlySale.push(lima.getNumberOfCookiesSoldEachHour());
  }
  return hourlySale;
};
//console.log(lima.test1());
lima.hourlyCookieSales = lima.test1();
//console.log(lima.hourlyCookieSales);
lima.dailyFinalCookieSalesFn = function finalCookieSales(){
  let answer = sum(lima.hourlyCookieSales[0],lima.hourlyCookieSales[1]);
  for (let i = 0; i < lima.hourlyCookieSales.length; i++){
    answer = sum(answer, lima.hourlyCookieSales[i]);
  }
  //console.log(answer);
  return answer;
};
//console.log(lima.dailyFinalCookieSalesFn());
lima.dailyFinalCookieSales = lima.dailyFinalCookieSalesFn();


const dubai = {};
dubai.minCustPerHour = 11,
dubai.maxCustPerHour = 38,
dubai.avgCookPerCust = 3.7,
dubai.getNumberOfCookiesSoldEachHour = function getRandomInt() {
  const min = Math.ceil(23);
  const max = Math.floor(65);
  const cookiesAvg = (6.3);
  return (Math.round(Math.floor(Math.random() * (max - min + 1) + min) * cookiesAvg));
};
//console.log(dubai.getNumberOfCookiesSoldEachHour());
dubai.test1 = function hoursFn(){
  const hourlySale = [];
  for (let i = 0; i < 14; i++){
    hourlySale.push(dubai.getNumberOfCookiesSoldEachHour());
  }
  return hourlySale;
};
//console.log(dubai.test1());
dubai.hourlyCookieSales = dubai.test1();
//console.log(dubai.hourlyCookieSales);
dubai.dailyFinalCookieSalesFn = function finalCookieSales(){
  let answer = sum(dubai.hourlyCookieSales[0],dubai.hourlyCookieSales[1]);
  for (let i = 0; i < dubai.hourlyCookieSales.length; i++){
    answer = sum(answer, dubai.hourlyCookieSales[i]);
  }
  //console.log(answer);
  return answer;
};
//console.log(dubai.dailyFinalCookieSalesFn());
dubai.dailyFinalCookieSales = dubai.dailyFinalCookieSalesFn();


const paris = {};
paris.minCustPerHour = 20,
paris.maxCustPerHour = 38,
paris.avgCookPerCust = 2.3,
paris.getNumberOfCookiesSoldEachHour = function getRandomInt() {
  const min = Math.ceil(23);
  const max = Math.floor(65);
  const cookiesAvg = (6.3);
  return (Math.round(Math.floor(Math.random() * (max - min + 1) + min) * cookiesAvg));
};
//console.log(paris.getNumberOfCookiesSoldEachHour());
paris.test1 = function hoursFn(){
  const hourlySale = [];
  for (let i = 0; i < 14; i++){
    hourlySale.push(paris.getNumberOfCookiesSoldEachHour());
  }
  return hourlySale;
};
//console.log(paris.test1());
paris.hourlyCookieSales = paris.test1();
//console.log(paris.hourlyCookieSales)
paris.dailyFinalCookieSalesFn = function finalCookieSales(){
  let answer = sum(paris.hourlyCookieSales[0],paris.hourlyCookieSales[1]);
  for (let i = 0; i < paris.hourlyCookieSales.length; i++){
    answer = sum(answer, paris.hourlyCookieSales[i]);
  }
  //console.log(answer);
  return answer;
};
//console.log(paris.dailyFinalCookieSalesFn());
paris.dailyFinalCookieSales = paris.dailyFinalCookieSalesFn();

