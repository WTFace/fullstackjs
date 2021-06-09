import express from 'express';
import fileCheck from './utilities/fileCheck';
import processImg from './utilities/resize';

const app = express();
const router = express.Router();
const port = 3000;
app.use(express.static('public'));

router.use(
    '/img',
    fileCheck,
    async function (
        req: express.Request,
        res: express.Response,
        next: Function
    ): Promise<void> {
        next();
        const name = req.query.filename;
        const width = req.query.width;
        const height = req.query.height;

        await processImg(
            name as string,
            +(width as string),
            +(height as string)
        )
            .then((filePath) => {
                const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body><img src="${filePath.split('public/')[1]}" alt=""></body>
        </html>`;
                res.set('Content-Type', 'text/html');
                return res.send(html);
            })
            .catch((e) => {
                console.log(e);
            });
    }
);

app.use('/', router);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
