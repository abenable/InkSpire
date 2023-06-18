import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';

import { userRouter } from './routes/users.js';
import { ErrorHandler } from './controllers/errorController.js';

const port = process.env.PORT;
const uri = process.env.URI;
const local_uri = process.env.LOCAL_URI;

const app = express();
app.use(cors());
app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour',
});
app.use('/', limiter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use('/account', userRouter);
app.use(ErrorHandler);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  try {
    await mongoose.connect(local_uri);
    console.log('Connected to database.');
  } catch (error) {
    console.error(error);
  }
});
