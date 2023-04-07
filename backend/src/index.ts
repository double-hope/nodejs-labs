import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { errorHandler } from './middlewares';
import { root } from './routes';
import { goods } from './routes/api';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const whitelist = ['http://127.0.0.1:3000', 'http://127.0.0.1:3001'];
const corsOptions: cors.CorsOptions = {
  methods: 'GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE',
  origin: (origin, callback) => {
    if(!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', root);
app.use('/goods', goods);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
