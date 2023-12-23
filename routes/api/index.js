const router = require('express').Router();

const thoughtRoutes = require('./thought.routes');
const userRoutes = require('./user.routes');


// keep it simple
// router.use('/path', route) for each
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes)



module.exports = router;