import { fileURLToPath } from 'url';
import path from 'path';
import rateLimit from 'express-rate-limit';

export const getDirname = (moduleUrl) => {
  return path.dirname(fileURLToPath(moduleUrl));
};

export const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour',
});
