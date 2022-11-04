fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  // .then(json => console.log(typeof(json)))
  .then(json => document.write(json[3]))

