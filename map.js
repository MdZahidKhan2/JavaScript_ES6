//=============== Map ==============
let prince = [2,5,7,56,4];
let prince1 = [];

prince.forEach(fun)

function fun(y){
    prince1.push(y*2)
}

console.log(prince1) // forEach Function 






let zahid = [2,4,5,6,7];
let zahid1 = zahid.map(myfun)

function myfun(x){
    return x * 2
}
console.log(zahid1) // Map Function


//=============== Filter ==============
let moshahid = [1,2,5,4,5,8,22]
let moshahid1 = moshahid.filter(fly)

function fly(z){
    return z > 5
}
console.log(moshahid1)



//=============== Synchronous Vs Asynchronous ==============
let fun1 = () => {
    console.log('fun1');
}
let fun2 = () => {
    console.log('fun2');
}
let fun3 = () => {
    console.log('fun3');
}

fun1()
fun2()
fun3() // 1 by 1 Output Synchronous



let fun4 = () => {
    console.log('fun4');
}

let LoadingTime = () => {
    console.log('fun5');
}
let fun5 = () => {
    setTimeout(LoadingTime, 2000);
}

let fun6 = () => {
    console.log('fun6');
}

fun4()
fun5()
fun6() // fun5 Output after 2s and show list position ASynchronous


//=============== CallBack and HigherOrder Function ==============
let Display = (something) => {
    console.log(something)
}

let HigherOrderFun = (Name, Class, CallBackFun) => {
    const Details = `My Name is ${Name} & I Read In Class ${Class}`;
    CallBackFun(Details)
}

HigherOrderFun('Zahid','12', Display)



//=============== Error Try Catch Finally  ==============
// try{
//     console.log('Hello Zahid');
//     console.log(num);
// }catch(ZahidError){
//     // console.log(ZahidError.name);
//     // console.log(ZahidError.message);
//     console.log('How are You ?')
// }finally{
//     console.log('Hello Zahid Programmer');
// }

//=============== Error Throw  ==============
try {
    console.log('Hello Zahid');
    // console.log(num);
    let age = 15;
    if (age < 17) {
        throw 'Hello Baby';
    } else if (age > 18) {
        throw 'How are You Md Moshahid Zahid';
    }
} catch (ZahidError) {
    // console.log(ZahidError.name);
    // console.log(ZahidError.message);
    console.log(ZahidError);
} finally {
    console.log('Hello Moshahid Programmer');
}  


//=============== Promise  ==============
let message = true;

let promise = new Promise((resLove,reject)=>{
    if(message){
        resLove([
            {username:'zahid', email:'zahid@gamil.com'},
            {username:'moshahid', email:'moshahid@gamil.com'}
        ])
    }else{
        reject('user is Not Valid');
    }
})
promise.then((s)=>{
    console.log(s)
})
promise.catch((error)=>{
    console.log(error)
})


