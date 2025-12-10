function removeElement(nums,val){
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[x]=nums[i];
            x=x+1;
        }
    }
    return x;
}
nums=[2,3,4,5,3,6,3,7];
val=3;
res=removeElement(nums,val);
console.log(res);

