 //Destructure in Array:
const arr = [1, 2, 3, 4, 5];
const[x, y] = arr;
console.log(x, y);

 //Destructuring in object:
const obj = { name : 'Chetan',
              address : {
                  city : 'Jaipur'
              },
              arr : [1, 2, 3]
}

// const {name, address:{city}, arr:[x], gender = "Male"} = obj;  //destructuring
// console.log(name, city, x, gender);

const name = "Simran";    //what if we have already a variable with 'name' is available in the current scope
const {name:myName} = obj;   //allising + destructuring >> change the variable name with myName
console.log(name, myName);



