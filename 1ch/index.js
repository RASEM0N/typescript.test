"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"]('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.data; })
    .then(function (json) { return console.log(json); });
console.log("ld");
