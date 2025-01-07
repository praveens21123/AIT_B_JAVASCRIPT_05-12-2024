const str = "Welcome from JS"
const pattern = /to/g

const phnNum = "6376467937"
const phnPattern = /^[6,7,8,9][0-9]{9}$/

// Test
const res = pattern.test(str)
console.log(res);

// Match (best approch)
const result = str.match(pattern)
console.log(result);
const phnRes = phnNum.match(phnPattern)
console.log(phnRes);


//Regex Patterns 
/* 
---> Brackets [] - Define Range of the character 

 [abc] -> Occurs only a,b & c
 [^abc] -> Except a,b & c
 [a-z] -> occurs lowercase a to z
 [A-Z] -> occurs uppercase A to Z
 [a-zA-Z0-9] -> except special character
 [0-9] -> Occurs 0 to 9

---> Quatifiers -> Repeatations

 []+ -> 0 or 1 times
 []? -> 1 or more times
 []* -> 0 or more times
 []{n} -> n times
 []{n,} -> min n times, max it could be anything.
 []{n,m} -> min n times, max m times

---> Meta characters

 \w -> [a-zA-Z0-9_]
 \W -> [^a-zA-Z0-9_]
 \d -> [0-9]
 \D -> [^0-9]

---> Special characters
 \#, \$, \* etc.....
 \s - space

---> Modifiers 
  g - globally it checks the charactes
  i - case insencetive (ignore)
  m - MultiLines

*/




