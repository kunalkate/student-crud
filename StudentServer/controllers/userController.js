
const utils = require('../utils/apiResponse');
const User = require('../models/user'); // Correct import
const { SUCCESS, ERROR, BAD_REQUEST } = require('../constants/httpCodes');
const { request } = require('express');

/**
 * @description Controller function to add a new user
 * @param {Object} request - Express request object
 * @param {Object} response - Express response object
 * @returns {Object} Response JSON object
 */
const addUser = async (request, response) => {
  try {
    const params = request.body;
    const newUser = new User(params); // Create a new User instance
    const addedUser = await newUser.save(); // Save the User to the database

    if (addedUser) {
      return utils.sendResponse(response, false, addedUser, 'User added successfully.', SUCCESS);
    } else {
      return utils.sendResponse(response, true, {}, 'User not added', BAD_REQUEST);
    }
  } catch (error) {
    console.error('Error adding user:', error); // Log the error for debugging
    return utils.sendResponse(response, true, {}, 'Internal Server Error.', ERROR);
  }
};
const getUser = async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await User.findById(userId);

    if (user) {
      return utils.sendResponse(response, false, user, 'User retrieved successfully.', SUCCESS);
    } else {
      return utils.sendResponse(response, true, {}, 'User not found', NOT_FOUND);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    return utils.sendResponse(response, true, {}, 'Internal Server Error.', ERROR);
  }
};

const getAllUsers = async (request, response) => {
  try {
    const users = await User.find({});
    return utils.sendResponse(response, false, users, 'Users retrieved successfully.', SUCCESS);
  } catch (error) {
    console.error('Error retrieving users:', error);
    return utils.sendResponse(response, true, {}, 'Internal Server Error.', ERROR);
  }
};

const updateUser = async (request, response) => {
  try {
    const userId = request.params.id;
    const params = request.body;
    const updatedUser = await User.findByIdAndUpdate(userId, params, { new: true });

    if (updatedUser) {
      return utils.sendResponse(response, false, updatedUser, 'User updated successfully.', SUCCESS);
    } else {
      return utils.sendResponse(response, true, {}, 'User not found', NOT_FOUND);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return utils.sendResponse(response, true, {}, 'Internal Server Error.', ERROR);
  }
};

const deleteUser = async (request, response) => {
  try {
    const userId = request.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      return utils.sendResponse(response, false, deletedUser, 'User deleted successfully.', SUCCESS);
    } else {
      return utils.sendResponse(response, true, {}, 'User not found', NOT_FOUND);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return utils.sendResponse(response, true, {}, 'Internal Server Error.', ERROR);
  }
};




module.exports = { addUser,getAllUsers,updateUser,deleteUser,getUser };
