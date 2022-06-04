// Write a loop that makes seven calls to console.log to output the following triangle

function loopingTriangle(){
  let results = ''

  for(let i = 0; i <= 7; i++){
    results += '#'
    console.log(results)
  }

}
loopingTriangle()


//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead

function fizzBuzz (){
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 ){
      console.log( "Fizz")
    }

    if(i % 5 === 0){
      console.log('Buzz')
    }

    if(i % 3 === 0 && i % 5 ===0){
      console.log('FizzBuzz')
    }

    console.log(i)
  }

}

fizzBuzz()


//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

function chessboard(){
  //look it up. I 'didnt know how to solve this one
  let size = 8;
  let hash  = ''

  for(let i = 0; i < size; i++){
    for(let o = 0; o < size; o++){
      if((i + o) % 2 === 0){
        hash += ' '
      } else {
        hash += '#'
      }
    }

    hash += '\n'
  }

  console.log(hash)
}
chessboard()