const arr = [1, 2, 3, 4, 5]

// for(let i=0; i<arr.length; i++){
//     console.log(i);
// }

//variable with 'let' keyword are of block scope only
//if we want to access 'i' outside the block, it should of with 'var' keyword because variable with 'var' keyword are of functional scope and can be access in whole function in which it is defined

for(var i=0; i<arr.length; i++){
    console.log(i);
}
console.log("value of 'i' after last iteration=", i);  //here i = 5



//Function:
function abc(x){
    // console.log(x);     //function declaration
    console.log(x()); 
}
// let s = 2;
// let s = function(){
//     console.log("Hello");       //call back function
//     return 99;
// }
// abc(s);       //function call > call the whole value of 's' variable

// abc(s())


// abc(function(){
//     console.log("Hello");       
//     return 99;
// })


//arrow function- arow is a call back function > arrow function is nside another function
abc(()=>{
    console.log("Hello");       
    return 99;
})



// forEach() : 'for' loop + arrow function :-
// const arr = [1, 2, 3, 4, 5]
arr.forEach((item, index, array)=>{
    console.log(item, index, array);
})









