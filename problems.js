
// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)
function sameFrequency(int1, int2){
    let digits1 = int1.toString().split('').map(Number);
    let digits2 = int2.toString().split('').map(Number);
    if(digits1.length != digits2.length){
        return false;
    }
    
    let intCount = {}
    
    for(let i=0; i < digits1.length; i++){
        let currentNum = digits1[i]
        if(intCount[currentNum]){
            intCount[currentNum]++;
        }
        else{
            intCount[currentNum] = 1;
        }
    }
    
    let intCount2 = {}
    
    for(let i=0; i < digits2.length; i++){
        let currentNum = digits2[i]
        if(intCount2[currentNum]){
            intCount2[currentNum]++;
        }
        else{
            intCount2[currentNum] = 1;
        }
    }
    
    for(let i=0; i<digits1.length; i++){
        if(intCount[digits1[i]] != intCount2[digits1[i]]){
            return false
        }
    }
    return true
}

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false



