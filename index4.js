// ================ARRAY METHODS=================
const names = ['Diego', 'Paula', 'Shirly']

//===========for each======================
//usually with name the array variable in plural and in the for each in singular 
//this return each element of the array 
names.forEach(function(name){
    console.log(name);
})

//===========map======================
const lastnames = ['Arbelaez', 'Torres', 'Rendon']
let newLastNames = lastnames.map(function(lastname){
    return lastname
})

console.log(newLastNames);

//===========modifying map======================
const products = ['Iphone', 'Samsung', 'Huawei']
let newProducts = products.map(function(product){
    return `Este es un ${product}`
})

console.log(newProducts);

//===========find======================
//if dont find the element return undefined
const findProduct = products.find((product)=>{
    if(product === 'Iphone') {
        return product
    }
})

console.log(findProduct);

//===========filter======================
const filterProduct = products.filter((product)=>{
    if(product != 'Iphone') {
        return product
    }
})

console.log(filterProduct);

//===========concat======================
const x = ['a', 'b', 'c']
const y = ['d', 'e', 'f']

let concat = x.concat(y)
console.log(concat);
