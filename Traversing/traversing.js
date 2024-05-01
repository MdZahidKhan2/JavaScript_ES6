let parentDiv = document.querySelector('.parent');

// console.log(parentDiv.children); // Child Call Good 

// console.log(parentDiv.childNodes); // all Element and Child Call

// console.log(parentDiv.lastChild); // showing Tex not perfect last Child Call

console.log(parentDiv.lastElementChild); // This is Traversing 



let MiddleChildDiv = document.querySelector('.MiddleChild');

console.log(MiddleChildDiv.previousElementSibling);

console.log(MiddleChildDiv.nextElementSibling);