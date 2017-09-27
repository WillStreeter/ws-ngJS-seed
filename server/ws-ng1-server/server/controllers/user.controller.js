import * as UserService from '../services/user.services';

import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
console.log('User.Controller] ---req  id =', id)
      const user =UserService.getUser(id)
    // .then((user) => {
    //   req.user = user; // eslint-disable-line no-param-reassign
    //   return next();
    // })
    // .catch(e => next(e));

    if(user){
     req.user = user;
     return next();
    }else{
         const err = new APIError('No such User error', httpStatus.NOT_FOUND, true);
       next(err);
    }
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
console.log('User.Controller] -get --req')
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req, res, next) {
  // const user = new User({
  //   username: req.body.username,
  //   mobileNumber: req.body.mobileNumber
  // });
  //
  // user.save()
  //   .then(savedUser => res.json(savedUser))
  //   .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
  // const user = req.user;
  // user.username = req.body.username;
  // user.mobileNumber = req.body.mobileNumber;
  //
  // user.save()
  //   .then(savedUser => res.json(savedUser))
  //   .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  // const { limit = 50, skip = 0 } = req.query;
  // User.list({ limit, skip })
  //   .then(users => res.json(users))
  //   .catch(e => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
//   const user = req.user;
//   user.remove()
//     .then(deletedUser => res.json(deletedUser))
//     .catch(e => next(e));
 }

export default { load, get, create, update, list, remove };
