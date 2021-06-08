import express from 'express';
import endpointLogger from './utilities/logger';
import processImg from './utilities/resize';

const app = express();
const router = express.Router();
const port = 3000;
app.use(express.static('public'));

router.use('/img', endpointLogger, function (req, res, next) {
    next();
    const name = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;

    const newFile = processImg(
        name as string,
        +(width as string),
        +(height as string)
    );
    const content =
        newFile === 'failed'
            ? '<h2>failed to resize</h2>'
            : `<img src="${newFile.split('public/')[1]}" alt="">`;

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>${content}</body>
    </html>`;
    res.set('Content-Type', 'text/html');
    res.send(html);
});

app.use('/', router);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
