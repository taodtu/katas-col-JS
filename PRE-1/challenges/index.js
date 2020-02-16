// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function modulo (a, b) {
    // return the remainder of the division a / b
    return a%b;
}

function squareRoot (n) {
    // return the square root of n,TEST
    return Math.sqrt(n);
}

function raiseToPower (m, n) {
    // return the result of raising m to the nth power
    return m**n;
}

function formatMoney (amount) {
    /**
     * return a the amount formatted into pounds sterling
     * Amounts should be a string with the £ symbol in front
     * formatMoney(2.33) => "£2.33"
     * Amounts should be rounded to 2 decimal numbers
     * formatMoney(2.338) => "£2.34"
     * Amounts should always have 2 decimal numbers even if they are zeroes
     * formatMoney(1) => "£1.00"
     */
    money = Number.parseFloat(amount).toFixed(2);
    return '£'+money;
}

function calculateCircleArea (r) {
    // return the area of a circle with radius r
    // round result to 3 decimal numbers
    area= Math.PI *r*r
    return Number(area.toFixed(3));
}

function calculateFullTurns (degrees) {
    // return the number of full turns you can make with the provided degrees
    // 1 full turn === 360 degrees
    return Math.floor(degrees/360);
}

function getLength (str) {
    // return the length of the passed string
    return str.length;
}


function putNamesTogether (firstName, lastName) {
    // return the first and last names with a space between them
    return firstName+' '+lastName;
}

function capitaliseString (str) {
    // return the passed string with its first letter capitalised
    return str.charAt(0).toUpperCase() + str.slice(1);

}

function dontShoutSentence (SENTENCE) {
    // return the passed sentence (IN ALL CAPS) in lower case
    // keep the first character capitalised
    return SENTENCE.charAt(0) + SENTENCE.slice(1).toLowerCase();
}

function getMiddle (str) {
    // return the middle (or middle two) character(s) of the passed string
    if (str.length%2 === 0) {
        return str.charAt(str.length/2-1)+str.charAt(str.length/2)
    }
    else return str.charAt(Math.floor(str.length%2+1));
}

function getLastWord (words) {
    // return the last word of a sentence
    // you can assume words doesn't have a period at the end
    return words.split(' ')[words.split(' ').length-1];
}

function hyphenateWords (words) {
    // return the passed string with the spaces replaced by hyphens ("-")
    arr=words.split('');
    for (let i=0; i<words.length;i++){
        if (arr[i]===' ') {
            arr[i] = '-'
        }
    }
    return arr.join('');
}

function convertToCamelCase (words) {
    // convert the passed string of space-separated words to camel case
    // camel case looks like this --> camelCaseLooksLikeThis
    newWords=words.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return newWords.charAt(0).toLowerCase() + newWords.slice(1);

}

function areValuesEqual (left, right) {
    // return true if the passed arguments are strictly equal
    return left === right
}

function areValuesNotEqual (left, right) {
    // return true if the passed arguments are NOT equal
    return left !== right
}

function isFromThe60s (year) {
    // return true if the year is in the 1960's
    return year>1959 && year<1970;
}

function isEvenLength (string) {
    // return true if string has an even length
    return string.length%2 === 0;
}

function areStringsEqualCaseInsensitive (left, right) {
    // return true if the passed strings are equal ignoring case
    return left.toLowerCase() === right.toLowerCase();
}


function getEvenNumbers (nums) {
    //return an array of only the even numbers in the given array
    return nums.filter(num=> num%2 ===0);
}

function getItemsLongerThan (array, len) {
    //return an array of only the items longer than the given length
    return array.filter(item=>item.length > len);
}

function getLastItems (array, n) {
    // return an array with the 'n' last items of 'array'
    return array.slice(array.length-n)
}

function getSandwichFilling (sandwich) {
    // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
    return sandwich.slice(1, -1);
}

function removeItem (array, n) {
    // return a new array without the item on position 'n', effectively removing it from the array
    return array.filter(item=>item!==array[n]);
}

function mergeArrays (arr1, arr2) {
    // return a new array with all the elements of arr1 followed by all the elements of arr2
    return arr1.concat(arr2);
}

function flattenArrayByOne (arrayOfArrays) {
    // given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
    // for example:
    // [[1],[2],[[3,4]]] => [1,2,[3,4]]
    return arrayOfArrays.reduce((acu, cur)=>acu.concat(cur),[]);
}

function isItemOmnipresent (arrayOfArrays, item) {
    // return true if the passed item is present in all the arrays inside arrayOfArrays
    return arrayOfArrays.every(array=>array.includes(item));
}

function isOver40 (user) {
    /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */
    return user.age>40;
}

function getUserAge (user) {
    // return the user's age as a number.
    // you can assume that the passed user will always have a 'yearOfBirth' property.
    date = new Date
    return date.getFullYear()-user.yearOfBirth;
}

function createProduct () {
    /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */
    obj = {type:'toy',
           price:20,
          }
    return obj
}

function addPriceToProduct (product, price) {
    /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
    product.price=price;
    return product;
}

function createNorthcoder (name, yearOfBirth) {
    // return an object with:
    // a name property set to the value of the name parameter
    // an age property set to whatever the age of the northcoder would be in the year 2019
    // a language property set to 'JavaScript'
    return obj = {
        name,
        age:2019-yearOfBirth,
        language:'JavaScript',
    };
}


function createUserString (userObj) {
    // should take as an argument an object with the format from createNorthcoder
    // returns a string with the user's details in the form:
    // 'name: Mitch, age: 27, language: Javascript';
    // Note - this is a good use case of string template literals.
    return `'name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}';`
}

function getAlbumProperties (obj) {
    // should take an object with information about an album
    // should return an array containing all of the object's keys
    // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
    return Object.keys(obj);
}

function deleteManyPasswords (users) {
    /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */
    return users.map(user=> {
        delete user.password;
        return user;
    });

}

function countTheObjects (arr) {
    /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
    return arr.filter(data=> data && typeof(data) == 'object' && !(data instanceof Array)).length;
}

module.exports = {
    modulo, squareRoot, raiseToPower, formatMoney, calculateCircleArea, calculateFullTurns, areValuesEqual, areValuesNotEqual, isFromThe60s, isEvenLength, areStringsEqualCaseInsensitive, getLength, putNamesTogether, capitaliseString, dontShoutSentence, getMiddle, getLastWord, hyphenateWords, convertToCamelCase, getEvenNumbers, getItemsLongerThan, getLastItems, getSandwichFilling, removeItem, mergeArrays, flattenArrayByOne, isItemOmnipresent, isOver40, getUserAge, createProduct, addPriceToProduct, createNorthcoder, createUserString, getAlbumProperties, deleteManyPasswords, countTheObjects
}
