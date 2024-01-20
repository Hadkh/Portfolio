  
function missingNumber(nums) {
  const n = nums.length;
   
  for (let i = 0; i < n; i++) {
     const expectedNumber = i;
     
     if (nums.indexOf(expectedNumber) === -1) {
       return expectedNumber;
     }
  }
   
  return n;
 }