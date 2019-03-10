// Create a function using a helper function that checks to see if two strings are anagrams releative to one another
// ============================
// Time Complexity O(N)
// ============================

// Helper Function Anagram Solution #1

// We create a function that accepts two strings

    // We call our helper function on the first string
    
    // we call our helper function on the second string
    

    // We use a built in method of objects to check the length of the first object vs the second object
    
        // If they are not equal to each other in length we return false
  
    
    
    // We loop through the object

        // We check to see if any keys value is not equal to a keys value in the second object
       
            // If we find any keys values that are not equal to one another we will return false
     
    // If everything we ok we return true
 
// Helper Function Anagram Solution #1
// We create a helper function to abstract the logic of building an object with populated frequencies

    // We create an empty object
   

    // We create a for loop and replace anything that isnt a letter by using a regular expression
 
        // We check if the letter is already in our object. If it we add 1 otherwise we set it equal to 1
    
    // We return the object to our anagram function
   


// ====================================
// Time Complexity O(N) Helper Function
// ====================================
// Helper Function Anagram Solution #2
// Another alternative for solving an anagram using a helper function
// Create an empty function that accepts two strings

    // We call our helper function on our first string
    
    // We call our helper function on our second string
  
    // Both string should be indentical since they sorted alphabetically and if they are not equal to each
    //  other we will return false
   
// Helper Function
// We create a helper function to abstract some logic and complexity away from our anagram function

    // We return a value with only letters that will be lowercased, split into an array, sorted alphabetically,
    // and joined back together and returned to anagram function
   


