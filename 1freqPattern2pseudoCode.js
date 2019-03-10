// ============================
// Quadratic Pseduo Code O(N*2)
// ============================
// Given two arrays write a function to find out if the values in the first array contain that value to the 
// second power in the second array

// Create a function that accepts two arguments
function same(arr1, arr2) {

    // Check if the length of the two arrays are equal to each other

        // If they are not equal return false
    

    // Loop through the first array
    
        // Create a variable that will hold the value of the current value we are looping through and attempt
        // to find the index of that value in the second array
       
        // If corrent index equals -1 than that means we were unable to find that value in the array
     
            // We return false because we were unable to find that value in our array
    
        // Otherwise we remove that value from the array starting at the current index up until but not including
        // the first index

    // We return true if we are able to loop throughout the whole array otherwise because we are in a function
    // we will return undefined

}

console.log(same([1,2,3,4], [1,4,9,16]));