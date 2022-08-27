// ================DOM HANDLING==================
const title = document.createElement('h1')
title.innerText = 'Hola mundo'
document.body.append(title)


//create a button
const button = document.createElement('button')
button.innerText = 'Click'
document.body.append(button)


// ================EVENT HANDLERS==================
const button2 = document.createElement('button')
button2.innerText = ('Submit')
document.body.append(button2)
// button2.addEventListener('click', () => {alert('clickeaste el boton');})
button2.addEventListener('click', () => {
    title.innerText = 'Texto actualizado con JS'
    alert('hiciste click en el boton')
})
