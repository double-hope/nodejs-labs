import cors from 'cors';

const whitelist = [
    'http://127.0.0.1:3000', 
    'http://127.0.0.1:3001'
];

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

export { corsOptions };