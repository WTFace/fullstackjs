import sharp from 'sharp';
import { access } from 'fs';

const processImg = async (
    name: string,
    w: number,
    h: number
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const outFile = `public/resized/${name}-${w}${h}.jpeg`;
        // check if the resized file exists
        access(outFile, (err) => {
            if (err) {
                // resize and save if the dimension doesn't exist
                sharp(`public/original/${name}.jpeg`)
                    .resize(w, h)
                    .toFile(outFile, function (err) {
                        if (err) {
                            reject(err);
                        }
                        resolve(outFile);
                    });
            } else {
                resolve(outFile);
            }
        });
    });
};

export default processImg;
