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
 
    requestHandler().then(res => {        
        readHandler(basePath).then(async res => {
            res.forEach(data => news.push(JSON.parse(data)));
        })
        .catch(err => console.log(err));
    }).catch(err => console.log(err));

    response.write(`
        <script>
            const changeVisibility = (i) => {
                const text = document.getElementById(` + '`text${i}`' +`); 
                if(text?.style.display ==="none")
                    text.style.display = "block";
                else if(text?.style.display === "block")
                    text.style.display = "none";
            }
        </script>
    `);

    (await function() {
        news.map((data, key) => {
            response.write(`<h3 onclick="changeVisibility(${key});" style="cursor: pointer">${data.name}</h3>`)
            response.write(`<p id="text${key}" style="display: none">${data.text}</p>`)
        })
    }) ()

    response.end();
});

server.listen(port);