import * as http from 'http';
import { requestHandler } from './handlers/request-handler';
import { readHandler } from './handlers/read-handler';
import path from 'path';
import { newsDTO } from './common/dto/newsDto';
import fs from "fs";

const port = 3001;
let news : newsDTO[] = [];

const basePath = path.resolve();

try{
    fs.rmSync('./news', { recursive: true })
}
catch(err){
    console.log("Error: can't delete folders");
}

setInterval(()=>{
    console.log("Update " + new Date());

    requestHandler().then(async res => {
        readHandler(basePath).then(res => {
            news = [];
            res.forEach(data => news.push(JSON.parse(data)));
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}, 4000);



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

server.listen(port);