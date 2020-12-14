// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
	// console.log(str, 'original string');
	// return str.split('').reverse().join('');
	//////////////////////////////
	// let revString = '';
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	revString = revString + str[i];
	// }
	// return revString;
	//////////////////////////////
	// let revString = '';
	// for (let i = 0; i <= str.length - 1; i++) {
	// 	revString = str[i] + revString;
	// }
	// return revString;
	//////////////////////////////
	// let revString = '';
	// for (let char of str) {
	// 	revString = char + revString;
	// }
	// return revString;
	//////////////////////////////
	// let revString = '';
	// str.split('').forEach(char => revString = char + revString);
	// return revString;
	//////////////////////////////
	// let arr = [...str];
	// // console.log(arr)
	// let newArr = arr.map((_, i, arr) => {
	// 	// console.log(arr.length - 1 - i);
	// 	return arr[arr.length - 1 - i];
	// });
	// return newArr.join('');
	//////////////////////////////
	// return str
	// 	.split('')
	// 	.reduce((revString, char) => char + revString, '');
	// let reversedString = '';
	// for (character of str) {
	// 	reversedString = character + reversedString;
	// }
	// return reversedString;
	// return str
	// 	.split('')
	// 	.reduce(
	// 		(reversedString, character) =>
	// 			character + reversedString,
	// 		''
	// 	);

	//////////////////////////////
	if (str.length === 1) {
		return str[0];
	} else {
		return reverseString(str.slice(1)) + str[0];
	}
}

// console.log(reverseString('hello'));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
	// const revString = str.split('').reverse().join('');
	// return revString === str;

	///////////////////////
	// let isPali = true;
	// let caseStr = str.toLowerCase();
	// let arr = caseStr.split('');
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] !== arr[arr.length - 1 - i]) {
	// 		isPali = false;
	// 		break;
	// 	}
	// }
	// return isPali;

	///////////////////////
	let isPali = [];
	let caseStr = str.toLowerCase();
	let arr = caseStr.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[arr.length - 1 - i]) {
			isPali.push(true);
		} else {
			isPali.push(false);
		}
	}
	if (isPali.includes(false)) {
		return false;
	} else {
		return true;
	}

	///////////////////////
	// return str.split('').reverse().join('') === str;
}

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('hannah'));
// console.log(isPalindrome('rat'));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
	const revString = int
		.toString()
		.split('')
		.reverse()
		.join('');
	// console.log(Math.sign(int));
	return parseInt(revString) * Math.sign(int);
}

// console.log(reverseInt(521), 'positive');
// console.log(reverseInt(-521), 'negative');

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
	// const strArr = str.toLowerCase().split(' ');
	// for (let i = 0; i < strArr.length; i++) {
	// 	strArr[i] =
	// 		strArr[i].substring(0, 1).toUpperCase() +
	// 		strArr[i].substring(1);
	// }
	// return strArr.join(' ');
	/////////////////////////////////
	// return str
	// 	.toLowerCase()
	// 	.split(' ')
	// 	.map((word) => word[0].toUpperCase() + word.substr(1))
	// 	.join(' ');
	/////////////////////////////
	// return str.replace(/\b[a-z]/gi, function (char) {
	// 	return char.toUpperCase();
	// });
}

// console.log(capitalizeLetters('i love javascripts'));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
	const charMap = {};
	let maxNum = 0;
	let maxChar = '';

	str.split('').forEach(function (char) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});

	for (let char in charMap) {
		// debugger;
		// console.log(char, '< char');
		if (charMap[char] > maxNum) {
			// console.log(char, '< char');
			// console.log(maxChar, '< maxChar');
			maxNum = charMap[char];
			maxChar = char;
		}
	}

	// console.log(charMap);
	return maxChar;
}
// console.log(maxCharacter('aabbeeree'));
// console.log(maxCharacter('aaabbebberee'));

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 15 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i, '< i');
		}
	}

	////////////////////////////

	// for (let i = 1; i <= 100; i++) {
	// 	let printNum = true;
	// 	if (i % 3 === 0) console.log('Fizz');
	// 	if (i % 5 === 0) console.log('Buzz');
	// 	// if divisable by 3 then i%3 is zero,
	// 	// if divisable by 5 then i%5 is zero,
	// 	// if divisable by 3 or 5 then i%3*i%5 is zero then don't print
	// 	printNum = ((i % 3) * i) % 5 !== 0;
	// 	if (printNum) {
	// 		console.log(i);
	// 	}
	// }

	/////////////////////////////
	// for (var i = 1; i <= 100; i++) {
	// 	let output = '';
	// 	if (i % 3 === 0) {
	// 		output += 'Fizz';
	// 	}
	// 	if (i % 5 === 0) {
	// 		output += 'Buzz';
	// 	}
	// 	console.log(output || i);
	// }

	/////////////////////////////
	// for (let i = 1; i <= 100; i++) {
	// 	console.log(
	// 		[
	// 			i % 3 === 0 ? 'Fizz' : '',
	// 			i % 5 === 0 ? 'Buzz' : '',
	// 		].join('') || i
	// 	);
	// }

	/////////////////////////////
	// for (let i = 1; i < 101; i++) {
	// 	let a =
	// 		i % 3
	// 			? i % 5
	// 				? i
	// 				: 'Buzz'
	// 			: i % 5
	// 			? 'Fizz'
	// 			: 'FizzBuzz';
	// 	console.log(a);
	// }

	/////////////////////////////
	for (i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
		else if (i % 3 === 0) console.log('Fizz');
		else if (i % 5 === 0) console.log('Buzz');
		else console.log(i);
	}
}

console.log(fizzBuzz());
