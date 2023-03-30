console.log("Let's get to know the document!")

console.log(document);

let body = document.body;
console.log(document.body);
console.dir(document.body);

// Add CSS inline style via the .style property
body.style.backgroundColor = 'dodgerblue';


let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

navBar.className = 'nabar bg-primary-subtle';


// Popular Methods with the Document Object

// Document get Methods

// document.getElementById('id')
// return the first element with an id that matches the string id
let topHeader = document.getElementById('top-header');
console.log(topHeader);

// document.getElementsByTagName('tagName')
// return an HTMLcollection (Array-like) of all elements that match that tag name
let buttons = document.getElementsByTagName('button')
console.log(buttons)

// document.getElementsByClassName('className')
// return an HTMLcollection (Array-like) of all elements that match that
let rows = document.getElementsByClassName('row')
console.log(rows)

// Query Selector
// document.querySelector('selector')
// returns the first element that matches the specified selector
let firstCol = document.querySelector('.col-2');
console.log(firstCol);

let divInNav = document.querySelector('nav > div'); // Combinator selector- child selector
console.log(divInNav);

// document.querySelectorAll('selector')
// returns a NodeList (Array-like) of elements that match the specified selector
let buttonsInRow = document.querySelectorAll('.row button');
console.log(buttonsInRow);


// Create Elements

// document.createElement('tagName');
// Create and element with the given tagName
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header created by JavaScript';
newHeader.className = 'text-center text-danger';
console.log(newHeader);
// body.append(newHeader);
// topHeader.after(newHeader);
// topHeader.before(newHeader);

// Create New Button
let newButton = document.createElement('button');
newButton.innerHTML = 'New Button';

//Append the button to the row of buttons
rows[1].append(newButton);


console.log(buttons);

// NodeList is static and will not recognize the added button
console.log()


