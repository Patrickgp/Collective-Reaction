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
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST at /api/thoughts/:thoughtId/reactions
router.route("/:id/reactions").post(addReaction);

// DELETE at /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:id/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
