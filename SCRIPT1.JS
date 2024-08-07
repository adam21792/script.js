// Wrap the entire contents of script.js inside an IIFE
(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var helloSpeaker = {};
    var byeSpeaker = {};

    // Attach the speak method to the helloSpeaker object
    helloSpeaker.speak = function(name) {
        console.log("Hello " + name);
    };

    // Attach the speak method to the byeSpeaker object
    byeSpeaker.speak = function(name) {
        console.log("Goodbye " + name);
    };

    // Loop over the names array and say hello or goodbye
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        // Check the first letter of the name
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();