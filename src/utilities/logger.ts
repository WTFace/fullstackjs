import express from 'express';

const endpointLogger = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    console.log(req.originalUrl);
    if (!req.query.filename) {
        res.send('need to pass filename');
    }
    next();
};

export default endpointLogger;
