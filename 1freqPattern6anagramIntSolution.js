// Given two positive integers write a function to find out if two numbers have the same frequency of digits
// The solution must have the folowing complexities - Time O(N)
function sameFrequency(int1, int2){

    // Convert numbers to strings
    let number1 = int1.toString();
    let number2 = int2.toString();
    

    // Check if the length of our strings that are integers are equal to one another
    if (int1.length !== int2.length) {
        // If they are not equal return false
        return false;
    }
    
    // Create an empty object 
    const lookup = {};
    
    // Create a for loop that loops through the first number
    for (let i = 0; i < number1.length; i++) {
        // Save that current number value in a varaible
        let digit = number1[i];
        // We check is we can find that value inside our object
        if (lookup[[digit]]) {
            // If we do find it we will increment it by 1
            lookup[digit] += 1;
            // Otherwise set it equal to 1 if it isnt already inside our object
        } else {
            lookup[digit] = 1;
        }
    }

    // Loop through our second string
    for (let i = 0; i < number2.length; i++) {
        // Save that current number value in a varaible
        let digit = [number2[i]];
        // We check is we can find that value inside our object
        if (!lookup[digit]) {
            // If we cannot find that value in our current object we will just return false
            return false;
        } else {
            // Otherwise if we can find the letter
            lookup[digit] -= 1;
        }
    }

    return true;
    
  }

  console.log(sameFrequency(123, 231));