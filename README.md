# _{Application name here}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_  

## Notes  

1. Take away spaces and punctuation from users text and downcase all of it 
2. Determine number of columns and rows (squart root and cieling should help)
3. Assign number to length of original message for use in a for loop
4. Push message into an array
5. Take message and join it into 5 letter groups 

## Tests  

**describe prepareText()**
**Test:** "It should take some text and downcase all the letter"
**Code:**  
const text = "It sHoUlD, TaKe AlL oF ThE LeTtErS, aNd DoWnCaSe ThEm!";  
prepareText(text);  
**Expected Output:** "it should, take all of the letters, and downcase them!"  
<br>

**Test:** "It should remove spaces and punctuation from the text"
**Code:**  
const text = "it should, take all of the letters, and downcase them!"  
prepareText(text);  
**Expected Output:** "itshouldtakeallofthelettersanddowncasethem"  

**Describe encryptSquare**
**Test:** "It should take the length of the text and set a variable to that number for the for loop"  
**Code:**  
const text = "it should, take all of the letters, and downcase them!"
encryptSquare(text);
**Expected Output:**  
columns: 7  
rows: 6  