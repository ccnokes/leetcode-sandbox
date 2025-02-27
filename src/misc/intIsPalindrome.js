/*

Given an integer x, return true if x is a palindrome, and false otherwise.

1234554321
^        ^
    lr

1719171

12343

stringify int
2 pointer approach
while loop (l <= r)
  eqiality check
  break 
return true
*/


// return boolean
function intIsPalindrome(int) {
  const str = `${int}`;
  if (str.length <= 1 && int < 0) {
    return false;
  }

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(intIsPalindrome(1234554321)); // t
console.log(intIsPalindrome(101)); // t
console.log(intIsPalindrome(101.101)); // t
console.log(intIsPalindrome(2)); // f
console.log(intIsPalindrome(23)); // f

// negative, float
// console.log(intIsPalindrome(NaN));
// console.log(intIsPalindrome(Infinity));
// console.log(intIsPalindrome(1.23));
