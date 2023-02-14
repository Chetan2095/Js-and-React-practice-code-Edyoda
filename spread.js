let obj1 = {
    name: "Chetan",
    age: 24
};
// let obj2 = obj1;      //same address with same values
let obj2 = {...obj1}    //different address with same values
obj1.name = "Ajay";  //no change in obj2 due to different address
obj2.pin = 341515;

console.log(obj1, obj2);
