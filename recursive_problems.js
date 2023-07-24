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