function isAppUsed(apps, app) {
    return apps.includes(app)
}


 // Sample usage - do not modify
 console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
 console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

/**
 * @param {string[]} strings
 */
 function getStringSizes(strings) {
    return strings.map(function(string) {
        return string.length;
    })
}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]