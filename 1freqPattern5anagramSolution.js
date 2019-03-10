// ======================================
// Anagram Solution O(N) Time Complexity
// ======================================
// Create a function that takes two strings and checks if they are valid anagrams

// Create a function that accepts two strings as argumments
function validAnagram(first, second) {

    // Checks if words are the same length
    if (first.length !== second.length) {
        return false;
    }

    // Creates an empty object
    const lookup = {};

    // Loops through first word
    for (let i = 0; i < first.length; i++) {
        // Saves the current value to a variable
        let letter = first[i];
        // If the letter exsists, increment by 1 otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // Loops through second word to decrement matching letters
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // If we can't find the letter or the letter is 0 than our input is not an anagram and we return false
        if (!lookup[letter]) {
            return false;
        } else {
            // Otherwise we just decrement from our current character
            lookup[letter] -= 1;
        }
       
    }
    // If everything went ok we return true
    return true;
}

console.log(validAnagram('racecar', 'carfact'));

