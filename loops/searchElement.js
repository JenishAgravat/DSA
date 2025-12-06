//search element in array
function searchElement(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}
let arr=[22,33,44,55,66,77];
let res=searchElement(arr,22);
console.log(res);