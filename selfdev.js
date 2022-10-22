/* Setting Global Data Arrays 

In future, these will be more efficiently organized within their own file/db

*/

const affirmationWords = ["capable", "beautiful", "worthy", "passionate", "loved", "gorgeous", "amazing", "determined", "valuable", "unique", "valid", "human"];
const reminders = ["Take a break and do some chores, working too long on one thing is procrastinating on others. You are allowed to work at a healthy pace.", "Be kind to yourself. You are not forever bound to the things you dislike about yourself today, and you can always make efforts to be better.", "Stop catastrophe-worrying, you are likely overthinking. Breathe, and push through.", "Mistakes are human, and so are you. Embrace them and keep trying to improve.", "Don't mistake procrastination for time management. Examine your reasons for putting something off to see if you're just avoiding it.", "People are not attacking you when they criticize or question you. Afford others the benefit of the doubt and assume benevolence.", "Not everything will be perfect from the beginning. Embrace the journey and love your ability to improve everything you make.", "Every error is a doorway to gaining knowledge.", "There is no hardship, trial, or failing that you are alone in experiencing, and there is always a path out that others have walked before.", "Falling short of a goal is no reason to abandon the journey. Keep going!"];
const noun = [{
    singular: "butt",
    plural: "butts"
},{
    singular: "apple",
    plural: "apples"
},{
    singular: "salad",
    plural: "salads"
},{
    singular: "puppy",
    plural: "puppies"
},{
    singular: "sandwich",
    plural: "sandwiches"
}];
const adj = [{
    solo: "beautiful",
    an: "a beautiful"
}, {
    solo: "solid",
    an: "a solid"
},{
    solo: "grungy",
    an: "a grungy"
}, {
    solo: "organic",
    an: "an organic"
}, {
    solo: "honest",
    an: "an honest"
}, {
    solo: "awesome",
    an: "an awesome"
}];
const verb = ["kiss", "post on Insta", "collect", "organize", "change", "hug", "buy from Amazon", "eat"];
const jokeAuthors = [{
    first: "Albert",
    last: "Einstein"
}, {
    first: "Friedrich",
    last: "Nietzsche"
},{
    first: "William",
    last: "Shakespeare"
},{
    first: "Betty",
    last: "White"
},{
    first: "Justin",
    last: "Timberlake"
},{
    first: "Mark",
    last: "Twain"
},{
    first: "Wayne",
    last: "Gretzky"
}];

const jokeTypes = ["You must be the #noun_singular you wish to #verb in the world.", "You miss 100% of the #noun_plural you don't #verb.", "The #noun_singular is #adj_an thing to #verb.", "I #verb, therefore I am.", "Life is ten percent #noun_singular and ninety percent #noun_singular.", "Don't judge each day by the #noun_singular you #verb but by the #noun_plural that you #verb."];

/* Functions */

const getAffirm = (num) => {
    let affirmations = [];
    for (let x = 1; x <= num; x++){
        let i = Math.floor(Math.random()*affirmationWords.length);
        while (affirmations.includes(affirmationWords[i])){
            i = Math.floor(Math.random()*affirmationWords.length);
        }
        affirmations.push(affirmationWords[i]);
    }
    return affirmations;
}

const getReminder = () => {
    let rem = Math.floor(Math.random()*reminders.length);
    return reminders[rem];
}

const getJokeType = () => {
    let joke = Math.floor(Math.random()*jokeTypes.length);
    return jokeTypes[joke];
}

const getNoun = () => {
    let n = Math.floor(Math.random()*noun.length);
    return noun[n];
}

const getAdj = () => {
    let a = Math.floor(Math.random()*adj.length);
    return adj[a];
}

const getVerb = () => {
    let v = Math.floor(Math.random()*verb.length);
    return verb[v];
}

const getName = () => {
    let given = Math.floor(Math.random()*jokeAuthors.length);
    let sur = Math.floor(Math.random()*jokeAuthors.length);
    return `-${jokeAuthors[given].first} ${jokeAuthors[sur].last}`;
}

const processJoke = () => {
    let jQuote = getJokeType();
    jQuote = jQuote.split(' ');
    let jMap = jQuote.map(e => processWord(e));
    jQuote = jMap.join(' ');
    return jQuote;
}

const processWord = (word) => {
    word = word.replace('#noun_singular', getNoun().singular);
    word = word.replace('#noun_plural', getNoun().plural);
    word = word.replace('#adj_solo', getAdj().solo);
    word = word.replace('#adj_an', getAdj().an);
    word = word.replace('#verb', getVerb());
    return word;
}

/* Refresher Functions */

const getAffirmationContent = () => {
    let aff = document.getElementById("affirmation");
    let affArray = getAffirm(3);
    console.log(aff);
    aff.innerText = `I am ${affArray[0]}, ${affArray[1]}, and ${affArray[2]}!`;
}

const getReminderContent = () => {
    let rem = document.getElementById("reminder");
    rem.innerText = getReminder();
}

const getJokeContent = () => {
    let jok = document.getElementById("jokequote");
    jok.innerText = '"' + processJoke() + '"';
    let auth = document.getElementById("jokeauthor");
    auth.innerText = getName();
}


/* Intial Page Setup */

getAffirmationContent();
getReminderContent();
getJokeContent();
