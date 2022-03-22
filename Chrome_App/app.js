function getLastApp(apps) {
    let count = apps.lentgh - 1
    return apps[count]
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"