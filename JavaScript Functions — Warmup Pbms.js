// Write a function called “addFive”.

//declare and assign the value either we can use pass the value in function() params.
// var num = 5;
function addFive(num) {
    return num + 5;
}
var result = addFive(5);
console.log(result);

//Write a function called “getOpposite”

//var num = 5;
function getOpposite(num) {
    if (parseInt(num) === 'number') {
        return -num;
    } else if (num === 0) {
        return 0;
    } else {
        return -1;
    }
}
var result = getOpposite("yy");
console.log(result);


//Fill in your code that takes an number minutes and converts it to seconds

//var min = 5;
function toSeconds(min) {
    return min * 60;
}
var secs = toSeconds(2);
console.log(secs);

//Create a function that takes a string and returns it as an integer

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger("5");
console.log(myint);

//Create a function that takes a number as an argument, 
//increments the number by +1 and returns the result

var myint = 0;
function nextNumber(myint) {
    return myint + 1;
}
var myNextint = nextNumber(-2);
console.log(myNextint);

//Create a function that takes an array and returns the first element

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement([1, 2, 3]);
console.log(data);

//Convert Hours into Seconds

function hourToSeconds(arr) {
    let hourToSecondsArr = [];
    for (let hr of arr) {
        let minsSec = 60 * 60;
        hourToSecondsArr.push(hr * minsSec);
    }
    return hourToSecondsArr.join(" ");
}
var data = hourToSeconds([1, 2, 24]);
console.log(data);

//Find the Perimeter of a Rectangle

function findPerimeter(num1, num2) {
    return 2 * (num1 + num2);
}
var peri = findPerimeter(6, 7);
console.log(peri);

//Less Than 100?

function lessThan100(num1, num2) {
    let sum = num1 + num2;
    if (sum < 100) {
        return true;
    } else {
        return false;
    }
}
var res = lessThan100(22, 156);
console.log(res);

//The first parameter divided by the second parameter will have a remainder, 
//possibly zero. Return that value

function remainder(num1, num2) {
    return num1 % num2;
}
var res = remainder(3, 4);
console.log(res);


//Old macdonald had a farm

function CountAnimals(tur, horse, pigs) {
    let animalLegCount = (tur * 2) + (horse * 4) + (pigs * 4);
    return animalLegCount;
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);

//Frames Per Second

function frames(num1, num2) {
    let framePerMin = (num1) * (num2 * 60);
    return framePerMin;
}
var fps = frames(1, 2);
console.log(fps)

//Check if an Integer is Divisible By Five

function divisibleByFive(num1) {
    if (num1 % 5 === 0) {
        return true;
    } else {
        return false;
    }
}
var divisible = divisibleByFive(5);
console.log(divisible);

//Given a number, “isEven” returns whether it is even

function isEven(num) {
    if (typeof num === 'string') {
        return -1;
    } else if (typeof num === 'number') {
        if (num % 2 === 0) {
            return true;
        } else if (num % 2 !== 0) {
            return false;
        }
    }
}
var even = isEven(9);
console.log(even);

//Given 2 numbers, “areBothOdd” returns whether or 
//not both of the given numbers are odd

function areBothOdd(num1, num2) {
    if ((num1 % 2 !== 0) && (num2 % 2 !== 0)) {
        return true;
    }
    else {
        return false;
    }

}
console.log(areBothOdd(3, 6));

//Given a first and a last name, “getFullName” returns a single string with the 
//given first and last names separated by a single space

function getFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    //console.log(fullName);
    if ((typeof firstName === 'string') && (typeof lastName === 'string')) {
        return fullName;
    } else if ((typeof firstName === 'string') && (typeof lastName === 'undefined')) {
        return fullName.slice(0, -10);
    } else {
        return fullName.slice(-1);
    }
}
console.log(getFullName("Maya", "Yadhav"));

//Given a word, “getLengthOfWord” returns the length of the given word

function getLengthOfWord(word1) {
    if (typeof word1 === 'string') {
        return word1.length;
    } else {
        return -1;
    }
}
console.log(getLengthOfWord("Guvi_Geek"));

