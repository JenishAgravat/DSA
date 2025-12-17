let n=10
function fun(x){
    if(x>n){
        return;
    }
    console.log(x);
    fun(++x);
}
fun(1);