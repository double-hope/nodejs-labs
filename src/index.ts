import * as http from 'http';
import { requestHandler } from './handlers/request-handler';
import { readHandler } from './handlers/read-handler';
import path from 'path';
import { newsDTO } from './common/dto/newsDto';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
let news : newsDTO[] = [];

const basePath = path.resolve();


const makeRequest = () => {
    requestHandler().then(res => {
        readHandler(basePath).then(res => {
            news = [];
            res.forEach(data => news.push(JSON.parse(data)));
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));

    setTimeout(makeRequest, 60000);
};

const server = http.createServer((resquest, response) => {
    response.setHeader('Content-Type', 'text/html');

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

    news.map((data, key) => {
        response.write(`<h3 onclick="changeVisibility(${key});" style="cursor: pointer">${data.name}</h3>`)
        response.write(`<p id="text${key}" style="display: none">${data.text}</p>`)
    })

    response.end();
});

makeRequest();
server.listen(port);