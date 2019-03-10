function sockMerchant(n, ar) {
    let lookup = {};
    let pairs = 0;
    let key;
    // Loop through array
    for (var i = 0; i < ar.length; i++) {
        // Check if the current thing we looking is already inside the dictionary
        if (lookup[ar[i]]) {
            // If it is incrment it by 1
            lookup[ar[i]] += 1
        } else {
            // If it isnt set it 0 and then increment it by 1
            lookup[ar[i]] = 1;
        }
    }
    // Loop throught the dictionary
    for (key in lookup) {
        // Check if the value of any key is even
        if (lookup[key] % 2 == 0) {
            // We divivde the keys value by 2 and multiply by 1 and add the value to pairs
            pairs += (lookup[key] / 2);
            // Otherwise if its odd number
        } else if (lookup[key] % 2 !== 0) {
            // We subtract 1 from the keys value then divide it by 2 and multiply it by 1 and increment pairs of socks by that value
            pairs += ((lookup[key] - 1) / 2)
        }
    }
    // We return the pairs of socks
    return pairs;
}