"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpointLogger = function (req, res, next) {
    console.log(req.originalUrl);
    next();
};
exports.default = endpointLogger;
