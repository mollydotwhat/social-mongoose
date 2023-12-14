const router = require('express').Router();

// const stuff from controller require(s)
const { allUsers, oneUser, createUser, changeUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

// /api/users

// router.route(etc) part 

// get
router.route('/').get(allUsers);
router.route('/:id').get(oneUser);

// post, put
router.route('/').post(createUser);
router.route('/:id').put(changeUser)

// delete
router.route('/:id').delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend);
router.route('/:id/friends/:friendId').delete(deleteFriend);

module.exports = router;