const { Thought } = require('../models');
// crud for thought--also reactions. (except reactions don't need get ALL-- just create & delete by Thought.findOneAndUpdate)


module.exports = {
    
    // get all thoughts
    async allThoughts (req, res) {
        try {
            // const payload = await 

            // res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({status: 'error', payload: err.message});
        }
    }


}