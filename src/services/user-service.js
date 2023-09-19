import User from '../models/User.js';

export const getUsers = async () => {
  return await User.find();
};

export const getUser = async (id) => {
  return await User.findById(id);
};

export const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

export const updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, user);
};

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};