import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const UsersSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  accountCreatedAt: { type: Date },
  password: { type: String, required: true, select: false },
  passChangedAt: { type: Date, select: false },
  passresettoken: { type: String },
});

UsersSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passChangedAt = Date.now();
  next();
});

UsersSchema.pre('save', async function (next) {
  if (!this.isNew) return next();
  this.accountCreatedAt = Date.now();
  next();
});

UsersSchema.methods.changedPassAfter = function (jwtTimestamp) {
  if (this.passChangedAt) {
    const changedTimestamp = parseInt(this.passChangedAt.getTime() / 1000, 10);
    return jwtTimestamp < changedTimestamp;
  }
  return false;
};

UsersSchema.methods.correctPassword = async function (password, savedPassword) {
  return await bcrypt.compare(password, savedPassword);
};

UsersSchema.methods.createpassresetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passresettoken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  return resetToken;
};

export const UserModel = mongoose.model('users', UsersSchema);
