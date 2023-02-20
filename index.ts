import * as http from 'http';
import request from 'request';
import * as cheerio from 'cheerio';

const page = 1;
const url = `https://www.factcheck.org/page/${page}`
const port = 3001;
 
const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  response.end('Hello world!');
});

request(url, {json: true}, (err, res, body) => {
  if (err) { return console.log(err); }
  
  const $ = cheerio.load(body);

  let links:string[] = [];

  $('article a').each((i, el) => {
    links.push($(el).attr("href"));
  });
  let unique = [... new Set(links)];
  console.log(unique);
  
});

server.listen(port);