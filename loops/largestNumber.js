let arr=[3,4,-5,6,7,-8]

function largestNumber(arr){
    let largest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}
res=largestNumber(arr);
console.log(res);