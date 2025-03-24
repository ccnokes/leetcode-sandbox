// every array is sorted ASC
// we need the union of all the data sets. Can't use hashmap/Set/etc
function mergeOverlappingData(nums: number[][]): number[] {
  const merged: number[] = [];

  for (let arr of nums) {
    for (let num of arr) {
      if (!merged.includes(num)) {
        merged.push(num);
      }
    }
  }

  return merged;
}

console.log(
  mergeOverlappingData([
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
