/*Attempt 1

const pets = ['cat', 'dog', 'rat']
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's'
}
console.log(pets)

console.log not displaying saying attempt was wrong
*/

/*Attempt 2

const pets = ['cat', 'dog', 'rat']
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's'
}
console.log(pets[i])

Error on console.log(pets[i]) "i is not defined"
*/

//Attempt 3

const pets = ['cat','dog','rat']
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's'
}
console.log(pets)

/*The challenge:  
   
  Create a file named looping-through-arrays.js.  
   
  In that file, define a variable named pets that references this array:  
   
     ['cat', 'dog', 'rat']  
   
  Create a for loop that changes each string in the array so that they are  
  plural.  
   
  You will use a statement like this inside the for loop:  
   
     pets[i] = pets[i] + 's'  
   
  After the for loop, use console.log() to print the pets array to the  
  terminal.
  
  Solution:

  const pets = ['cat', 'dog', 'rat']
    
    for (let i = 0; i < pets.length; i++) {
      pets[i] = pets[i] + 's'
    }
    
    console.log(pets)

  QUESTION: I did that on my first attempt and it didnt process it correctly.
  Also, need help with the steps to solve this challenge.

  */