// Quadratic Solution O(N*2)
// Given two arrays write a function to find out if two arrays have the same frequency of digits

// Create a function that accepts two arrays
function same(arr1, arr2) {

     // Check if the length of two arrays are equal to each other
    if (arr1.length !== arr2.length) {
        // If not return false
        return false;
    }
    // Loop through the first array
    for (var i = 0; i < arr1.length; i++) {
        // Set the value of the current index inside correct index
        let correctIndex = arr2.indexOf(arr1[i]);
        
        // If we find the value we will return index otherwise we will return -1
        if (correctIndex === -1) {
            // If we cannot find the value in the array return false
            return false;
        }
        // Remove the first element from the array we are looping over
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    // If everything went ok return true
   return true;
}

console.log(same([1,2,2,4], [4,3,2,1]));

// function same(arr1, arr2) {
//     // We check to see if the length of the arrays are equal to one another
//     if (arr1.length !== arr2.length) {
//         // If they are not return false
//         return false;
//     }

//     let frequencies = {};
//     arr1.forEach(function (val){
//         frequencies[val] = (frequencies[val] || 0) + 1;
//     });
//     arr2.forEach(function (val){
//         // console.log(Object.keys(frequencies))
//         // if ((val in Object.keys(frequencies))){
//         //     console.log(`The item in array2: ${val}`);
//         //     frequencies[val] -= 1;
//         // }
//         // console.log(frequencies);
//     });
// }
// console.log(same([1,2,3,4],[1,2,3,4]));

