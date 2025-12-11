// let n=4;
// for(let i=0;i<n;i++){                           //**** 
//     let row=" ";                                //**** 
//     for(let j=0;j<n;j++){                      //**** 
//         row +="*";                             //****
//     }
//     console.log(row);
// }

// let n=4;
// for(let i=0;i<n;i++){                            //*
//      row="";                                     //* *
//     for(let j=0;j<=i;j++){                      //* * *
//          row+=" *";                             //* * * *
//     }
//     console.log(row);
// }

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";                                
//     for(let j=0;j<=i;j++){
//         row+=j+1;
//     }
//     console.log(row);
// }

// let n=5;
// for(let i=0;i<n;i++){
//     row="";
//     for(let j=0;j<=i;j++){
//         row+=i+1;
//     }
//     console.log(row);
// }

let n=5;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i;j++){
        row+=" "
    }
    for(let k=n-i;k>=1;k--){
        row+=k+" "
    }
    console.log(row);
}

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<n-(i+1);j++){
//         row+=" ";
//     }
//     for(let k=0;k<i+1;k++){
//         row+=k+1+" ";
//     }
//     console.log(row); 
// }

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     let toggle=1;
//     for(let j=0;j<=i;j++){
//         row+=toggle;
//         if(toggle==1){
//             toggle=0;
//         }
//         else{
//             toggle=1;
//         }
//     }
//     console.log(row); 
// }

// let n=5;
// let toggle=1;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<=i;j++){
//         row+=toggle;
//         if(toggle==1){
//             toggle=0;
//         }
//         else{
//             toggle=1;
//         }
//     }
//     console.log(row); 
// }