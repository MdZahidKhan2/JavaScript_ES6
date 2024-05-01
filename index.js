//=============== Module ==========
// import {NewMessage} from "./message.js";
// console.log(NewMessage);

//===============Class Constructor==========
class book{
    constructor(bookName, prince){
        this.BookName = bookName;
        this.Prince = prince;
    }
}
let bookDetails = new book('PR IT', '500 TK');
console.log(bookDetails)


//===============Class Expression==========
let person = class {
    constructor(name,age,profe){
        this.name = name;
        this.age = age;
        this.profe = profe;
    }
}
let newPerson = new person("zahid", "25", "Teacher");
console.log(newPerson)
console.log(newPerson.age)


//===============Static Methods==========
class Books{
    static golpo() {
        console.log('hey Zahid');
    }
}
Books.golpo()



//===============Inheritance & Super==========
class parent{
    Assets1(){
        console.log('ata amer dader assets');
    }
    Assets2(){
        console.log('ata amer baber assets');
    }
}
class Ami extends parent{
    MyAssets(){
        super.Assets1();
        super.Assets2();
    }
}

let MyAssets = new Ami();
MyAssets.MyAssets();

//===============Inheritance & Super (2)==========
class parent1{
    Assets3(){
        console.log('ata amer dader 1 assets');
    }
    Assets4(){
        console.log('ata amer baber 1 assets');
    }
}
class Ami1 extends parent1{
 
}
let MyAssets1 = new Ami1();
MyAssets1.Assets3();
MyAssets1.Assets4();


//=============== Arrow Function Expiration==========
let fun1 = function (x,y){
    return x + y;
}
console.log(fun1(30,50))


let fun2 = (x,y) => {
    return x + y;
}
console.log(fun2(50,50))



let fun3 = (x,y) => x + y;
console.log(fun3(50,10))


//=============== Symbol==============
let sum = Symbol('zahid');
let sum1 = Symbol('zahid');

console.log(sum===sum1); // Result all tha time not same Like: now False.


//=============== JS Strict Mode ==============
'use strict'; // when use strict That time declare what cindy of mistake my code.
let hi = 'ok';
console.log(hi); 


//=============== ForEach ==============
let prince = [2,4,5,7,10]
for(let i=0; i<prince.length; i++){
    console.log(prince[i])
} // For Loop

let prince1 = [2,4,5,7,10,20]
for(zahid of prince1){
    console.log(zahid)
} // Of Loop


let prince2 = [2,5,6,8,41]
prince2.forEach(zahid5)
function zahid5(z){
    console.log(z)
} // forEach Loop


let prince3 = [2,5,6,8,41,55]
prince3.forEach((x)=> console.log(x)) // forEach Loop


