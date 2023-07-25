// // function capitalizeFirst(arr){

// //     let newArr = [];
    
// //     if(arr.length === 0){
// //         return;
// //     }
    
// //     if(arr.length === 1){
// //         let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
// //         newArr.push(capitalized);
// //     }
// //     else { 
// //         newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
// //     }
// //     return newArr;
// // }

// // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// //     // if(arr[0].charAt(0) !== arr[0].charAt(0)){
// //     //     let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
// //     //     newArr.push(capitalized);
// //     // }

// function capitalizeWords(arr){
//     if(arr.length === 0){
//         return [];
//     }

//     let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

//     return [capitalized].concat(capitalizeWords(arr.slice(1)));
// }

// capitalizeWords(['john', 'sam', 'henry'])


function capitalizeFirst (arr) {
    if(arr.length === 0){
        return [];
    }
    
    let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  return [capitalized].concat(capitalizeFirst(arr.slice(1)));      
  }

// capitalizeWords(['john', 'henry', 'maurice'])

function capitalizeWords (args) {

if(args.length <= 0){
    return [];
}
let capitalized = args[0].toUpperCase();

return [capitalized].concat(capitalizeWords(args.slice(1)))

}

function collectStrings(obj){
    
    let arr = []
        
        for(let prop in obj){
            if(typeof obj[prop] === 'string'){
                arr.push(obj[prop])
            }
            else if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) ){
                arr = arr.concat(collectStrings(obj[prop]))
            }
        
        }
        return arr;
    }
    
    var obj1 = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    
    // collectStrings(obj1) // ["foo", "bar", "baz"])

    //Building Merge Sort
    function merge(arr1, arr2){
        let sorted = [];
        let i = 0;
        let j = 0;
    
        while(i < arr1.length && j < arr2.length){
            if(arr1[i] < arr2[j]){
                sorted.push(arr1[i])
                i++;
            }
            else if(arr1[i] > arr2[j]){
                sorted.push(arr2[j])
                j++;
            }
            else if(arr1[i] === arr2[j]){
                sorted.push(arr1[i], arr1[j]);
                i++;
                j++;
            }
        }
    
        while(i< arr1.length){
            sorted.push(arr1[i])
            i++;
        }
            while(j< arr2.length){
            sorted.push(arr2[j])
            j++;
        }
        
        return sorted;
        
    }
    
    function mergeSort(arr){
        if(arr.length <= 1){
            return arr;
        }
    
        let mid = Math.floor(arr.length/2)
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
        
    }
    
    // mergeSort([1, 10, 23, 43, 22, 3])
    
    
    // merge(sort1, sort2);
        //==> [1, 2, 10, 14, 50, 99, 100]
    
    