import fs from 'fs';
import {log} from "util";

type Unpromise<T> = T extends Promise<infer U> ? U : never;

const readHandler = (basePath: string) : Unpromise<Promise<Promise<string[]>>> => {
    return new Promise((resolve, reject) => {

        let news : string[] = [];
        let promises : Promise<any>[] = [];

        try{
            fs.readdirSync(`${basePath}/news`).forEach((elem, key) => {
                news.push(fs.readdirSync(`${basePath}/news/news№${key}`).toString());

                promises.push(new Promise((resolve, reject) => {
                    const file = fs.readFileSync(`${basePath}/news/news№${key}/${news[key]}`, 'utf8');
                    !!file ? resolve(file): reject('Error while reading file');
                }));
            });
        } catch (err){
            reject("Error: reading news");
        }
        
        Promise.all(promises).then((res)=>{
            resolve(res);
        }).catch(err => reject("WTF"));
    });
}

export { readHandler };