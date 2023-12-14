const router = require('express').Router();


const { allThoughts, oneThought, newThought, updateThought, deleteThought, newReaction, deleteReaction } = require("../../controllers/thoughtController");

// getting
router.route('/').get(allThoughts);
router.route('/:id').get(oneThought);

//.post() .put()
router.route('/').post(newThought);
router.route('/:id').put(updateThought);

// .delete()
router.route('/:id').delete(deleteThought);

// reaction routes structure: /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions').post(newReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;