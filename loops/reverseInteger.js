function reverse(n){
    let nCopy=n;
    n=Math.abs(n)
    let rev=0;

    while(n>0){
        let last=n%10;
        rev=(10*rev)+last;
        n=Math.floor(n/10);
    }
    if(nCopy<0){
        return -rev;
    }
    else{
        return rev;
    }
}
n=-5636;
let res=reverse(n);
console.log(res);
