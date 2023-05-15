import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { errorHandler, verifyJWT, credentials } from './middlewares';
import { auth, logout, profile, refresh, register, root } from './routes';
import { categories, goods } from './routes/api';
import { corsOptions } from './config';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import docs from './docs';
import {PrismaClient} from '@prisma/client';
import {createClient} from 'redis';

const redisClient = createClient();

dotenv.config();

const app: Express = express();
const client = new PrismaClient();
const port = process.env.PORT || 3001;


app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', root);
app.use('/register', register);
app.use('/auth', auth);
app.use('/refresh', refresh);
app.use('/logout', logout);
app.use('/profile', profile);

// app.use(verifyJWT);
app.use('/goods', goods);
app.use('/categories', categories);

app.use(errorHandler);

app.listen(port, async () => {
  await redisClient.connect();
  console.log(`[server]: Server is running at http://localhost:${port}`);
  
  console.log(`[server]: Docs available at http://localhost:${port}/docs`);
});

export{client, redisClient};
