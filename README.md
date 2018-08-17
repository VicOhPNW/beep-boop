# _Beep-Boop & Numbers_

#### _Epicodus independent project #3, August 17, 2018_

#### By _**Victoria Oh**_

## Description
A web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

## Specifications
* A non-numeric input will result in false.
  * Example Input: a
  * Example Output: "Please enter a valid number."

* 0 is replaced with "Beep!"
  * Example Input: 0
  * Example Output: "Beep!"

* 1 is replaced with "Boop!"
  * Example Input: 1
  * Example Output: "Boop!"

* Numbers that contain 0 are replaced with "Beep!"
  * Example Input: 20
  * Example Output: "Beep!"

* Numbers that contain 1 are replaced with "Boop!"
  * Example Input: 11
  * Example Output: "Boop!"

* If a number includes 0 and 1, the program will return "Boop!"
  * Example Input: 10
  * Example Output: "Boop!"

* Program will return a range of numbers between 0 and the provided number.
  * Example Input: 5
  * Example Output: "1, 2, 3, 4, 5"

* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 9
  * Example Output: "I'm sorry, Dave. I'm afraid I can't do that."

* If a number includes 0 and/or 1 _*and*_ is divisble by 3, the program will return "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 21
  * Example Output: "I'm sorry, Dave. I'm afraid I can't do that."



## Setup/Installation Requirements
1. Clone the following repository: https://github.com/VicOhPNW/beep-boop.git
2. Open the index.html file in a web browser.
3. Enter and submit a number into the application and submit for a return.

## Known Bugs
* The program does not meet the following exceptions:
1. Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 9
  * Example Output: "I'm sorry, Dave. I'm afraid I can't do that."

2. If a number includes 0 and/or 1 _*and*_ is divisble by 3, the program will return "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 21
  * Example Output: "I'm sorry, Dave. I'm afraid I can't do that."


## Support and contact details
Contact Victoria at ohvictori@gmail.com

## Technologies Used
* html
* CSS
* Javascript

### License
Copyright (c) 2016 **_Victoria Oh, Epicodus_**
