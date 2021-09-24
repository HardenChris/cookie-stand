'use strict';


const seattle = {};
seattle.minCustPerHour = 23;
seattle.maxCustPerHour = 65;
seattle.avgCookPerCust = 6.3;
seattle.randomNumberGen = function getRandomInt() {
  const min = Math.ceil(23);
  const max = Math.floor(65);
  const cookiesAvg = (6.3);
  return (Math.round(Math.floor(Math.random() * (max - min) + min) * cookiesAvg));
};
console.log(seattle.randomNumberGen());
seattle.test1 = function hoursFn(){
  const hourlySale = [];
  for (let i = 0; i < 13; i++){
    hourlySale.push(seattle.randomNumberGen);
  }
  return hourlySale;
}
console.log(hourlySale);
console.log(hoursFn);


//const tokyo = {}
//tokyo.minCustPerHour : 3,
//tokyo.maxCustPerHour : 24,
//tokyo.avgCookPerCust : 1.2,
//tokyo.randomNumberGen = function getRandomInt() {
//  const min = Math.ceil(23);
//  const max = Math.floor(65);
//  const cookiesAvg = (6.3);
//  return (Math.round(Math.floor(Math.random() * (max - min) + min) * cookiesAvg));
//};
//console.log(tokyo.randomNumberGen());


//const lima = {}
//lima.minCustPerHour : 2,
//lima.maxCustPerHour : 16,
//lima.avgCookPerCust : 4.6,
//lima.randomNumberGen = function getRandomInt() {
//  const min = Math.ceil(23);
//  const max = Math.floor(65);
//  const cookiesAvg = (6.3);
//  return (Math.round(Math.floor(Math.random() * (max - min) + min) * cookiesAvg));
//};
//console.log(lima.randomNumberGen());



//const dubai = {}
//dubai.minCustPerHour : 11,
//dubai.maxCustPerHour : 38,
//dubai.avgCookPerCust : 3.7,
//dubai.randomNumberGen = function getRandomInt() {
//  const min = Math.ceil(23);
//  const max = Math.floor(65);
//  const cookiesAvg = (6.3);
//  return (Math.round(Math.floor(Math.random() * (max - min) + min) * cookiesAvg));
//};
//console.log(dubai.randomNumberGen());




//const paris = {
//paris.minCustPerHour : 20,
//paris.maxCustPerHour : 38,
//paris.avgCookPerCust : 2.3,
//paris.randomNumberGen = function getRandomInt() {
//  const min = Math.ceil(23);
//  const max = Math.floor(65);
//  const cookiesAvg = (6.3);
//  return (Math.round(Math.floor(Math.random() * (max - min) + min) * cookiesAvg));
//};
//console.log(paris.randomNumberGen());

