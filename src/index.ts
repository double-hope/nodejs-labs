import * as http from 'http';
import { requestHandler } from './handlers/request-handler';
import { readHandler } from './handlers/read-handler';
import path from 'path';
import { newsDTO } from './common/dto/newsDto';

const port = 3001;
const news : newsDTO[] = [];

const basePath = path.resolve();

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>dd</h1>');
 
    requestHandler().then(res => {
        readHandler(basePath).then(async res => {
            res.forEach(data => news.push(JSON.parse(data)));
        });
    }).catch(err => console.log(err));

    (await function() {
        news.map(data => {
            response.write(`<h3>${data.name}</h3>`)
        })
    }) ()

    response.end();
});

server.listen(port);