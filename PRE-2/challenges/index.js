function getEvenNums(nums) {
  /*
    This function takes an array of integers and returns an array containing only even integers
    */
  return nums.filter(num=>num%2 ===0);
}

function invertBools(bools) {
  /*
      This function takes an array of booleans and should return an array of the opposite booleans.
      E.g. [true, true, false] => [false, false, true]
    */
  return bools.map(bool=>!bool);

}

function findFirstAstronaut(people) {
  /*
    This function takes an array of people objects and returns the first found astronaut object from the array.

    */
    if (people.find(person=>person.isAstronaut)==undefined) {
    return null;
  }
  return people.find(person=>person.isAstronaut);
}

function countPeopleInValencia(people) {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Sandra', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]

    The function should return the count of people who live in the city of Valencia
    */
  return people.filter(person=>person.lives.city==='Valencia').length;
}

function getPugNames(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pugs.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher'},
      {name: 'Max', breed: 'Pug'},
      {name: 'Poppy', breed: 'Pug'}
    ]
    will return ['Max', 'Poppy']
    */
  return dogs.filter(dog=>dog.breed === 'Pug').reduce((acu,cur)=>acu.concat(cur.name),[]);
}

function getWordLengths(str) {
  /*
  This function takes a string and returns an array of the lengths of each word in the string.
  E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
  return str!==''? str.split(' ').reduce((arr,word)=>arr.concat(word.length),[]):[];
}

function findPalindromes(words) {
  /*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'] => ['racecar', 'pineenip']
  */
  return words.filter(word=>word === [...word].reverse().join(''));
}

function replaceLettersWithDashes(str) {
  /* This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('-').
    For example 'I like Alan' should return '- ---- ----', and 'Easy as 1, 2, 3' should return '---- -- 1, 2, 3'.
    */
    return str.replace(/[A-z]/g,'-');

}

function validMobileNumber(num) {

  /*
  This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
  A valid mobile number may begin with '07' followed by 9 more digits.
  It may also begin with '+447' followed by 9 more digits.
  It may also begin with '00447' followed by 9 more digits.
  Anything else is invalid.
  */
  return /^((\+447)|(00447)|(07))\d{9}$/.test(num)
  // /^[(\+447)|(00447)|(07)]\d{9}$/.test(num) why this is not working
}

function sumDigitsFromString(str) {
  /*
  This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
  E.g. 'foo5bar6cat1' => 12
  'foo99cat' => 18
  Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
  return str.split(/[A-z]+/g).reduce((acu,cur)=>acu+Number(cur),0);
}

function getSmiths(arr) {
  /*
  This function takes an array of full names and returns an array containing only the people whose last name is Smith.
  E.g. ['Charlotte Jones', 'Rebecca Smith', 'Harry Smith', 'John Smithy', 'Smith Jones'] => ['Rebecca Smith', 'Harry Smith']
  */
  return arr.filter(name=>/(Smith)$/.test(name));
}

function getFactorials(nums) {
  /*
  This function takes an array of positive integers and returns an array of the factorials of these numbers.
  E.g. [4, 3, 2] => [24, 6, 2]

  The factorial of a number is the product of that number and all the integers below it.
  E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
  const factorialize=(num) => {
    if (num < 0)
        return -1;
    else if (num == 0)
      return 1;
    else {
      return (num * factorialize(num - 1));
    }
  }
  return nums.map(num=>factorialize(num));
}

function largestNumber(num) {
  /*
  This function takes a number and returns the largest number that can be made with the same digits.
  E.g. if num is 23, the function should return 32.
  E.g. if num is 9, the function should return 9.
  E.g. if num is 581 the function should return 851.
  */
  return Number(String(num).split('').sort().reverse().join(''));
}

function generateMatrix(n) {

  /*
  This function takes a number, n, and returns an n*n nested array populated with the value null.
  E.g. if n is 3, we want:
  [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  */
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(null);
    }
  }
  return matrix;

}

function findWrongWayAnimal(field) {

  /*
  This array takes an array of animals in the format:
  ['sheep', 'sheep', 'sheep', 'sheep', 'peehs', 'sheep']

  The animals will all be the 'right way round' apart from 1 animal!
  Your function should return its index position. E.g. in this example, 4.
  NB The animals will not always be sheep but it will always be a field of the same kind of animal.
  */
  if (field.length<3){
    return 0
  }
  let newArr=[...field].sort(), wrongAnimal,rightAnimal=newArr[Math.floor(field.length/2)];
  newArr[0]!==rightAnimal? wrongAnimal=newArr[0]:wrongAnimal=newArr[newArr.length-1];
  return field.indexOf(wrongAnimal);
  /*
  another method
  var occurrences = field.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
    }, {});
  return field.indexOf(Object.keys(occurrences).find(key => occurrences[key] === 1))
  */
}

function getDNAPairs(dna) {
  /*
  This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
  E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
  If any nonsensical letters are passed as DNA they should be ignored.
  E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
  const pairs = {
    G: 'GC',
    C: 'CG',
    A: 'AT',
    T: 'TA'
  };
  return dna.toUpperCase().split(/[^GATC]+/).join('').split('').map(base=>pairs[base]);
  // dna.split('').toUpperCase().filter(base=>'GATC'.includes(base)).map(base=>pairs[base]);
}

function countHashtagsAndMentions(str) {
  /* This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

     The function should return an object describing the number of hashtags and mentions found:
     { hashtags: 2, mentions: 1 }
     */
     return str.split('')
     .filter(char=>'@#'.includes(char))
     .map(char=>char==='#'? 'hashtags':'mentions')
     .reduce((acu,char)=>{
       if (char in acu) {
         acu[char]++;
       }
       return acu;
     },{ hashtags: 0, mentions: 0 })
     /*what if there is email or sth not really means mentions or hashtags in the string?
       maybe should first match /^(#|@){1}\w+$/, then do the rest....
       var paragraph = 'So excited to start at @northcoders on Monday! #learntocode #codingbootcamp, t@gmail.com, ty#dd';
       var regex = /^[#@]\w+/g;
     var found = paragraph.split(' ').map(x=>x.match(regex)).flat().filter(x=>x);

     console.log(found);
       */
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNums,
  invertBools,
  findFirstAstronaut,
  countPeopleInValencia,
  getPugNames,
  getWordLengths,
  findPalindromes,
  replaceLettersWithDashes,
  validMobileNumber,
  sumDigitsFromString,
  getSmiths,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayAnimal,
  getDNAPairs,
  countHashtagsAndMentions,
};
