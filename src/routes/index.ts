import express from 'express';
import urlCheck from '../utilities/urlCheck';
import processImg from '../utilities/resize';
import hasFile from '../utilities/hasFile';

const routes = express.Router();

routes.get(
    '/img',
    urlCheck,
    async function (
        req: express.Request,
        res: express.Response,
        next: Function
    ): Promise<void> {
        const name = req.query.filename;
        const width = req.query.width;
        const height = req.query.height;
        const resizedPath = `${name}-${width}${height}`;

        const makeHtml = (name: string) =>
            `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body><img src="resized/${name}.jpeg" alt=""></body></html>`;

        if (hasFile('resized', resizedPath)) {
            res.status(200).send(makeHtml(resizedPath));
        } else {
            await processImg(
                name as string,
                Number(width as string),
                Number(height as string)
            ).then((data) => {
                data === 'failed' && res.status(500).send('failed to resize');
                res.status(200).send(makeHtml(resizedPath));
            });
        }
    }
);

export default routes;
