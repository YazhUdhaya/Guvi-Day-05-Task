//Print odd numbers in an array
//Anonymous Function

console.log("Print odd numbers in an array using Anonymous Function:");
let setArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 94];
let oddNumbers = function () {
    let valArr = [];
    for (let value of setArray) {
        (value % 2 !== 0) ? valArr.push(value) : 0;

    }
    return valArr;
}
console.log(oddNumbers());

//IIFE Function

console.log("Print odd numbers in an array using IIFE Function:");
(() => {
    let valArr = [];
    for (let value of setArray) {
        if (value % 2 !== 0) {
            valArr.push(value);
        }
    }
    console.log(valArr);
})(setArray);


//Arrow Function

console.log("Print odd numbers in an array using Arrow Function:");
let oddNumArrowFn = () => {
    let valArr = [];
    for (let i = 0; i < setArray.length; i++) {
        if (setArray[i] % 2 !== 0) {
            valArr.push(setArray[i]);
        }
    }
    return valArr;
}
console.log(oddNumArrowFn());


//Convert all the strings to title caps in a string array
//Anonymous Function

console.log("Convert All Strings Caps In String Array using Anonymous Function");

let normalString = ['google', 'guvi', 'geek', 'apple', 'microsoft'];
let capsTitleStrFn = (function () {
    let capsTitleString = [];
    let capital = '';
    for (i = 0; i < normalString.length; i++) {
        for (j = 0; j < normalString[i].length; j++) {
            capital = normalString[i][0].toUpperCase() + normalString[i].slice(1);

        }
        capsTitleString.push(capital);
    }
    return capsTitleString.join(" ");
});
console.log(capsTitleStrFn());


//IIFE Function 


console.log("Convert All Strings Caps In String Array using IIFE Function");
(() => {
    let capsTitleString = [];
    let capital = '';
    for (i = 0; i < normalString.length; i++) {
        capital = normalString[i].charAt(0).toUpperCase() + normalString[i].substr(1).toLowerCase();
        capsTitleString.push(capital);
    }
    console.log(capsTitleString.join(" "));

})();

//Arrow Function 

console.log("Convert All Strings Caps In String Array using Arrow Function");
let capsTitStrFn = () => {
    let capsTitleString = [];
    let capital = '';
    for (let str of normalString) {
        capital = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        capsTitleString.push(capital);
    }
    return capsTitleString.join(" ");
}
console.log(capsTitStrFn())

//Sum of all numbers in an array
//Anonymous Function

console.log("Sum of all numbers in an array using Anonymous Function:");
let numberArr = [23, 45, 67, 78, 98, 12, 3, 4, 56, 6, 70];
let sumOfAllArr = (function () {
    let sum = 0;
    for (let arrVal of numberArr) {
        sum += arrVal;
    }
    return sum;
});

console.log(sumOfAllArr());

//IIFE Function

console.log("Sum of all numbers in an array using IIFE Function:");
(() => {
    let sum = 0;
    numberArr.forEach((arrVal) => {
        sum += arrVal;
    });
    console.log(sum);
})();

//Arrow Function

console.log("Sum of all numbers in an array using Arrow Function:");
let sumOfAllNum = () => {
    let sum = 0;
    let num = 0;
    while (num < numberArr.length) {
        sum += numberArr[num];
        num++;
    }
    return sum;
}
console.log(sumOfAllNum());

//Return all the prime numbers in an array
//Anonymous Function

console.log("Return all the prime numbers in an array using Anonymous Function :");
let valueArr = [2, 4, 5, 6, 7, 22, 13, 45, 67, 89];
let primeNumList = (function () {
    valueArr.map((number) => {
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                let index = valueArr.indexOf(number);
                return valueArr.splice(index, 1);
            }
        }
    })
    return valueArr;
});
console.log(primeNumList());

//IIFE Function 

console.log("Return all the prime numbers in an array using IIFE Function :");
(() => {
    valueArr.forEach((element) => {
        if (element === 0 || element === 1) {
            return false;
        } else if (element === 2) {
            return true;
        } else {
            for (i = 2; i < element; i++) {
                if (element % i === 0) {
                    let index = valueArr.indexOf(element);
                    return valueArr.splice(index, 1)
                }
            }
        }
    })
    console.log(valueArr);
})();

// Arrow Function

console.log("Return all the prime numbers in an array using Arrow Function :");
let primeListArr = () => {
    valueArr.filter((element) => {
        for (i = 2; i < element; i++) {
            if (element % i === 0) {
                let index = valueArr.indexOf(element);
                return valueArr.splice(index, 1);

            }
        }
    });
    return valueArr;
}
console.log(primeListArr());


