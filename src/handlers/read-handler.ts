import fs from 'fs';

let arr:string[] = [];
const promises:any[] = [];

const readHandler = (basePath: string) => {
    return new Promise((resolve, reject) => {
        const length = fs.readdirSync(`${basePath}/news`).length;

        for(let i=0; i<length; i++){
            arr.push(fs.readdirSync(`${basePath}/news/news№${i}`)+"");

            promises.push(new Promise((resolve, reject)=>{
                const file = fs.readFileSync(`${basePath}/news/news№${i}/${arr[i]}`, "utf8");
                !!file ? resolve(file): reject("Error");
            }));

        }
        Promise.all(promises).then((res)=>{
            resolve(res);
        });
    });
}

export { readHandler };