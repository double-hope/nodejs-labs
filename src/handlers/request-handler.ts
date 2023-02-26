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
                            fs.mkdirSync(`./news/news№${key+1}`, {recursive: true});
                        } catch(err) {
                            reject("Error: creating dirs");
                        }

                        try {
                            fs.writeFileSync(`./news/news№${key+1}/${article.name}.json`, JSON.stringify(article));
                        } catch(err) {
                            reject("Error: writing news");
                        }

                        resolve('File saved correctly');

                    });
                })

            });
  });
};

export{ requestHandler };