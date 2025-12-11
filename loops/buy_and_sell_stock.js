var maxPorfit=function(prices){
    let min=prices[o];
    let maxPorfit=o;
    for(let i=1;i<prices.length;i++){
        if(prices[i]-min > maxPorfit){
            maxPorfit=prices[i]-min
        }
        if(prices[i] < min){
            min=prices[i]
        }
    }
    return maxPorfit;
}
prices=[7,1,5,3,6,4];
