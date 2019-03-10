// ======================================
// Anagram Solution O(N) Time Complexity
// ======================================
// Create a function that takes two strings and checks if they are valid anagrams

// Create a function that accepts two strings as argumments


    // Checks if words are the same length. If they are not the same length we will return false because
    // we cannot have a valid anagram is the two strings are not the same lengths
    

    // Creates an empty object
   

    // Loops through first word
    
        // Saves the current value to a variable
      
        // If the letter exsists in our object, increment by 1 otherwise set the keys value equal to 1
      
    // Loops through second word to decrement matching letters
    
        // If we can't find the current letter we are looking at in the second string in our object we will 
        // return false because that means we have a letter in our second string that isnt in the first string
        // so it will not be a valid anagram and we return false
        

            // Otherwise if we can find the letter in the object then we just decrement from our current 
            // character in the object
            

    // If everything went ok we return true
   