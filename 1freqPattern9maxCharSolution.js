// ==============================
// Max Char O(N) Time Complexity
// ==============================

// Given a string, return the character that is most commonly used in the string.
function charCount(str) {

    // Create an empty object
    const obj = {};
    // Create a temp variable
    let temp = 0;
    // Create a current letter variable
    let currentLetter = '';

    // Loop of the string
    for (let i = 0; i < str.length; i++) {
        // Save the first character of the first string to a variable
        let letter = str[i].toLowerCase();
        // Check if the current value is inside the object
        if (obj[letter]) {
            // If it is add 1
            obj[letter] += 1;
        } else {
            // Else set it equal to 1
            obj[letter] = 1;
        }
    }

    // Loop through the object
    for (let key in obj) {
        // Check if the current value we are looping over is greater than out temp value
        if (obj[key] > temp) {
            // If it is then reassign the the temp variable to the current value
            temp = obj[key]
            // And set the current letter equal to the key we are looping over
            currentLetter = key;
        }
    }
    // If everything went ok we return the current letter
    return currentLetter;

}

console.log(charCount("hello there how are you"));