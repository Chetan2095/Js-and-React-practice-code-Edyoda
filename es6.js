var x = 3;
var y = "Utkarsh";

let a = 4;

const p = "Albert";

console.log(x, y, a, p);

x = 5;
y = "Riyaz";
a = 10;

// p = "Monika";

console.log(x, y, a, p);

// "var",  "let", "const" : Scoping -

var x = 2;
let y = 3;
const z = 4;

console.log(x, y, z);             //Global Scope:

function abc() {
                                  //Function Scope
    var p = "a";
    let q = "b";
    const r = "c";

    console.log(x, y, z);

    if (y > x) {
                                    //Block scope
        var m = "m";
        let n = "n";
        const o = "o";
        console.log(x, y, z, p, q, r, m, n, o);
    }
    console.log(m);      //"var" keyword is funcational scope variable
    // console.log(n)    // "let" and "const" are keyword is block scope variable
    // console.log(o)

    // console.log(m, n, o)     //Variable created in a block can not be accesed outside it(excapt "var")
}
abc();

// console.log(p, q, r, m, n, o)   //variable created in function and block scope can not to accesed outside of these scopes (except "var")


// hosting var, let, const:
// console.log(x);
// var x;

// console.log(x);
// let x;