//Method 1
// 1. Use split() to inbuilt function in JavaScript to split string into array of characters i.e. [ ‘H’, ‘e’, ‘l’, ‘l’, ‘o’ ]
// 2. Then reverse() function in JavaScript to reversal the array of characters i.e. [ ‘o’, ‘l’, ‘l’, ‘e’, ‘H’ ]
// 3. And use join() function in JavaScript to join the elements of an array into a string.

 function reverseString(str) {
    return str.split('').reverse().join('');   
}
reverseString("hello");

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Method 2
// 1. Use spread operator function to convert string into array of characters i.e. [ ‘H’, ‘e’, ‘l’, ‘l’, ‘o’ ]
// 2. Use reverse() function in JavaScript to reversal the array of characters i.e. [ ‘o’, ‘l’, ‘l’, ‘e’, ‘H’ ]
// 3. Use join() function in JavaScript to join the elements of an array into a string.


// const reverseString = str => [...str].reverse().join('');
// console.log(reverseString('Hello'));


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//Method 3
// function reverseString(str) {
  
//     // Create empty string to store reverse elements
//     let newString = "";

//     // The starting point of the loop will be (str.length - 1) which corresponds to the last character of the string, "o". 
//     // As long as i is greater than or equals zero, the loop will go on. 
//     // We are decrementing i after each iteration.
    
//     for(let i = str.length - 1; i >= 0; i--) {
//         newString +=str[i];
//     }
      
//     // Return reverse string
//     return newString;
// }
  
// reverseString("Hello");


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// Method 4 
// 1. Check the input string that if given string is empty or just have one character or it is not of string type then it return “Not a string”.
// 2. If false create an array where we can store the result. newArray[] is the new array.
// 3. Loop through the array from the end to the beginning and push each and every item in the array newArray[].
// 4. Use join() prebuilt function in JavaScript to join the elements of an array into a string.

// function reverseString(str) {
  
//     // Check input
//     if(!str || str.length < 2 || 
//             typeof str!== 'string') {
//         return 'Not a string'; 
//     }
      
//     // Take empty array newArray
//     const newArray = [];
//     const length = str.length - 1;
      
//     // Looping from the end
//     for(let i = length; i >= 0; i--) {
//         newArray.push(str[i]);
//     }
      
//     // Joining the array elements
//     return newArray.join('');
// }
  
// reverseString("Hello");
