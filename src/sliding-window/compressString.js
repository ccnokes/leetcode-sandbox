// given input: "Scott likes AAA insurance."
// expected output: "Sco2t likes 3A insurance."

// input: "aaaabc"
// > "4abc"

// aaaabc
// l
//     r

// abc
//  l
//  r

// compressedStr = ''
// iterate thru chars - sliding window
// dupe char? 
//    size of the window + curr str
// else 
//  write it to compressedStr
// return compressedStr

export default function compressString(str) {
  let compressedStr = '';
  let left = 0;
  
  for (let right = 1; right < str.length + 1; right++) {
      // dupe char
      if (str[left] === str[right]) {
          // proceed...
      } else {
          // do we have a window? 
          // console.log(str, right - left, str[left]);
          if (right - left > 1) {
              // write out compressed str
              compressedStr += `${right - left}${str[left]}`; // 4a    
          } else {
              // write out like normal
              compressedStr += str[left];
          }
          // update pointer
          left = right;
      }
  }
  
  return compressedStr;
}

