import express from 'express';
import { access } from 'fs';

const endpointLogger = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    console.log(req.originalUrl);
    if (!req.query.filename) {
        res.send('need to pass filename');
    }
    access(`public/original/${req.query.filename}.jpeg`, (err) => {
        if (err) {
            res.send('no such file exists!');
        }
    });

    next();
};

export default endpointLogger;
