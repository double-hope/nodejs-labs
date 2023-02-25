import fs from 'fs';

let news : string[] = [];
const promises : Promise<any>[] = [];
type Unpromise<T> = T extends Promise<infer U> ? U : never;

const readHandler = (basePath: string) : Unpromise<Promise<Promise<string[]>>> => {
    return new Promise((resolve, reject) => {

        fs.readdirSync(`${basePath}/news`).forEach((elem, key) => {
            news.push(fs.readdirSync(`${basePath}/news/news№${key}`).toString());

            promises.push(new Promise((resolve, reject) => {
                const file = fs.readFileSync(`${basePath}/news/news№${key}/${news[key]}`, 'utf8');                
                !!file ? resolve(file): reject('Error while reading file');
            }));
        })
        
        Promise.all(promises).then((res)=>{
            resolve(res);
        }).catch(err => reject(err));
    });
}

export { readHandler };