# Design Journey

## Overall Process & Decision making


When creating this function, I decided that that I should iterate throughout the books *if it exists*. 
At first, I was using a `forEach` loop to iterate through the JSON, but this does not perform as well as a for loop. A key component that I knew I had to check was for continuing words with hypens. 

I also established some assumptions that could help provide me with a setup when developing the function, the word can contain numer


- first used a forEach loop but performs better with for loop
- assumption that a word does not contain numerical charectors
- problem with empty spaces or text that isn't a string. 
- what if there's a period or any other type of punctuation?




## Testing and Iteration


### Writing Test Strategy

When writing test strategies, I wanted to come up with both common use cases when scanning a book and unique entries that could trip up the function. With the hypen in the sample, I knew that it was crucial for the function to find a word even if it was broken up with a hypen. As it could take in *no books* that was the next test case I wrote which would provide no results. Next if the ISBN number was not a number, then the book was likely scanned wrong and one would not want to save the incorrect information, so it provides no results as well. Finally, if there's no Books or Search term, the function should still provide no result. 

### Most proud component

I was most proud that it was able to find a word even if a hypen is separating it. 

### Most difficult component

The most difficult component was also the part that I was the most proud of. It was difficult to 'keep' the first part of the word to continue in the next line. 


### Edge cases

*those addressed and those you might address if given more time*