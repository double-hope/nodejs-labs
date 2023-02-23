import * as http from 'http';
import * as fs from 'fs';
import {requestHandler} from "./handlers/request-handler";

const page = 1;
const url = `https://www.factcheck.org/page/${page}`
const port = 3001;

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1></h1>');
    
    requestHandler().then(res => console.log(res)).catch(err => console.log(err));
    
    response.end();
});

server.listen(port);