let arr=[2,-2,0,4,-5,-7];
function countNegative(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}
res=countNegative(arr);
console.log(res);