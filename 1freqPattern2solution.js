// ============================
// Quadratic Pseduo Code O(N*2)
// ============================
// Given two arrays write a function to find out if the values in the first array contain that value to the 
// second power in the second array

// Create a function that accepts two arrays
function same(arr1, arr2) {

    // Check if the length of two arrays are equal to each other
    if (arr1.length !== arr2.length) {
        // If not return false
        return false;
    }
    // Loop through the first array
    for (var i = 0; i < arr1.length; i++) {
        // Set the squared value of the current index inside correct index
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // If we find the value we will return index otherwise we will return -1
        if (correctIndex === -1) {
            // If we cannot find the value squared to the second power return false
            return false;
        }
        // Remove the first element from the array we are looping over
        arr2.splice(correctIndex, 1);
    }
    // If everything went ok return true
   return true;
}

console.log(same([1,2,3,4], [1,4,9,16]));