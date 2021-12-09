/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/
maxOfTwoNumbers = (num1, num2) => {
  // ADD YOUR CODE HERE
  if (num1 >= num2) {
	  return num1;
  }
  else {
	  return num2;
  }
};

//sample usage
//let num3 = maxOfTwoNumbers(-5, 6);
//console.log(num3)



// maxOfThree();
/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
  // ADD YOUR CODE HERE
  //first, is num1 bigger than num2, then num2 can't be max
  if (num1 >= num2) {
	  // check if num1 or num3 is greater, if num1 is then return num1 else return num3
	  if(num1 >= num3) {
		  return num1;
	  } else {
		  return num3;
	  }
  }
  //if num1 isn't bigger than num2, then num1 can't be max
  else {
	  // check if num2 or num3 is greater, if num2 is then return num2 else return num3
	  if (num2 >= num3) {
		  return num2;
	  } else {
		  return num3;
	  }
	  
  }
};
// sample usage
// let num4 = maxOfThree(20, 100, 500);
// console.log(num4)

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (inChar) => {
  // ADD YOUR CODE HERE
  // change the case to lowercase for whatever comes in so that we only need to compare to the lowercase vowels
  inChar = inChar.toLowerCase();
  
  
  // this switch statement returns true for 'a', 'e', 'i', 'o', and 'u' and false otherwise.
  switch (inChar) {
	case 'a':
		//console.log('Is true because is a');
		return true;
		break;
	case 'e': 
		//console.log('Is true because is e');
		return true;
		break;
	case 'i':
		//console.log('Is true because is i');
		return true;
		break;
	case 'o':
		//console.log('Is true because is o');
		return true;
		break;
	case 'u':
		//console.log('Is true because is u');
		return true;
		break;
	case 'y':
		//console.log('Not counting y as a vowel');
		return false;
		break;
	default:
		return false;
  }
};
// sample usage
// let testVar = isCharacterAVowel('E');
// console.log(testVar)


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (numArr) => {
  // ADD YOUR CODE HERE
  let sum = 0;
  for (let i=0; i<numArr.length; i++) {
	  sum += numArr[i];
  }
  return sum;
};
// sample usage
// let ans1 = sumArray([1, 2, 3]);
// console.log(ans1);

// This is the multiplyArray function
multiplyArray = (numArr) => {
  let prod = 1;
  for (let i=0; i<numArr.length; i++) {
	  prod *= numArr[i];
  }
  return prod;
}
// sample usage
// let ans2 = multiplyArray([1, 2, 3]);
// console.log(ans2);

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
//<p id="demo1"></p>
//<script>
function argLength() {
	let num = arguments.length;
    return num;
}
//document.getElementById("demo1").innerHTML = argLength('hi', 3, [1, 2, 3]);
//</script>

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (inString) => {
	let revString = "";
	for (let i = inString.length-1; i>=0; i--){
		revString += inString[i];
	}
  return revString;
};
//Sample usage
//console.log(reverseString('This is a longer string that still works'));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (stringArr) => {
  // ADD YOUR CODE HERE
  longestWord = '';

  // for each word in the string, see if the length is longer than the current longest
  for (let i = 0; i < stringArr.length; i++) {
	  // if it is, then that word is the new longest
	  if (longestWord.length < stringArr[i].length) {	
		  longestWord = stringArr[i];
	  }
	}
	return longestWord;
};
// sample usage
// let bigWord = findLongestWord(["super", "cali", "fragil", "supercalifragilisticexpealidocious", "istic", "expe", "alidocious"]);
// console.log(bigWord);

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (num, wordArr) => {
	// for each string in the array, check if the length is long
  // ADD YOUR CODE HERE
	const longWords = [];
  for (let i = 0; i < wordArr.length; i++) {
	if (wordArr[i].length > num) {
		longWords.push(wordArr[i]);
	}
  }
  return longWords;
};
//let bigWords = filterLongWords(14, ['small', 'bigger', 'big enough', 'hi', 'super biggester']);
//console.log(bigWords);

// BONUS 1
// Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
String.prototype.reverseString = function (inString)  {
	console.log('in reverseString');
	let revString = "";
	for (let i = inString.length-1; i>=0; i--){
		revString += inString[i];
	}
  return revString;
};
testString = 'Per Scholas';
console.log(testString.reverseString);
let testString2 = testString.testing;
console.log(testString2);
console.log(testString.__proto__)

// BONUS 2
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
stringToObject = (inString) => {
	const newObj = {};

	// for each character, see if it exists as a key, if not add it, if so increment the value
	for (let i = 0; i < inString.length; i++) {
		keyCheck = inString[i];
//		console.log(keyCheck, ' is the key');
//		console.log(newObj[keyCheck], ' is the object');
		if (newObj[keyCheck]) {
			newObj[keyCheck]++;
//			console.log(newObj[keyCheck]);
		} else {
//			console.log('in if and adding key');
			newObj[keyCheck] = 1;
		}	

	}
//	console.log(newObj);
	return newObj;
}

// const stringObj = stringToObject('This is a sample input string');
// console.log(stringObj);