function getLastApp(apps) {
    return console.log(apps[apps.length-1])
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"


function loopThroughElements(elements) {
    elements.forEach(function(element) {
        return console.log(element)
    })
}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console