// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one
//   False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var str1 = "apple";
var str2 = "orange";
// Test 1
console.log("Are str1 and str2 equal? I predict False.");
console.log(str1 === str2);
// Test 2
console.log("Are str1 and str2 not equal? I predict True.");
console.log(str1 !== str2);
// //////
var testString = "Hello World";
// Test 3
console.log("Is 'testString' in lowercase equal to 'hello world'? I predict True.");
console.log(testString.toLowerCase() === 'hello world');
/////////
var numA = 10;
var numB = 20;
// Test 4
console.log("Is numA less than numB? I predict True.");
console.log(numA < numB);
// Test 5
console.log("Is numA greater than or equal to numB? I predict False.");
console.log(numA >= numB);
// Test 6
console.log("Is numA equal to numB? I predict False.");
console.log(numA === numB);
// Test 7
console.log("Is numA not equal to numB? I predict True.");
console.log(numA !== numB);
///////
var boolA = true;
var boolB = false;
// Test 8
console.log("Is boolA true and boolB true? I predict False.");
console.log(boolA && boolB);
// Test 9
console.log("Is boolA true or boolB true? I predict True.");
console.log(boolA || boolB);
/////
var myArray = [1, 2, 3, 4, 5];
// Test 10
console.log("Is 3 in myArray? I predict True.");
console.log(myArray.includes(3));
//////
// Test 11
console.log("Is 6 not in myArray? I predict True.");
console.log(!myArray.includes(6));