//Given two words, “isSameLength” returns whether the given words have the same length

function isSameLength(word1, word2) {
    if (typeof word1 === 'string' && typeof word2 === 'string') {
        if (word1.length === word2.length) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
console.log(isSameLength(9, 9));

//Create a function to calculate the distance 
//between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    let wholeDisatance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    return wholeDisatance.toFixed(2);

}

//Given an array and an integer, “getNthElement” returns the 
//element at the given integer, within the given array


function getNthElement(array, n) {
    if (array.length === 0) {
        return -1;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i === n) {
                return array[i];
            }
        }
    }
}
console.log(getNthElement([1, 2, 3, 4], 1));

//Write a function called “getLastElement”

function getNthElement(array) {
    let lastVal = 0;
    if (array.length === 0) {
        return -1;
    } else {
        for (let val of array) {
            lastVal = val;
        }
    }
    return lastVal;
}
console.log(getNthElement([1, 2, 34, 5]));

//Write a function called “getProperty”

var obj = {
    mykey: 'value'
};
function getProperty(obj, key) {

    return (Object.keys(obj)) ? obj[key] : "Un";
}
console.log(getProperty(obj, 'dum'));


//Write a function called “addProperty”

var obj = {
    mykey: 'value'
};
function addProperty(obj, key) {
    obj.myAnotherKey = true;
    return obj;
}
console.log(addProperty(obj, 'myAnotherKey'));

//Write a function called “removeProperty”


var studentDetails = {
    name: "Yadhavan",
    age: 26,
    street: "Nehru Street",
    city: "Banglore",

}
function removeProperty(obj, key) {
    delete studentDetails.name;
    return studentDetails;
}
console.log(removeProperty(studentDetails, 'name'));

//Return an array, where the first element is the count of positives numbers 
//and the second element is sum of negative numbers


var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives() {
    if (arr == null || arr.length < 1) {
        return [];
    }
    let sumNegative = 0;
    let posLen = [0, 0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            posLen[1] += arr[i];
        } else {
            posLen[0] += 1;
        }
    }
    return posLen;
}
console.log(ar2());

//Create a function that receives an array of numbers and returns 
//an array containing only the positive numbers

function getPositives(ar) {
    return ar.filter((value) => value > 0)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


//Write a function `powersOfTwo` which will 
//return list of all powers of 2 from 0 to n (where n is an exponent)

function powersOfTwo(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        let resVes = Math.pow(2, i);
        res.push(resVes);
    }

    return res.join(" ");
}
console.log(powersOfTwo(5));

//Find the maximum number in an array of numbers

function findMax(ar) {
    let maxVal = 0
    ar.forEach((ele) => {
        if (ele > maxVal) {
            maxVal = ele;
        }
    })
    return maxVal;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log('Max:', max);

//Print the first 100 prime numbers

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, " → ", i);
            n++;
        }

        i++;
    }
}
// Returns true if a number is prime
function isPrime(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        for (i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}


// Create a function that will return in an array the first “nPrimes” 
//prime numbers greater than a particular number “startAt”


console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    var arrVal = [];
    var i = startAt;
    while(arrVal.length < nPrimes)
    {
       if (isPrime(i))
        {
            arrVal.push(i);
        }
        
        i++;
    }
    
    return arrVal;
}
// Returns true if a number is prime
function isPrime(n)
{
if (n < 2)
    return false;
if (n == 2)
    return true;
var nMax = Math.sqrt(n);
    for(var i = 2; i <= nMax; i++)
    {
    if (n % i == 0)
    {
        return false;
    }
    }
    
    return true;
}

//Reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
    let strSplit = s.split("");
    strSplit.reverse();
    let reverseVal = strSplit.join("");
    return reverseVal;
}

//Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {

    var result = [...ar1];

    for (let el of ar2) {
        result.push(el);
    }
    return result;
}

//Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s) {
    let sum = 0;
    let strSplit = s.split(",");

    strSplit.forEach(ele => {
        sum += parseFloat(ele);
    });
    return sum;
}