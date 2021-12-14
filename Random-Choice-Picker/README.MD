Small app that features a textarea in which the user enters multiple choices divided by commas, which are rendered on the page when the return key is pressed.  
After the elements are rendered a function runs for a couple of seconds which highlights the elements randomly as they are being picked by a Math.random() function.
In the end one of the elements remains highlighted, which is the random choice from the users list.

Other features:
- textarea is focused when page is loaded;
- empty spaces are not rendered, even between commas(.split(",") function is used to generate and array);
- app runs only if textarea has some content, it doesn't render anything if empty;
- not visible to the user: i used .replace() function on the string retrieved from the textarea to remove unwanted new line tags(eg \n\r).
