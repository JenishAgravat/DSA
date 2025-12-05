function hello(){
    console.log("hello");
}
hello();

// Passing a Variable in Function
function greet(name){
    console.log("Namste "+name)
}
greet("Jenish")

//return a function value
function square(x){
    let res=x*x;
    return res; //return a function value
}
let value=square(3); //catching a return value 
console.log(value);

//function with if else
function eligibile(age){
    if(age<0){
        console.log("Invalid Input");
    }else if(age<18){
        console.log("Not Eligibile");
    }else{
        console.log("Eligibile");
    }
}
eligibile(29);
eligibile(10);
eligibile(-2);
