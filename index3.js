// ================ADDING HTML TO DOM==================
// const contacts = {
//     name: 'Diego',
//     age: 38
// }

// function printInfo (contacts) {
//     return '<h1>Hola ' + contacts.name + '</h1>'
// }

// console.log(printInfo(contacts));

// document.body.innerHTML = printInfo(contacts)

// ================OBJECT DESTRUCTURING==================
// const products = {
//     name: 'Iphone',
//     price: 1400
// }

// //destructuring from parameter of the function
// function printProducts ({name}) {
//     return '<h1>Este es un ' + name + '</h1>'
// }

// console.log(printProducts(contacts));

// document.body.innerHTML = printProducts(products)

// ================OBJECT DESTRUCTURING==================
const categories = {
  brand: "Apple",
  color: "Azul",
};

//destructuring object
function printCategories(categories) {
  const { brand, color } = categories;

  return "<h1>Esta es la marca " + brand + "</h1>";
}

console.log(printCategories(categories));

document.body.innerHTML = printCategories(categories);

// ================ANONYMUS FUNCTIONS==================
console.log(
  (function () {
    return "Starting...";
  })()
);

//the anonymus functios are commonly used in events
const button = document.createElement("button");
button.innerText = "Click Me";

button.addEventListener("click", function () {
  alert("Clicked");
});

document.body.append(button);

//another way to create the same event

function handleClick() {
  alert("Button 2 Clicked");
}

const button2 = document.createElement("button");
button2.innerText = "Button 2";

button2.addEventListener("click", handleClick);

document.body.append(button2);

// ================ARROW FUNCTIONS==================
const add = (x, y) => {
  return x + 7;
};

// ================INLINE ARROW FUNCTIONS==================
const showText = () => "Hola mundo";
console.log(showText());
const showNumber = () => 22;
console.log(showNumber());
const showBoolean = () => true;
console.log(showBoolean());
const showArray = () => [1, 2, 3];
console.log(showArray());

//show an object with need to add (). This return the object
const showObject = () => ({
  name: "Diego",
  lastname: "Arbelaez",
});
console.log(showObject());

// ================RETURN IN FUNCTIONS==================
const isAuthorized = false;

function handleClickBtn3() {
  if (isAuthorized) {
    return alert("esta autorizado");
  }
  alert("no esta autorizado");
}

const button3 = document.createElement("button");
button3.innerText = "Button 3";

button3.addEventListener("click", handleClickBtn3);

document.body.append(button3);

// ================STRING LITERALS - INTERPOLATION==================
function handleClickBtn3() {
  return alert("esta autorizado");
}

//define variables
const background = 'blue'
const color = 'white'

//interpolation
const result = `estos son esilos ${background} ${color}`
console.log(result);

const button4 = document.createElement("button");
button4.innerText = "Button 4";

//styles with string literals
button4.style = `background: ${background}; color:${color}`

button4.addEventListener("click", handleClickBtn3);

document.body.append(button4);

// ================STRING LITERALS WITH TERNARY IF==================
function handleClickBtn5() {
    return alert("boton 5");
  }

  const pass = true
  
  //define variables
  const backgroundOk = 'green'
  const color2 = 'white'
  
  const button5 = document.createElement("button");
  button5.innerText = "Button 5";
  
  //styles with string literals and ternary if
  button5.style = `background: ${pass ? backgroundOk: 'red' }; color:${color2}`
  
  button5.addEventListener("click", handleClickBtn5);
  
  document.body.append(button5);
