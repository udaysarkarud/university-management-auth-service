import config from '../../../config';
import { IUser } from './user.interface';
import User from './user.model';
import { generateUserId } from './user.utils';

const crateNewUser = async (user: IUser): Promise<IUser | null> => {
  const newUserId = await generateUserId();
  user.id = newUserId;

  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error('Failed to create user');
  }
  return createdUser;
};

export default {
  crateNewUser,
};
