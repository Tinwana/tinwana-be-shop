import serverless from 'serverless-http';

import app from '../src/sever.js';


export const handler = serverless(app);
