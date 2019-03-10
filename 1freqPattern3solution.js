    // ===========================================
    // Refactored Code O(N) Linear Time Complexity
    // ===========================================
    // Given two arrays write a function to find out if two arrays have the 
    // same frequency of digits
    // Must be solved with an O(N) Time Complexity or Better

    // Create a function that accepts two arrays
    function same(arr1, arr2) {

        // We check to see if the length of the arrays are equal to one another
        if (arr1.length !== arr2.length) {
            // If they are not return false
            return false;
        }

        // Create an empty object to hold the values in the first array
        let frequencyCounter1 = {};
        // Create a second empty object to hold the values in the second array
        let frequencyCounter2 = {};

        // We loop through the values in the first array
        for (let val of arr1) {
            // If we can find it the value inside our object we will increment it by 1 otherwise set it equal to 0, then increment by 1
            // frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

            if (frequencyCounter1[val]) {
                frequencyCounter1[val] += 1;
            } else {
                frequencyCounter1[val] = 1;
            }  
        }
        // console.log(frequencyCounter1);
        // We loop through the values in the second array
        for (let val of arr2) {
            // If we can find it the value inside our object we will increment it by 1 otherwise set it equal to 0, then increment by 1
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }

        // console.log(frequencyCounter2);

        // Finally we loop through the keys inside our first object
        for (let key in frequencyCounter1) {
            // If the key to the second power cannot be found in our second object we will return false
            if (!((key ** 2) in frequencyCounter2)) {
                return false;
            }
            // If the keys value isn't equal to first object we will return false
            if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
                return false;
            }
        }

        // If everything went ok return true
        return true;

    }

    console.log(same([1,2,3,4],[1,4,9,16]));
