const coolWords = {
    verb: ["Feeling'", "Lookin'", "Smellin'", "Vibin'", "Ridin'"],
    adj: ["hard", "sweet", "high", "tubular", "bossanova", "jazzy", "wicked", "sick", "slick"],
    noun: ["my guy", "lady", "dude", "bro", "sis", "cuz", "fam", "buddy"],
    punct: ["?", "!", ".", "!?", "!!!", "..."]
};


const CoolPhrase = () => {
    let randomVerb = coolWords.verb[Math.floor(Math.random() * coolWords.verb.length)];
    let randomAdj = coolWords.adj[Math.floor(Math.random() * coolWords.adj.length)];
    let randomNoun = coolWords.noun[Math.floor(Math.random() * coolWords.noun.length)];
    let randomPunct = coolWords.punct[Math.floor(Math.random() * coolWords.punct.length)];
    
    let randomCoolPhrase = `${randomVerb} ${randomAdj}, ${randomNoun}${randomPunct}`;

    console.log(randomCoolPhrase);

    return randomCoolPhrase;
};

CoolPhrase();