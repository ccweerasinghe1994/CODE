"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const console_1 = require("console");
const encryptData = (data) => {
    return `encrypted ${data}`;
};
const request = (url, data) => {
    const encrypt = encryptData(data);
    (0, console_1.log)(`sending the ${encrypt} to ${url}`);
};
exports.request = request;
