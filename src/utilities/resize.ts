import sharp from 'sharp';

const processImg = async (
    name: string,
    w: number,
    h: number
): Promise<string> => {
    const outFile = `public/resized/${name}-${w}${h}.jpeg`;
    const value = await sharp(`public/original/${name}.jpeg`)
        .resize(+w, +h)
        .toFile(outFile)
        .then(() => outFile)
        .catch(() => 'failed');
    return value;
};

export default processImg;
