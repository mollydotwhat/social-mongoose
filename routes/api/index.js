const router = require('express').Router();

const thoughtRoutes = require('./thought.routes');
const userRoutes = require('./user.routes');


// keep it simple
// router.use('/path', route) for each
router.use('/user', userRoutes);
router.user('/thought', thoughtRoutes)



module.exports = router;