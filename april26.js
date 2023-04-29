// var nums = [1,3,5,6]; 
// var target = 2;
// var len = nums.length;
// for(var i =0; i<len; i++){
//     if(nums[i]==target){
//         return i;
//     }else if(nums[i]>target){
//         return i;
//     }
//     return len;
// }


// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it 
// would be if it were inserted in order.

// var arr = [1, 3, 5, 6];
// var n = arr.length;
// var K = 4;
// function find_index(arr, n, K) {

//     for (let i = 0; i < n; i++)

//         if (arr[i] == K)
//             return i;

//         else if (arr[i] > K)
//             return i;

//     return n;
// }
// console.log((find_index(arr, n, K)));




// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// var array = [4,3,2,1];
// var str = "";
// var final = [];
// var ans, ans1=[];

// for(var i=0;i<array.length;i++){
//     str = str + array[i].toString();
// }

// var num = parseInt(str);
// num = num + 1;

// var numStr = num.toString();

// for(i=0;i<numStr.length;i++){
//     final.push(numStr[i]);
// }

// for(i=0;i<final.length;i++){
//     ans = parseInt(final[i]);
//     ans1.push(ans);
// }

// console.log(ans1)



// Merge Sorted Array
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// var nums1 = [1,2,3,0,0,0];
// var nums2 = [2,5,6];
// var nums3 = [];
// var flag = false;

// for(var i =0; i<nums1.length;i++){
//   for(var j =0; j<nums2.length; j++){
//     if(nums1[i]< nums2[j]){
//         nums3.push(nums1[i])
//     }else{
//         nums3.push(nums2[j])
//     }
//   }
   
// }
// console.log(nums3);



// var arr1 = [1,2,3,0,0,0];
// var arr2 = [2,5,6];
// var mergedArray = [];

// var i = 0;
// var j = 0;

// for (var k = 0; k < arr1.length + arr2.length; k++) {
//   if (arr1[i] < arr2[j] || j >= arr2.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   } else {
//     mergedArray.push(arr2[j]);
//     j++;
//   }
// }

// console.log(mergedArray);





// Single Number
// var nums = [4,1,2,1,2];
// var final=[];
// for(var i =0; i<nums.length; i++){
// //    console.log(nums[i]);
    

// }

const nums = [1, 2, 3, 2, 1];
let result = 0;
for (let i = 0; i < nums.length; i++) {
  result ^= nums[i];
}
console.log(result); // Output: 3





min=0
arr .lengtha i < min
min = arr 



















