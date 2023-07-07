import { Model, Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

type UserModel = Model<IUser, object>;

const User = model<IUser, UserModel>('User', userSchema);

export default User;

/* 11-8 */
