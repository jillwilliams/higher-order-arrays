const companies = [
    {name: 'Company One', category: "Finance", start: 1981, end: 2003},
    {name: 'Company Two', category: "Retail", start: 1992, end: 2008},
    {name: 'Company Three', category: "Auto", start: 1999, end: 2007},
    {name: 'Company Four', category: "Retail", start: 1989, end: 2010},
    {name: 'Company Five', category: "Technology", start: 2009, end: 2014},
    {name: 'Company Six', category: "Finance", start: 1987, end: 2010},
    {name: 'Company Seven', category: "Auto", start: 1986, end: 1996},
    {name: 'Company Eight', category: "Technology", start: 2011, end: 2016},
    {name: 'Company Nine', category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach: loops through an array with no return back to you
for (let i = 0; i < companies.length; i++) {
    console.log(companies);
// }
// output: a log of all companies amd their data

// forEach
companies.forEach(function(company)) {
    console.log(company);
}
// output: a log of all companies amd their data, same as the forEach, just a different way to write it.
// forEach
companies.forEach(function(company)) {
    console.log(company.name);
// }
// output: each of the companies names


// filter: allows you to filter things out of the array. 
// get all the ages of 21 or over
// Using a "for" loop 
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);
// output: an array called canDrink in which all entries are ages that are 21 or over. Array canDrink = [33, 54, 21, 44, 61, 45, 25, 64, 32] ...so obviuosly not in order...


// using FILTER
const canDrink = ages.filter(function(age) {
    if (age >= 21) {
        return true;
    }
})
console.log(canDrink);
// output: an array called canDrink in which all entries are ages that are 21 or over. Array canDrink = [33, 54, 21, 44, 61, 45, 25, 64, 32] ...so obviuosly not in order...

// using FILTER  **PREFERRED METHOD**
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);
// output: an array called canDrink in which all entries are ages that are 21 or over. Array canDrink = [33, 54, 21, 44, 61, 45, 25, 64, 32] ...so obviuosly not in order...

// filter Retail Companies:
const retailCompanies = companies.filter(function(company) {
    if (company.category === "Retail") {
        return true;
    }
})
console.log(retailCompanies);
// output:
    // {name: 'Company Two', category: "Retail", start: 1992, end: 2008},
    // {name: 'Company Four', category: "Retail", start: 1989, end: 2010},
    // {name: 'Company Nine', category: "Retail", start: 1981, end: 1989},


const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);
// outputs same as above..company 2, 4, 9

const financeCompanies = companies.filter(company => company.category === "Finance");
console.log(financeCompanies);
// outputs:
    // {name: 'Company One', category: "Finance", start: 1981, end: 2003},
    // {name: 'Company Six', category: "Finance", start: 1987, end: 2010},


// filter all companies in the 1980's:
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990 ));
console.log(eightiesCompanies);
// output:
    // {name: 'Company One', category: "Finance", start: true, end: 2003},
    // {name: 'Company Four', category: "Retail", start: true, end: 2010},
    // {name: 'Company Six', category: "Finance", start: true, end: 2010},
    // {name: 'Company Seven', category: "Auto", start: true, end: 1996},
    // {name: 'Company Nine', category: "Retail", start: true, end: 1989},

// get companies that lasted ten years
const tenYears = companies.filter(company => (company.end - company.start) >= 10);
console.log(tenYears);
// output: 1,2,4,6,7 

///////////////////////////////////////////////////////////////
// map: can create new arrays from current arrays 

// create array of company names
const companyNames = companies.map(function(company) {
    return company.name;
})
console.log(companyNames);
// ouput: an array of all of the company names, in order

// create an array with company name and start and end years
const companyStartEnd = companies.map(company => `${company.name} : ${company.start} - ${company.end}`);
console.log(companyStartEnd);
// output: company name : start - end for all companies

const testMap = companies.map(function(company) {
    
})
console.log(testMap);

const ageSquared = ages.map(age => age*age);
console.log(ageSquared);
// output: [1089, 144, 400, 256, ....1024]

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);
//result all company ages times 2..[66, 24, 40, 32,10...64]

const ageMap = ages
    .map(age => age * age)
    .map(age => age * 2);
console.log(ageMap);
// output: ages sqared then times 2: [2178, 288, 800, ....2048]






const companyNames = companies.map(company => companies.name);
console.log(companyNames);






///////////////////////////////////////////////////////////////////
// sort: sort through data by your choice, compares two companies to eachother, 

// sort companies by start year
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sortedCompanies);
// output: it sorts the companies based upon the start dates and it lists them in chronological order//

const sortedCompanies = companies.sort((a, b) => 
    (a.start > b.start ? 1 : -1)
);
console.log(sortedCompanies);
// output: it sorts the companies based upon the start dates and it lists them in chronological order//

// SORT Ages
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);
//output: ages in ascending order

const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);
//output: ages in descending order



// REDUCE: used to 
//add all the ages together
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);
//all the ages added together: 460//

// with reduce :
const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
console.log(ageSum);
// 460

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
//460

// get total years for all companies
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0);
console.log(totalYears);
// 118


const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);
//118









// video on youtube at:
// https://www.youtube.com/watch?v=rRgD1yVwIvE