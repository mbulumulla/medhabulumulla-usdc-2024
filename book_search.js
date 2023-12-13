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
        "SearchTerm": searchTerm,
        "Results": results
    };

    // checks if the searchTerm is string or else returns empty result
    if(typeof searchTerm !== 'string' && scannedTextObj.length == 0 ) {
        return result; 
    }

    
    // iterate through books
    for (var b=0; b< scannedTextObj.length; b++) {
        bookInfo = scannedTextObj[b];

        // checks if the primary component of the book are correct types, or else continues to the next book
        if(typeof bookInfo.Title !== 'string' || typeof bookInfo.ISBN !== 'string') {
            return result;
        }

        // iterate through content
        var continuedWord = "";

        for (var i=0; i< bookInfo.Content.length; i++) {
            content = bookInfo.Content[i];
            var words = content.Text.split(" ");
            
            for (var w =0; w<words.length; w++) {
                // The previous line had a hypen, need to continue the word
                if (continuedWord !== "") {
                    words[0] =  continuedWord + words[0];
                    continuedWord = "";
                } 
                
                if(typeof words[w] !== 'string' || words[w]== "" ) {
                    
                } else if(w == words.length-1 && words[w].endsWith("-")) {
                    // check if there's a hypen, so the word continues
                    continuedWord = words[w].slice(0, -1) ;
                } else if(words[w] == searchTerm) {
                    // add to results
                    results.push(addToResults(results, bookInfo.ISBN, content.Page, content.Line) );
                } 
            }  

        }

    }
    
    return result; 
}

function addToResults(results, isbn, page, line ) {
    return {
            "ISBN": isbn,
            "Page": page,
            "Line": line
        };
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
            }, 
            {
                "Page": 31,
                "Line": 11,
                "Text": "what year it was"
            } 
        ] 
    }
]

const twentyLeaguesIncorrectISBNIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "hi",
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
const noBooks = [ ];
    
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

const twentyLeaguesOut3 = {
    "SearchTerm": "darkness",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const noBooksOut = {
    "SearchTerm": "darkness",
    "Results": [ ]
}

const noResult = {
    "SearchTerm": "coding",
    "Results": []
}
const noResultOrSearch = {
    "SearchTerm": "",
    "Results": []
}
const twentyLeaguesMultipleOut = {
    "SearchTerm": "was",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 11
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



const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Finding a word in a hypen
const test3result = findSearchTermInBooks("darkness", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test3result)) {
    console.log("PASS: Hypen word");
} else {
    console.log("FAIL: Hypen word");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test3result);
}

// No Books inputted
const test4result = findSearchTermInBooks("darkness", noBooks);
if (JSON.stringify(noBooksOut) === JSON.stringify(test4result)) {
    console.log("PASS: No Books Inputted");
} else {
    console.log("FAIL: No Books Inputted");
    console.log("Expected:", noBooksOut);
    console.log("Received:", test4result);
}


// Book with an invalid ISBN Number (it's a string)
const test5result = findSearchTermInBooks("darkness", noBooks);
if (JSON.stringify(noBooksOut) === JSON.stringify(test5result)) {
    console.log("PASS: Invalid ISBN Number");
} else {
    console.log("FAIL: Invalid ISBN Number");
    console.log("Expected:", noBooksOut);
    console.log("Received:", test5result);
}


const test6result = findSearchTermInBooks("coding", twentyLeaguesIn);
if (JSON.stringify(noResult) === JSON.stringify(test6result)) {
    console.log("PASS: No Result");
} else {
    console.log("FAIL: No Result");
    console.log("Expected:", noResult);
    console.log("Received:", test6result);
}

const test7result = findSearchTermInBooks("", twentyLeaguesIn);
if (JSON.stringify(noResultOrSearch) === JSON.stringify(test7result)) {
    console.log("PASS: No Result or Search Term");
} else {
    console.log("FAIL: No Result");
    console.log("Expected:", noResultOrSearch);
    console.log("Received:", test7result);
}

const test8result = findSearchTermInBooks("was", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesMultipleOut) === JSON.stringify(test8result)) {
    console.log("PASS: Multiple words");
} else {
    console.log("FAIL: Multiple words");
    console.log("Expected:", twentyLeaguesMultipleOut);
    console.log("Received:", test8result);
}



