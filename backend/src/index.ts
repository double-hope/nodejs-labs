import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { errorHandler } from './middlewares';
import { auth, register, root } from './routes';
import { categories, goods } from './routes/api';
import { corsOptions } from './config';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', root);
app.use('/goods', goods);
app.use('/categories', categories);
app.use('/register', register);
app.use('/auth', auth);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
