let arr = [1, 20, 5, 2, 60, -1]
function mySort(myArr){
    for(let j = 0; j < arr.length; ++j){
    for(let i = 0; i < arr.length - 1; ++i){
    if(myArr[i] > myArr[i+1]){
mySwap(arr, i)
    }
    }
    }
}
function mySwap(myArr, i){
let p = myArr[i];
myArr[i] = myArr [i+1];
myArr[i+1] = p;
}
mySort(arr)
console.log(arr);