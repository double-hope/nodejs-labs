import * as http from 'http';
import * as fs from 'fs';
import { requestHandler } from './handlers/request-handler';
import { readHandler } from './handlers/read-handler';
import path from 'path';

const page = 1;
const url = `https://www.factcheck.org/page/${page}`
const port = 3001;

let n : number;
const fileNames : string[] = [];

const basePath = path.resolve();

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>dd</h1>');
    
    readHandler(basePath);

    requestHandler().then(res => {
        
    }).catch(err => console.log(err));
    
    await console.log(fileNames);

    if(!!fileNames)
        response.write(`${fileNames.map(i => i)}`);

    response.end();
});

server.listen(port);