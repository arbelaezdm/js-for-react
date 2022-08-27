// ================FUNCTIONS====================
// functional programming
function hi () {
    return function () {
        return 'hola mundo'
    }
}

console.log(hi()());

let hello = () => {
    console.log('Hello');
}

hello()

// ================FUNCTIONS PARAMETERS====================
//one parameters
function f1(p1) {
    return 'hola ' + p1
}

console.log(f1('Diego'));

function add (x, y) {
    return x + y
}

console.log(add(2, 3));

// ================DEFAULT PARAMETERS==================
function sub ( a=0, b=0) {
    return a - b
}

console.log(sub(4,2));
console.log(sub(4));

// ================OBJECTS==================
const user = {
    name: 'Diego',
    lastname: 'Arbelaez',
    adress: {
        country: 'Colombia',
        city: 'Medellin'
    },
    friends: ['Sergio', 'Dario', 'Pingo'],
    active: true,
    sendMail: function () {
        return 'sending email'
    },
    greeting() {
        return 'Hello'
    }
}

console.log(user);
console.log(user.name);
console.log(user.adress);
console.log(user.adress.city);
console.log(user.friends);
console.log(user.friends[1]);
console.log(user.sendMail);
console.log(user.sendMail());
console.log(user.greeting);
console.log(user.greeting());

// ================SHORTHAND PROPERTY NAMES==================
const name = 'laptop'
const price = 3000

//the variables names and the object properties must be the same
const newProduct = {
    name,
    price
}

console.log('new product is', newProduct);