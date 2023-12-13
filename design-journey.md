# Design Journey

## Overall Process & Decision making


When creating this function, I decided that that I should iterate throughout the books *if it exists*. 
At first, I was using a `forEach` loop to iterate through the JSON, but this does not perform as well as a for loop. I looped through all the books in the JSON, then looped through the lines in the book, finally altered the line into an array split by spaces, and looped through these words.

Before looping through the content in the book, I check to make sure the book title is a string and the isbn number is a number. To check for the word in the innermost for loop, I first added any previous component of a word if there was a hypen in the previous line, then I check the type of the word (should be a string) and then check if it's empty. Finally, I test if the word is the same as the `searchTerm` by replacing punctuation including periods and commas.


## Testing and Iteration

### Writing Test Strategy

When writing test strategies, I wanted to come up with both common use cases when scanning a book and unique entries that could trip up the function. 

1. With the hypen in the sample, I knew that it was crucial for the function to find a word even if it was broken up with a hypen. 

2. As it could take in *no books* that was the next test case I wrote which would provide no results. 

3. Next if the ISBN number was not a number, then the book was likely scanned wrong and one would not want to save the incorrect information, so it provides no results as well. 

4. If the `searchWord` is not in the content, it should return an empty array.

5. The function should also find a word if there's punctuation at the end.

### Most proud component

I was most proud that it was able to find a word even if the line separates it using a hypen. 

### Most difficult component

The most difficult component was also the part that I was the most proud of. It was difficult to 'keep' the first part of the word to continue in the next line. 

### Edge cases

The function does not handle all types of punctuation, only handles if there's periods or commas that need to be *removed* instead of searching for a word with punctuation. 