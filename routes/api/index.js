const router = require('express').Router();

const thoughtRoutes = require('./thought.routes');
const userRoutes = require('./user.routes');
const reactionRoutes = require('./reaction.routes');

// haven't decided path structure yet
// router.use('/path', route) for each


module.exports = router;