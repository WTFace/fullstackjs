import sharp, { Sharp } from 'sharp';

const processImg = (name: string, w: number, h: number): string => {
    const outFile = `public/resized/${name}-${w}${h}.jpeg`;
    // check if the file exists
    

    sharp(`public/original/${name}.jpeg`)
        .resize(w, h)
        .toFile(outFile, function (err) {
            if (err) {
                console.log(err);
                return 'failed';
            }
        });
    return outFile;
};

export default processImg;
