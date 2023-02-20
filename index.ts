import * as http from 'http';
import request from 'request';
import * as cheerio from 'cheerio';

const page = 1;
const url = `https://www.factcheck.org/page/${page}`
const port = 3001;
 
const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  response.end('Hello world!');
});
const articles: any[] = [];

request(url, {json: true}, (err, res, body) => {
  if (err) { return console.log(err); }
  
  const $ = cheerio.load(body);

  $('article').each((i, el) => {
    console.log($(el).html());
  });
  
});

server.listen(port);