// console.log("Hello Node!!")

const axios = require("axios")

axios.get("https://jsonplaceholder.typicode.com/todos/15")
    .then(response => console.log(response.data))