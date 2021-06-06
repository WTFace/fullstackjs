
import express from 'express';
import endpointLogger from './utilities/logger';
var app = express();
var router = express.Router();
const port = 3000;

router.use('/user', endpointLogger, function (req, res, next) {
    next();
    res.send('user page');
});

app.use('/', router);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
