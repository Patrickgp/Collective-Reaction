const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// GET and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// GET, PUT, DELETE by ID at /api/users/:id
router.route("/:id").get(getUserById).put(updateUserById).delete(deleteUser);

// POST and DELETE at /api/users/:userId/friends/:friendId
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
