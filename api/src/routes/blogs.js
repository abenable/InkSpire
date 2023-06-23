import express from 'express';
import { ApiError } from '../controllers/errorController.js';
import { BlogModel } from '../models/blogs.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

router.post('/add', protect, async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const blog = await BlogModel.create({
      title,
      content,
      author_Id: req.user.id,
    });

    res.status(201).json({
      status: 'success',
      message: 'Blog created successfully.',
      data: blog,
    });
  } catch (error) {
    console.error(error);
    next(new ApiError(500, 'internal server error'));
  }
});
router.get('/all', async (req, res, next) => {
  try {
    const blogs = await BlogModel.find();
    res.status(201).render('all_blogs', {
      title: 'All blogs',
      blogs,
    });
  } catch (error) {
    console.error(error);
    next(new ApiError(500, 'internal server error'));
  }
});
router.delete('/delete', protect, async (req, res, next) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!req.user.id == blog.author_Id || req.user.role !== 'admin') {
      return new ApiError(403, 'You are not allowed to perform this action.');
    }
    await BlogModel.deleteOne({ id: blog._id });
    res.status(200).json({
      status: 'success',
      message: 'Blog deleted successfully..',
    });
  } catch (error) {
    console.error(error);
    next(new ApiError(500, 'Internal server error.'));
  }
});

export { router as blogRouter };