//Return all the palindromes in an array
//Anonymous Function

console.log("Return all the palindromes in an array using Anonymous Function :")

let arrStringVal = ['madam', 'kayak', 'deified', 'repaper', 'main', 'queen', 'rotator'];
let palindromeArrList = (function () {
    let reverseArr = [];
    for (let string of arrStringVal) {
        let splitString = string.split("");
        splitString.reverse();
        let reverseStringVal = splitString.join("");;
        if (string === reverseStringVal) {
            reverseArr.push(reverseStringVal);
        }
    }
    console.log(reverseArr.join(" "));
});
palindromeArrList();

//IIFE Function
console.log("Return all the palindromes in an array using IIFE Function :");

    (() => {
        let reverseArr = [];
        arrStringVal.forEach((str) => {
            let splitStr = str.split("");
            splitStr.reverse();
            let reverseStr = splitStr.join("");
            if (str === reverseStr) {
                reverseArr.push(reverseStr);
            }
        })
        console.log(reverseArr.join(" "));
    })();

//Arrow Function

console.log("Return all the palindromes in an array using Arrow Function :")
let palinArrStrFn = () => {
    let reverseArr = [];

    arrStringVal.map((str) => {
        let splitStr = str.split("");
        splitStr.reverse();
        let reverseString = splitStr.join("");
        if (str === reverseString) {
            reverseArr.push(reverseString);
        }
    })
    return reverseArr.join(" ");
}
console.log(palinArrStrFn());

//Return median of two sorted arrays of the same size
//Anonymous Function

console.log("Return median of two sorted arrays of the same size using Anonymous Function :")
let arrValList1 = [1, 3, 5, 6, 7];
let arrValList2 = [4, 2, 8, 9, 10];
let arrMergeSortMedianFn = (function () {
    let concatArrValList = arrValList1.concat(arrValList2).sort((a, b) => a - b);
    const conLen = concatArrValList.length;
    return (conLen % 2 === 0) ? (concatArrValList[Math.floor(conLen / 2) - 1] + concatArrValList[Math.ceil(conLen / 2)]) / 2 : concatArrValList[Math.floor(conLen / 2)];
});
console.log(arrMergeSortMedianFn());


//IIFE Function
console.log("Return median of two sorted arrays of the same size using IIFE Function :");
(() => {
    let concatArrValList = arrValList1.concat(arrValList2).sort((a, b) => a - b);
    const conLen = Math.floor(concatArrValList.length / 2);
    console.log((concatArrValList.length % 2 !== 0) ? concatArrValList[conLen] : (concatArrValList[conLen - 1] + concatArrValList[conLen]) / 2);
})();


//Remove Duplicate From an Array
//Anonymous Function

console.log("Remove Duplicate From an Array using  Anonymous Function :");
let arrayListOfDup = [44, 5, 22, 44, 66, 33, 5, 66, 'hari', 'hai', 'hari']
let removeDuplicateFn = (function () {
    return arrayListOfDup.filter((duplicate, index) => arrayListOfDup.indexOf(duplicate) === index);
});
console.log(removeDuplicateFn());

//IIFE Function

console.log("Remove Duplicate From an Array using IIFE Function :");
    (() => {
        let diffArrLis = [];
        for (i = 0; i < arrayListOfDup.length; i++) {
            if (diffArrLis.indexOf(arrayListOfDup[i]) === -1) {
                diffArrLis.push(arrayListOfDup[i]);
            }
        }
        console.log(diffArrLis);
    })();

//Arrow Function

console.log("Remove Duplicate From an Array using Arrow Function :");
let duplicateArrLis = () => {
    return ([...new Set(arrayListOfDup)]);
};
console.log(duplicateArrLis());

//Rotate an array by k times
//Anonymous Function
// Right to Left Rotation

console.log("Rotate an array by k times using Anonymous Function :");
let arrVal = [1, 3, 5, 6, 4];
let kValue = 3;
let kTimesRotateFn = (function () {
    for (i = 0; i < kValue; i++) {
        arrVal.unshift(arrVal.pop());
    }
    return arrVal;
})
console.log(kTimesRotateFn());

//IIFE Function
// Left to Right Rotation

console.log("Rotate an array by k times using IIFE Function :");
    (() => {
        for (i = 0; i < kValue; i++) {
            arrVal.push(arrVal.shift());
        }
        console.log(arrVal);
    })();


