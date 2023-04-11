import cors from 'cors';
import { allowedOrigins } from './allowedOrigins';

const corsOptions: cors.CorsOptions = {
  methods: 'GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE',
  origin: (origin, callback) => {
    if(!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

export { corsOptions };