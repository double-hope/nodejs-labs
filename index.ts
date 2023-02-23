import * as http from 'http';
import request from 'request';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

const page = 1;
const url = `https://www.factcheck.org/page/${page}`
const port = 3001;

let links: string[] = [];

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>fhrjfk</h1>');
    
    response.end();
});

//setInterval(() => {
    request(url, {json: true}, (err, res, body) => {
        if (err) 
            return console.log(err);

        const $ = cheerio.load(body);

        $('article a').each((i, el) => {
            links.push($(el).attr('href'));
        });

        links = [...new Set(links)];

        links.forEach((link, i) => {
            request(link, {json:true}, (err, res, body)=>{
                if(err)
                    return console.log(err);

                const $ = cheerio.load(body);
                const name = $('.entry-title').text();
                let text = '';

                $('.entry-content p').each((i, el) => {
                    text += $(el).text();
                });

                const article = {
                    name,
                    text,
                }
                
                fs.mkdir(`./news/news№${i}`, {recursive: true} ,(err)=>{
                    if(err) console.log(err);
                });

                fs.writeFile(`./news/news№${i}/${article.name}.json`, JSON.stringify(article), function (err){
                    if(err) console.log(err);
                })
            });
        })

    });
//}, 10);

server.listen(port);