// add solution here

function  theBeatlesPlay(musicians, instruments) {
  var newArray = []
for (let i = 0; i < musicians.length && i < instruments.length; i++ ){
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
}
 return newArray
}


function  johnLennonFacts(array) {
  let counter = 0
 while(counter < array.length) {
   array[counter] = array[counter] + "!!!"
   counter += 1
 }
 return array
}



function iLoveTheBeatles(number) {
  var nwArray = []
   do { 
     nwArray.push("I love the Beatles!")
     number ++
   } while(nwArray < 15)
return nwArray
}

* The function should create a variable that stores an empty array. 
* Implement a do-while loop inside the function that adds `"I love the
  Beatles!"` to the empty array. 
* The loop should then increment the number passed in as a parameter. The
  condition of the loop should check to see that the parameter number is
  less than `15`. It should contain a number of strings that represents the
  difference between the input number and `15`.
* Return the array with the strings `"I love the Beatles!"`



