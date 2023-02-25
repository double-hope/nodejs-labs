import request from 'request';
import * as cheerio from 'cheerio';
import fs from 'fs';

const page = 1;
const url = `https://www.factcheck.org/page/${page}`

let links: any[] = [];

const requestHandler = () => {
    return new Promise((resolve, reject) => {
        request(url, {json: true}, (err, res, body) => {
            if (err)
                return console.log(err);

            const $ = cheerio.load(body);

            $('article a').each((i, el) => {
                links.push($(el).attr('href'));
            });

            links = [...new Set(links)];

            links.forEach((link, key) => {
                request(link, {json:true}, (err, res, body) => {
                    if(err)
                        return console.log(err);

                    const $ = cheerio.load(body);
                    const name = $('.entry-title').text();
                    let text = '';

                    $('.entry-content p').each((key, elem) => {
                        text += $(elem).text();
                    });

                    const article = {
                        name,
                        text,
                    }

                    try {
                        fs.writeFileSync(`./news/news№${key}/${article.name}.json`, JSON.stringify(article));
                    } catch(err) {
                        reject(err);
                    }

                    try {
                        fs.mkdirSync(`./news/news№${key}`, {recursive: true});
                    } catch(err) {
                        reject(err);
                    }
                    
                    resolve('File saved correctly');

                });
            })

      });
  });
};

export{ requestHandler };