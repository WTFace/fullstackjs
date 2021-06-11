import express from 'express';
import hasFile from './hasFile';

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
    } else if (isNaN(Number(width)) || isNaN(Number(height))) {
        res.status(400).send('width and height should be a number');
    } else if (
        !(
            Number(width) > 0 &&
            Number(height) > 0 &&
            Number(width) < 4000 &&
            Number(width) < 4000
        )
    ) {
        res.status(400).send(
            'width and height should be in range of 1 to 4000'
        );
    } else if (!hasFile('original', req.query.filename as string)) {
        res.status(404).send('no such file exists!');
    } else {
        next();
    }
};

export default urlCheck;
