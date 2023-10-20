"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const http_1 = require("http");
(0, http_1.get)('http://www.google.com', (response) => {
    response.on('data', (data) => {
        (0, console_1.log)(`Data Chuck is ${data}`);
    });
    response.on('end', () => {
        (0, console_1.log)('No More Data');
    });
});
(0, console_1.log)(require.cache);
