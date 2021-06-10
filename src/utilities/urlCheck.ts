import express from 'express';
import { access } from 'fs';

const urlCheck = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    const width = req.query.width;
    const height = req.query.height;
    console.log(req.originalUrl);
    if (!req.query.filename) {
        res.status(400).send('need to pass filename');
    }
    if (isNaN(+(width as string)) || isNaN(+(height as string))) {
        res.status(400).send('width and height should be number');
    }
    access(`public/original/${req.query.filename}.jpeg`, (err) => {
        if (err) {
            res.status(404).send('no such file exists!');
        }
    });

    next();
};

export default urlCheck;
