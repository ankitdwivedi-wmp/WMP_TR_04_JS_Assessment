// Function to remove duplicate from array
function  removeDuplicates(arr){
    s=new Set();
    for(let i=0;i<arr.length;i++){
        s.add(arr[i]);
    }
    return [...s];
}
//dummy array example
let arr=[1,1,1,1,3,4,5];
console.log(removeDuplicates(arr));