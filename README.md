# _Cryptosquare_

#### By _**Patrick Dolan**_

#### _A cipher that takes in a users input and scrambles it using the cryptosquare method._

## Technologies Used

* _HTML & CSS_
* _Javascript & jQuery_
* _Bootstrap_

## Description

_A site that takes in input from the user and encrypts it using the cryptosquare method._

## Setup/Installation Requirements

* _Download project into a directory on your computer._
* _Launch index.html inside cryptoosquare folder._


## Known Bugs

* _No webpage to take in user input as of yet_

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2021_ _Patrick Dolan_  

## Dev Notes  

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
const text = "it should, take all of the letters, and downcase them!"  ;
prepareText(text);  
**Expected Output:** "itshouldtakeallofthelettersanddowncasethem"  

**Describe encryptSquare**
**Test:** "It should take the length of the text and set a variable to that number for the for loop"  
**Code:**  
const text = "it should, take all of the letters, and downcase them!";
encryptSquare(text);
**Expected Output:**  
columns: 7  
rows: 6  

**Test:** "It should create a new string based on column and rows numbers"
**Code:**  
const text = "it should, take all of the letters, and downcase them!";  
encryptSquare(text);  
**ExpectedOutput:** "idlenattotdssaftdehkteotoehrwhuaesneiilacm"  

**Test:** "It should take the coded string and split it into 5 character chunks"  
**Code:**  
const text = "it should, take all of the letters, and downcase them!";  
encryptSquare(text);  
**Expected Output:** "idlen attot dssaf tdehk teoto ehrwh uaesn eiila cm"

**Test:** "It should take into account the row numbers to make words at the end of the coded message shorter as needed"
**Code:**  
const text = "don't compare yourself to others, compare yourself to the person you were yesterday";  
encryptSquare(text);  
**Expected Output:** "daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput"  