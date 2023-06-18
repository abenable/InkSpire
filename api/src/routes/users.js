import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';
import { ApiError } from '../controllers/errorController.js';
import {
  forgotpassword,
  protect,
  resetpassword,
  restrictTo,
  updatepassword,
} from '../controllers/authController.js';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_PRIVATE_KEY);
};

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { username, email, role, password } = req.body;

    const checkemail = await UserModel.findOne({ email });
    if (checkemail) {
      return res.json({
        message: 'Email already taken. Use a different one.',
      });
    }
    const newUser = new UserModel({
      username,
      email,
      role,
      password,
    });
    await newUser.save();

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully.',
      User: newUser,
      token,
    });
  } catch (error) {
    console.error(error);
    next(new ApiError(500, 'internal server error'));
  }
});

router.post('/admin/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const checkemail = await UserModel.findOne({ email });
    if (checkemail) {
      return next(
        new ApiError(401, 'Email already taken. Use a different one.')
      );
    }
    const newUser = new UserModel({
      email,
      role: 'admin',
      password,
    });
    await newUser.save();

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully.',
      User: newUser,
      token,
    });
  } catch (error) {
    console.error(error);
    next(new ApiError(500, 'internal server error'));
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //Check if user with this email exists....
    const user = await UserModel.findOne({ email }).select('+password');
    if (!user) {
      return next(new ApiError(401, 'User doesnt exist........'));
    }
    //Sign the jwt token for the user..
    const token = signToken(user._id);

    //Check if the password entered is correct....
    if (!(await user.correctPassword(password, user.password))) {
      return next(
        new ApiError(401, 'Incorrect password. Check it and try again.')
      );
    }

    //All correct
    const currUser = await UserModel.findOne(user._id);
    res.status(200).json({
      status: 'success',
      message: user.username
        ? `Logged in as ${user.username}`
        : 'Logged in as admin',
      token,
      UserId: user._id,
    });
  } catch (error) {
    return next(new ApiError(500, 'There was no error'));
  }
});

router.get('/users', protect, restrictTo('admin'), async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

router.delete('/users', protect, restrictTo('admin'), async (req, res) => {
  const users = await UserModel.deleteMany({ role: 'user' });
  res.json(users);
});

router.post('/users', async (req, res) => {
  const users = await UserModel.create(req.body);
  res.json(users);
});

router.post('/forgotpassword', forgotpassword);
router.post('/updatepassword', protect, updatepassword);
router.patch('/resetpassword/:token', resetpassword);

export { router as userRouter };
