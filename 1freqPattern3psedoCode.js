// ===========================================
// Refactored Code O(N) Linear Time Complexity
// ===========================================
// Given two arrays write a function to find out if the values in the first array contain that value to the 
// second power in the second array
// Must be solved with an O(N) Time Complexity or Better

// Create a function that accepts two arrays


    // We check to see if the length of the arrays are equal to one another
   

    // Create an empty object to hold the values in the first array
   
    // Create a second empty object to hold the values in the second array
 

    // We loop through the values in the first array
   
        // If we can find it the value inside our object we will increment it by 1 otherwise if the value we
        // are looking for is not inside the object we will evaluate to false, set it equal to 0, then increment by 1
        
    // We loop through the values in the second array
    
        // If we can find it the value inside our object we will increment it by 1 otherwise if the value we
        // are looking for is not inside the object we will evaluate to false, set it equal to 0, then increment by 1
        
    // At this point we can log the values of our object to see what we are working with before moving on 
    // to the next step. But make sure to get rid of these console logs in an interview setting. We should 
    // have a key value pair. The key should be each value in our array as we loop through it and the key
    // should be the number of times each value occured as we looped through it
    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)

    // Finally we loop through the keys inside our first object
    
        // As we loop through the first object, if the key to the second power cannot be found in our second 
        // object we will return false
        
        // If the keys value isn't equal to our first object we will return false
        

    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)
    // If everything went ok return true
    