//In Arrays:
const arr = [1, 2, 3, 4, 5, 6];
const[x, y, ...newArr] = arr;
console.log(x, y, newArr);


//In Objects:
obj = {name : "Chetan",
       address : {
           city : "Jaipur",
           pin : 12345
           }, 
       gender : "Male"
       };
       
       const {...obj2} = obj      //spread oprator > spread all the values
       const {name, ...newObj} = obj;  //rest operator > copy the rest values 
console.log(name, newObj, obj2);
