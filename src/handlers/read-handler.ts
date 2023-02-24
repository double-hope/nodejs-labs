import fs from 'fs';

const readHandler = (path: string) => {
    return new Promise((resolve, reject) => {
        fs.readdir('./news', (err, files) => {
            if (err) return;
            files.map(async file => {
                await fs.readdir(`./news/${file}`, async (err, file) => {
                    if (err) console.log(err);
                    
                    // hhhhh
                });
            });
        });
    });
}

export { readHandler };