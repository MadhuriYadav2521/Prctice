// var year = 1917;
// if(year%400 == 0 || year%4==0 && year%100 !==0){
//     console.log("leap yar");
// }else{
//     console.log("not leap year");
// }

// var num = 32;
// if(num%3==0 || num%5==0){
//     console.log("divisible by 3 or 5");
// }else{
//     console.log("not divisible  by 3 or 5");
// }


// var array = [34, 45, 23, 5, 676, 32, 34,];
// var target = 66;
// var start = 0;
// var n = array.length;
// var end = n;


// while (start < end) {
//     var sum = array[start] + array[end];
//     if (sum == target) {
//         console.log(array[start], array[end])
//         return true;

//     }

//     if (sum < target) {
//         start = start + 1;
// 
//     }
//     else {
//         end = end - 1;
//     }
// }
// console.log("false")


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// var array = [2,7,11,15,3,6];
// var target = 9;
// for (var i = 0; i < array.length; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] == target) {
//             console.log(array[i] + "," + array[j]);

//         }
//     }
// }




// // remove duplicate elements from array
// var array =[1,1,3,5,66,6,7,8,7];
// var final=[];
// var dupe=[];
// for(i=0; i<array.length;i++){
//     if(array[i]==array[i+1]){
//         dupe.push(array[i])
//     }
//     else{
//         final.push(array[i])
//     }
// }
// console.log(final);



//Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// var array =[1,1,3,5,66,6,7,8,7,1,1];
// var final=[];
// var dupe=[];
// array.sort();
// console.log(array);
// for(i=0; i<array.length;i++){
//     if(array[i]==array[i+1]){
//         dupe.push(array[i])
//     }
//     else{
//         final.push(array[i])
//     }
// }
// console.log(final);


// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores)

// var array=[0,1,2,2,3,0,4,2]
// var val = 2;
// var bin=[];
// var res =[];
// for(var i =0; i<array.length;i++){
//     if(array[i]==val){
//         bin.push(array[i]); 
//     }else{
//         res.push(array[i]); 
//     }

// }
// console.log(res.length);
// console.log(res);


//Find the Index of the First Occurrence in a String
// var haystack  = 'leetcode';
// var needle = "leeto"
// var index = haystack.indexOf(needle);
// console.log(index); 




