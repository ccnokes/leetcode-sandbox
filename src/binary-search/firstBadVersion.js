/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 

O(log(n))

*/

// 
// [1,2,3,4,5,6,7,8]
//  l     m       h.    m=4, bad
//  l. m h              m=2, good
//.     lmh             m=3, good
//        ^             m=4, bad
// 4 is the first bad version

// [1,2,3,4,5,6,7,8], bad = 7
//  l     m       h.    m=4, good
//          l. m  h     m=6, good
//.            lmh             m=3, good
//        ^             m=4, bad

// [1, 2, 3], bad = 2
// m=2, bad
// l=1, m=1, r=2, good
// l=2, m=2,r=2m bad


// versions - number[]
// returns - number (bad version)
function firstBadVersion(versions) {
  let left = 0;
  let right = versions.length - 1;
  
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    const midVersion = versions[mid];
    console.log(`l=${versions[left]} m=${midVersion} r=${versions[right]}`);
    if (isBadVersion(midVersion)) {
      // take left side, searching good section
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (left === versions.length) {
    return -1;
  }
  return left + 1;
}


// expensive, so minimize calls to this
function isBadVersion(v) {
  if (v >= 12) {
    return true;
  }
  return false;
}

console.log(firstBadVersion([1,2,3,4,5,6,7,8]));

console.log(firstBadVersion([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
