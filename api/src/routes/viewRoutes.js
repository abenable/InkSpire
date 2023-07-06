import express from 'express';
import { ApiError } from '../controllers/errorController.js';
import { BlogModel } from '../models/blogs.js';
import { protect } from '../controllers/authController.js';
import {
  allBlogsView,
  homeView,
  loginView,
} from '../controllers/viewController.js';

const router = express.Router();

router.get('/', homeView);
router.get('/all', allBlogsView);
router.get('/login', loginView);

router.all('/*', (req, res, next) => {
  res.status(200).render('404', { title: 'Page not found.' });
});

export { router as viewRouter };
