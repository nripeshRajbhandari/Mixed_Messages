console.log('THE PROJECT TO DISPLAY RANDOM MESSAGES (I CHOOSE TO DISPLAY FAVORITE QUOTES:) \n\n');

//Generate Random Numbers for Indexing to the Random Quotes
const generateRandomNumber = (quoteLength) => {
    return (Math.floor(Math.random()*quoteLength));
};

// ADD THE RANDOM MESSAGES TO DISPLAY:
//Inspiring quotes about Family, Friends and Work
const familyQuotes = [
    "The family is one of nature's masterpieces.",
    "Other things may change us, but we start and end with the family.",
    "Family is not an important thing, it's everything.",
    "The memories we make with our family is everything.",
    "Family is the best thing you could ever wish for. They are there for you during the ups and downs and love you no matter what.",
    "The family is the first essential cell of human society."
];

const friendsQuotes = [
    "Time doesn't take away from friendship, nor does separation.",
    "There is nothing like puking with somebody to make you into old friends.",
    "Life is an awful, ugly place to not have a best friend.",
    "If you have two friends in your lifetime, you're lucky. If you have one good friend, you're more than lucky.",
    "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
    "When friendships are real, they are not glass threads or frost work, but the solidest things we can know.",
    "There is no surer foundation for a beautiful friendship than a mutual taste in literature."
];

const workQuotes = [
    "Successful people are not gifted; they just work hard, then succeed on purpose.",
    "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
    "The only thing standing between you and outrageous success is continuous progress.",
    "I never dreamt of success. I worked for it.",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit."
];

//Object of Quotes having differnt Cagatories created...
const inspiringQuotesObject = {
    Family: familyQuotes,
    Friends: friendsQuotes,
    Work: workQuotes
};

//Initialize an empty array Container to store random selected items
const randomQuoteContainer = [];// contains array of quote objects.

//Get Random Quotes from the Object:
const generateRandomQuotes = ()=>{
    for(quoteArray in inspiringQuotesObject){
        const randomIndex = generateRandomNumber(inspiringQuotesObject[quoteArray].length);
        randomQuoteContainer.push({[quoteArray] : inspiringQuotesObject[quoteArray][randomIndex]})
    }  

};

const displayRandomQuotes = ()=>{
    randomQuoteContainer.forEach((quoteObject) =>{

        const objectPropertyName = Object.keys(quoteObject);
        const objectPropertyValue = Object.values(quoteObject);

        console.log(`Inspiring Quote About ${objectPropertyName}: ${objectPropertyValue} \n\n`);


        //second method to achieve the same output - It works too..
        // for(const quoteKey in quoteObject ){
        //     console.log(quoteKey);
        //     console.log(quoteObject[quoteKey]);
        // }

    } );
};

generateRandomQuotes();

displayRandomQuotes();



