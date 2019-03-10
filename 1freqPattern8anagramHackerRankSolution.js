// Create a function called anagram that expects a string
function anagram(str) {
    // Split our string into an array
    let splitString = str.split("");
    // Let middle target approximatly the middle value in our array
    let middle  = str.length / 2;
    // Let first be every character in our array until until the middle and not including the middle value
    let first = splitString.slice(0, middle);
    // Let second be every character in our array starting at middle and go until the end of the array
    let second = splitString.slice(middle);
    // Create an empty count
    let count = 0;

    // Checks if the length of the string even or odd
    if (str.length % 2 !== 0) {
        // If it's an odd length the string will be negative 1
        return -1;
    }
    // Create an empty object
    let obj = {};

    // // Loops through the first word to check if each character is in the object
    for (let  i = 0; i < first.length; i++) {
        let letter = first[i];
        // If it is we increment it plus 1
        if (obj[letter]) {
            obj[letter] += 1;
        // Otherwise we set it equal to 1
        } else {
            obj[letter] = 1;
        }
    }
    console.log(obj)

    // Loop through the second letter
    for (let  i = 0; i < second.length; i++) {
        let letter = second[i];
        // If not the key we are looking for inside the object do nothing
        if (!obj[letter]) {}
        // If we can find the key in our object we will deduct 1 from the keys value
        else {
            obj[letter] -= 1;
        }
    }
    // Loop through the object and accumalate the characters that could not be subtracted and store it in count
    for (let key in obj) {
        count += obj[key];
    }
    // Return the count of the difference in characters
    return count;
}
    
console.log(anagram('fxysvffxyz'))
