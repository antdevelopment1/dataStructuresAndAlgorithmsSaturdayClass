// Create a function using a helper function that checks to see if two strings are anagrams releative to one another
// ============================
// Time Complexity O(N)
// ============================

// Helper Function Anagram Solution #1
function anagram(stringA, stringB) {
    // We call our helper function on the first string
    let obj1 = charObj(stringA);
    console.log(obj1)
    // we call our helper function on the second string
    let obj2 = charObj(stringB);

    // We use a built in method of objects to check the length of the first object vs the second object
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        // If they are not equal to each other in length we return false
        // return false;
    }
    
    // We loop through the object
    for (let key in obj1) {
        // We check to see if any keys value is not equal to a keys value in the second object
        if (obj1[key] !== obj2[key]) {
            // If we find any keys values that are not equal to one another we will return false
            return false;
        }
    }
    // If everything we ok we return true
    return true;
}

console.log(anagram("racecar", "carrjce"))

// Helper Function Anagram Solution #2
// We create a helper function to abstract the logic of building an object with populated frequencies
function charObj(str) {
    // We create an empty object
    const obj = {};

    // We create a for loop and replace anything that isnt a letter by using a regular expression
    for (let char of str.replace(/[^\w]/g, ''.toLowerCase())) {
        // We check if the letter is already in our object. If it we add 1 otherwise we set it equal to 1
        obj[char] = obj[char] + 1 || 1;
    }
    // We return the object to our anagram function
    return obj;
}


// ====================================
// Time Complexity O(N) Helper Function
// ====================================
// Another alternative for solving an anagram using a helper function
// Create an empty function that accepts two strings
// function anagram(stringA, stringB) {
//     // We call our helper function on our first string
//     let string1 = helperFunction(stringA);
//     // We call our helper function on our second string
//     let string2 = helperFunction(stringB);
//     // Both string should be indentical since they sorted alphabetically and if they are not equal to each
//     //  other we will return false
//     return string1 === string2;
// }

// // We create a helper function to abstract some logic and complexity away from our anagram function
// function helperFunction(str) {
//     // We return a value with only letters that will be lowercased, split into an array, sorted alphabetically,
//     // and joined back together and returned to anagram function
//     return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
// }


// console.log(anagram("racecar", "carrace"))
