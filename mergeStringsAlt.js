// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
function mergeStringsAlt(word1, word2){
    let combined = "";
    let biggerLength = word1.length > word2.length ? word1 : word2;
            for(let i = 0; i < biggerLength.length; i++){
                if(word1[i]) {
                    combined += word1[i]
                }
                if(word2[i]){
                      combined += word2[i]
                }
                 
            }
              
           return combined;
    }
    
    mergeStringsAlt("2","23435")