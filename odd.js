// All even numbers are evenly divisible by 2. So there won't be any remainder --- the remainder will be 0

const isOdd = (number) => {
  if (number % 2 === 0 ) {
    return false;
  } else {
    return true;
  }
}

console.log('3 is odd: ' + isOdd(3));
console.log('8 is odd: ' + isOdd(8));