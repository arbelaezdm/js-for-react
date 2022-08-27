// ================SPREAD OPERATOR=================

const x = ['a', 'b', 'c']
const y = ['d', 'e', 'f']

console.log([...x, ...y]);

const users = {
        name: 'Diego',
        age: 38
    }

const address = {
    stret: 'calle 19',
    city: 'Medellin'
}

const userInfo = {...users, ...address}
console.log(userInfo);

// ================OPTIONAL CHAINING=================
const person = {
    name: 'diego',
    city: 'medellin'
}

//only show the value if person.location exist
console.log(person.location?.city);