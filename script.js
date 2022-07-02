const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// For each array element console.log it
// companies.forEach((company) => {
//   console.log(company);
// });

// filter

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

// Filter each element of the arr that is greater or equal than 21

// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter((company) => company.category === 'Retail');

// console.log(retailCompanies);

// Filter 80s companies

// const eightiesCompanies = companies.filter((company) => company.start >= 1980 && company.start < 1990);

// console.log(eightiesCompanies);

// map

// Create array of company names

// const companyNames = companies.map((company) => company.name);

// console.log(companyNames);

// Create array of company names with its start year and end year

// const companyInfo = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);

// console.log(companyInfo);

// sort

// Sort companies by start year

// const sortedCompanies = companies.sort((a, b) => a.start - b.start);

// console.log(sortedCompanies);

// Sort ages

// const sortedAges = ages.sort((a, b) => a - b);

// console.log(sortedAges);

// reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// console.log(ageSum);

// Sum age values

const ageSum = ages.reduce((acc, curr) => acc + curr, 0);

console.log(ageSum); // 460

// Get total years from all companies

const totalYears = companies.reduce((total, company) => {
  return total + (company.end - company.start);
}, 0);

console.log(totalYears); // 119
