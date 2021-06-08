import express from 'express';
import endpointLogger from './utilities/logger';
import path from 'path';

const app = express();
const router = express.Router();
const port = 3000;
app.use(express.static('public'));

router.use('/img', endpointLogger, function (req, res, next) {
    next();
    // const root = path.join(__dirname, '../public');
    const name = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;

    if (!name) {
        res.send('need to pass filename');
    }

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <img src="original/${name}.jpeg" alt="" width="${width}" height="${height}">
    </body>
    </html>`;
    res.set('Content-Type', 'text/html');
    res.send(html);
});

app.use('/', router);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
