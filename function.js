//================ Default Function Like ES5 ======
function say(message){
    message = typeof message!== "undefined" ? message:'say hi';
    console.log(message)
};
say('Hello Zahid')


//================ Default Function Like ES6 ======
function say(message = "zahid"){
    console.log(message)
};
say("Moshahid")


//================ Rest Parameters (ES6) ======
function rest(a,b,...zahid){
    console.log(a,b,zahid);
}
rest(1,2,3,4,5,6,7,8)


//================ Spread Operator (ES6) ======
const array1 = [1,2,3];
const array2 = [...array1,4,5,6]; // (...array1) This is Spread Operator Call Function
console.log(array2)


//========= Object Literals Syntax Extensions (ES6) ======
function say(message,name){
    return {
        message,    // Before message:message  (ES5)
        name        // Before name:name  (ES5)
    }
}
console.log(say("are zahid", "Yes i'm Zahid"))


//===================For of Loop & For in Loop (ES6) ======
// ======== (ES5)===
for(let i= 0; i<5; i++){
    console.log(i) // Result 0 1 2 3 4
}

// ======== OF (ES6)===
const array = [1,2,3,4,5]

for(NewArray of array){
    console.log(NewArray) //Result 1 2 3 4 5
}

// ======== IN (ES6)===
const array4 = [6,7,8,9,10]

for(NewArray4 in array){
    console.log(NewArray4) //Result 0 1 2 3 4
}



//=================== Template Strings (ES6) ======
const strings = `'zahid' 'moshahid' 'Riad'`
console.log(strings)

//===== (ES5)====
const name = `zahid`;
const age = `25`;

console.log("My Name is " + name + " & I Am " + age + " Year's Old.")

//===== (ES6)====
const Myname = `Moshahid`;
const Myage = `26`;

console.log(`My Name is ${Myname} & I Am ${Myage} Year's Old.`)



//=================== Array Destructuring (ES6) ======
const Array5 = [1,2,3,4,5,6,7,8,9,10];
let [a,s,c,...z] = Array5;
console.log(a,s,c,z);
console.log (z)

//=================== Object Destructuring (ES6) ======
const Obj = {
    name2: 'Moshahid',
    age2:25,
    id:5,
}
const {name2,age2,id} = Obj;

console.log(Obj)
console.log(age2)
console.log(id,name2,age2)


