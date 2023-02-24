import fs from 'fs';

let news : string[] = [];
const promises : Promise<any>[] = [];
type Unpromise<T> = T extends Promise<infer U> ? U : never;

const readHandler = (basePath: string) : Unpromise<Promise<Promise<string[]>>> => {
    return new Promise((resolve, reject) => {
        const length = fs.readdirSync(`${basePath}/news`).length;

        for(let i = 0; i < length; i++){
            news.push(fs.readdirSync(`${basePath}/news/news№${i}`).toString());

            promises.push(new Promise((resolve, reject) => {
                const file = fs.readFileSync(`${basePath}/news/news№${i}/${news[i]}`, 'utf8');                
                !!file ? resolve(file): reject('Error while reading file');
            }));
        }
        
        Promise.all(promises).then((res)=>{
            resolve(res);
        });
    });
}

export { readHandler };