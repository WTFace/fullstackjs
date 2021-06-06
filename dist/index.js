"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = express_1.default();
var router = express_1.default.Router();
var port = 3000;
router.use('/user', logger_1.default, function (req, res, next) {
    next();
    res.send('user page');
});
app.use('/', router);
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
