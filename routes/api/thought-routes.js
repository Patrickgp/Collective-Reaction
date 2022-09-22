const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// GET and POST at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// GET, PUT, DELETE by ID at /api/thoughts/:id
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST and DELETE at /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
