/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    var results = []
    var result = {
        "SearchTerm": "",
        "Results": results
    };

    // checks if the searchTerm is string or else returns empty result
    if(typeof searchTerm !== 'string') {
        return result; 
    }
    
    // scannedTextObj.forEach((bookInfo)=> {
    for (var b=0; b< scannedTextObj.length; b++) {
        bookInfo = scannedTextObj[b];

        // checks if the primary component of the book are correct types, or else continues to the next book
        if(typeof bookInfo.Title !== 'string' || typeof bookInfo.ISBN !== 'string') {
            return;
        }
        console.log("Book:", bookInfo);
        var bookTitle = bookInfo.Title;
        var bookISBN = bookInfo.ISBN;

        // iterate through content
        for (var i=0; i< bookInfo.Content.length; i++) {
            content = bookInfo.Content[i];
            console.log("  Line:",content);
            var lineNum = content.Line;
            var pageNum = content.Page;

            var words = content.Text.split(" ");
            var continuedWord = "";
            
            for (var w =0; w<words.length; w++) {
                // check if it's empty or there's no words there
                // console.log(words[w]);
                if (w == 0) {
                    words[0] = words[0] + continuedWord;
                } else if(typeof words[w] !== 'string' || words[w]== "" ) {
                    console.log("Not a word:", words[w]);
                    // continue
                } else if(w == words.length-1 && words[w].endsWith("-")) {
                    // set continued word
                    continuedWord = words[w].substring(0, continuedWord.length - 1);
                } else if(words[w] == searchTerm) {
                    // add to results
                    console.log("found word: ", words[w]);
                } else {
                    
                    // console.log(words[w]);
                }
            }  

        }

    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut2 = {
    "SearchTerm": "darkness",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */



// const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
// if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
//     console.log("PASS: Test 1");
// } else {
//     console.log("FAIL: Test 1");
//     console.log("Expected:", twentyLeaguesOut);
//     console.log("Received:", test1result);
// }

// /** We could choose to check that we get the right number of results. */
// const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
// if (test2result.Results.length == 1) {
//     console.log("PASS: Test 2");
// } else {
//     console.log("FAIL: Test 2");
//     console.log("Expected:", twentyLeaguesOut.Results.length);
//     console.log("Received:", test2result.Results.length);
// }

const test3result = findSearchTermInBooks("darkness", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}
