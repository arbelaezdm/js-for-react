//example with jsonplaceholder web
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(() => {
//     console.log('finalizo la carga');
// })

// console.log('linea 2');

// ==========================================================
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => {
//     console.log(response);
// })

// =============================================================
// const ul = document.createElement("ul");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((element) => {
//       const li = document.createElement("li");
//       li.innerText = element.title;
//       ul.append(li);
//     });
//     document.body.append(ul);
//   });

// =============================================================

const ul = document.createElement("ul");

async function loadData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    ul.append(li);
  });
  document.body.append(ul);
  console.log(data);
}

loadData()
