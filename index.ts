import * as http from 'http';
import request from 'request';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

const page = 1;
const url = `https://www.factcheck.org/page/${page}`
const port = 3001;

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.end('Hello world!');
});

//setInterval(() => {
    request(url, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }

        const $ = cheerio.load(body);

        let links: string[] = [];

        $('article a').each((i, el) => {
            links.push($(el).attr("href"));
        });
        let unique = [...new Set(links)];

        for(let i in unique){
            request(unique[i],{json:true}, (err, res, body)=>{
                if(err)
                    return console.log(err);

                const $ = cheerio.load(body);
                const article = $("*").html();

                fs.mkdir("./news/news№"+i, {recursive: true} ,(err)=>{
                    if(err) console.log(err);
                });

                fs.writeFile(`./news/news№${i}/index.html`, article, function (err){
                    if(err) console.log(err);

                })
            });


        }

    });
//}, 10);

server.listen(port);