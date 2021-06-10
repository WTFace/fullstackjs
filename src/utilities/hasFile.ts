import { accessSync } from 'fs';

const hasFile = (pre: string, name: string): boolean => {
    try {
        accessSync(`public/${pre}/${name}.jpeg`);
        return true;
    } catch (err) {
        return false;
    }
};

export default hasFile;
