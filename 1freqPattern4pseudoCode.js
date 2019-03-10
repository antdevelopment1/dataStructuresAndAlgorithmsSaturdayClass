// Given two positive integers write a function to find out if two numbers have the same frequency of digits
// The solution must have the folowing complexities - O(N) Linear

// Create a function that accepts two integers as arguements


    // Convert both numbers to strings because we cannot check the length of a number directly. It is easier
    // to convert it into a string

    
    // We check if the length of the strings are not equal
   
        // If they are not equal we will return false because they do have the same frequency
        

    // We create an empty object
    
    
    // We loop through the first string
    
        // To eliminate potential confusion we save the current index we are interating over in the array
        // to a variable
        
        // We check if we target that value inside our obejct
        
            // If the condition was true and we were able to find that value in our object then we increment by 1
            
            // Otherwise we just set it equal to 1
          
    // We log the value of our object to see what we have inside it at this point. Get rid of this line of
    // during an interview setting. This for troubleshooting purposes
    

    // We loop through the second string
 
        // To eliminate potential confusion we save the current index we are interating over in the array
        // to a variable
       
        // We check if we target that value inside our obejct and if we cannot find that value we just return false
       
            // If we could find the value in our object we substract 1 from the object
            

    // We log the value of our object after the second loop has ran. Here if we were able to find all the characters
    // in our object by subtracting the value we should be left with an object containing 0 for each keys value
    

    // If everything went ok we return true
    