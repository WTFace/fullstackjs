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
app.use(express_1.default.static('public'));
router.use('/img', logger_1.default, function (req, res, next) {
    next();
    // const root = path.join(__dirname, '../public');
    var name = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    if (!name) {
        res.send('need to pass filename');
    }
    var html = "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n    </head>\n    <body>\n        <img src=\"original/" + name + ".jpeg\" alt=\"\" width=\"" + width + "\" height=\"" + height + "\">\n    </body>\n    </html>";
    res.set('Content-Type', 'text/html');
    res.send(html);
});
app.use('/', router);
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
