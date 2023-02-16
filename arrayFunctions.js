const arr = [1, 2, 3, 4, 5]

// for(let i=0; i<arr.length; i++){
//     console.log(i);
// }

//variable with 'let' keyword are of block scope only
//if we want to access 'i' outside the block, it should of with 'var' keyword because variable with 'var' keyword are of functional scope and can be access in whole function in which it is defined

for (var i = 0; i < arr.length; i++) {
    console.log(i);
}
console.log("value of 'i' after last iteration=", i);  //here i = 5



//Function:
function abc(x) {
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
abc(() => {
    console.log("Hello");
    return 99;
})


//Array functions:-

// forEach() : 'for' loop + arrow function :- it runs for each index and item. it does not return anything.
// const arr = [1, 2, 3, 4, 5]
arr.forEach((item, index, array) => {
    console.log(item, index, array);
})

// forEach() : 'for' loop + arrow function :-
// const arr = [1, 2, 3, 4, 5]
const output = arr.forEach((item, index, array) => {
    console.log(item, index, array);
    return "xyz";          //undefined >> forEach() doesn't return anything
})
console.log(output);



//map() - similar to forEach() but it returns new array. > 'for' loop + arrow function :- it runs for each index and item. it return a new array.
// const arr = [1, 2, 3, 4, 5]
// const output = arr.map((item, index, array )=>{
//     console.log(item, index, array);
//     // return item*2;
//     return "xyz";
// })
// console.log(output);


const output = arr.map((item, index, array) => {
    console.log(item * 2, index * 3, array[index + 1]);
    for (item == 3) {
        //undefine for item = 3
    }
    else {
    return item * 2;           //we can return anything in an new array
}
})
console.log(output);







//findIndex() - it return the index of the perticular first  items for which the given condition is true. If the given condition is 'false', it returns -1.
const student = [                                //object Array
    {
        name: 'Aman',
        weight: 60
    },
    {
        name: 'Bansi',
        weight: 55
    },
    {
        name: 'Chirag',
        weight: 66
    },
    {
        name: 'Dhanno',
        weight: 59
    },
    {
        name: 'Elvish',
        weight: 70
    },
    {
        name: 'Girdhari',
        weight: 75
    }
]

const index = student.findIndex((item) => {
    if (item.weight > 60) {
        return true;
    }
    else {
        return false;
    }
})

//OR

const index = student.findIndex((item) => {
    return item.weight > 60 ? true : false           //turnary operator
})

//OR

const index = student.findIndex((item) => {
    return item.weight > 60
})

//OR

const index = student.findIndex((item) => item.weight > 60)               //Arrow function is self return function, it return the value written in one line

const index = student.findIndex((item) => item.weight > 75)          //If the given condition is 'false', it returns -1.
if (index === -1) {
    console.log("Not Found");
}
else {
    console.log("Founs");

}
console.log(index);






//find() - instate of returning index, it returns the value of first array item for which the given condition is true.
const person = student.find((item) => item.weight > 60)

console.log(person)

const person = student.find((item) =>item.weight > 75 )                  //if the given condition does not meet, it return 'undefine'.
console.log(person)



//filter() - instated of only first value, if we want all the values for which the given condition meets.
const overWeight = student.find((item) =>item.weight > 65)
console.log(overWeight)





















