// Given two positive integers write a function to find out if two numbers have the same frequency of digits
// The solution must have the folowing complexities - O(N) Linear

// Create a function that accepts two integers as arguements
function sameFrequency(int1, int2){

    // Convert our numbers to a string
    let number1 = int1.toString();
    let number2 = int2.toString();
    

    // We check if the length of the strings are not equal
    if (number1.length !== number2.length) {
        // If the length is not equal return false
        return false;
    }
    
    // We create an empty object
    const lookup = {};
    
    // We loop through the first string
    for (let i = 0; i < number1.length; i++) {
        // Save the current value we are iterating through to a variable
        let digit = number1[i];
        // We check if we target that value inside our obejct
        if (lookup[[digit]]) {
            // If the condition was true increment by 1
            lookup[digit] += 1;
        } else {
            // Otherwise we just set it equal to 1
            lookup[digit] = 1;
        }
    }

    // We loop through the second string
    for (let i = 0; i < number2.length; i++) {
        // Save the current value we are iterating through to a variable
        let digit = [number2[i]];
        // We check if we target that value inside our obejct
        if (!lookup[digit]) {
            // If we cannot find that value return false
            return false;
        } else {
            // If we could find the value in our object we substract 1 from the object
            lookup[digit] -= 1;
        }
    }

    // If everything went ok we return true
    return true;
    
  }

  console.log(sameFrequency(123, 2312));