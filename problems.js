// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)
function sameFrequency(int1, int2) {
  let digits1 = int1.toString().split("").map(Number);
  let digits2 = int2.toString().split("").map(Number);
  if (digits1.length != digits2.length) {
    return false;
  }

  let intCount = {};

  for (let i = 0; i < digits1.length; i++) {
    let currentNum = digits1[i];
    if (intCount[currentNum]) {
      intCount[currentNum]++;
    } else {
      intCount[currentNum] = 1;
    }
  }

  let intCount2 = {};

  for (let i = 0; i < digits2.length; i++) {
    let currentNum = digits2[i];
    if (intCount2[currentNum]) {
      intCount2[currentNum]++;
    } else {
      intCount2[currentNum] = 1;
    }
  }

  for (let i = 0; i < digits1.length; i++) {
    if (intCount[digits1[i]] != intCount2[digits1[i]]) {
      return false;
    }
  }
  return true;
}

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1, 2, 3) // false
function areThereDuplicates() {
  let counters = {};
  let args = Array.from(arguments);

  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
    if (counters[args[i]]) {
      return args, true;
    } else {
      counters[args[i]] = 1;
    }
  }
  return false;
}

function findLongestSubstring(str) {
  let tempCount = 0;
  let maxLen = 0;
  let freqCount = {};
  let right = 0;
  let left = 0;

  if (str.length === 0) {
    return 0;
  }

  while (right < str.length) {
    let rLetter = str[right];
    let lLetter = str[left];

    if (!freqCount[rLetter] || freqCount[rLetter] === 0) {
      freqCount[rLetter] = 1;
      tempCount++;
      right++;
      maxLen = Math.max(tempCount, maxLen);
      console.log(
        `tempCount: ${tempCount}. left is ${left}. right is ${right}`
      );
    } else if (freqCount[rLetter] || freqCount[rLetter] > 0) {
      freqCount[lLetter] -= 1;
      left++;
      tempCount -= 1;
      console.log(
        `Current Temp Count: ${tempCount}. Left is at index ${left}. Right is at index ${right}. Current max length: ${maxLen}`
      );
    }
  }

  console.log(`current tempCount: ${tempCount}.`);
  return Math.max(tempCount, maxLen);
}

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('abcabcdabcde') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

//recursive basics
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1)
}

function power(base, exp){

    if(exp === 0){
        return 1;
    }
        return base * power(base, exp-1);
}


function factorial(num){

    if (num === 1) return 1;
    return num * factorial(num-1);
}

function reverse(str){
  let newArr = []
      // if(str.length === 1){
      //     newArr.push(str[0])
      // }
      if(str.length === 1){
          return str[0];
      }
      else{
          newArr.push(str[str.length-1])
      }
      newArr = newArr.concat(reverse(str.slice(0,-1))) 
      return newArr.join('');
      
  }
  
  function reverseSolution(str){
    if(str.length <= 1) return str;
    return reverseSolution(str.slice(1)) + str[0];
  }