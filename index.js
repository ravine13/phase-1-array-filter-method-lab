// Code your solution here
function findMatching(drivers,name){
    const X = name.toLowerCase();
    const matchingDrivers = drivers.filter(function(driver){
        return driver.toLowerCase() === X;
    });
    return matchingDrivers;
}

const driver= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const matchingDrivers = findMatching(driver,"Bobby");

console.log(matchingDrivers)


function fuzzyMatch(drivers,name){
    const X = name.toLowerCase();
 return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(X);
    });
    
}

const drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
 const result = fuzzyMatch(drivers,'SA')
 console.log(result)

 function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name;
    });
}

const drivers1 = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

const matchedDrivers = matchName(drivers1, 'SA');
console.log(matchedDrivers);
