import express from 'express';

const endpointLogger = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    console.log(req.originalUrl);
    next();
};

export default endpointLogger;
