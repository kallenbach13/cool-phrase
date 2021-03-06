const coolWords = {
    verb: ["Feeling'", "Lookin'", "Smellin'", "Vibin'", "Ridin'", "Vapin'", "Sizzlin'", "Smokin'", "That's"],
    adj: ["hard", "sweet", "high", "tubular", "bossanova", "jazzy", "wicked", "sick", "slick", "sour", "rad"],
    noun: ["my guy", "lady", "dude", "bro", "sis", "cuz", "fam", "buddy", "bub", "gal", "pup", "baby", "sweetums", "cat"],
    punct: ["?", "!", ".", "!?", "!!!", "..."]
};


const coolPhraseGenerator = () => {
    let randomVerb = coolWords.verb[Math.floor(Math.random() * coolWords.verb.length)];
    let randomAdj = coolWords.adj[Math.floor(Math.random() * coolWords.adj.length)];
    let randomNoun = coolWords.noun[Math.floor(Math.random() * coolWords.noun.length)];
    let randomPunct = coolWords.punct[Math.floor(Math.random() * coolWords.punct.length)];
    
    let randomCoolPhrase = `${randomVerb} ${randomAdj}, ${randomNoun}${randomPunct}`;

    document.getElementById("cool-phrase").innerHTML = randomCoolPhrase;
};

const coolButton = document.getElementById("cool-button");
coolButton.addEventListener('click', coolPhraseGenerator);