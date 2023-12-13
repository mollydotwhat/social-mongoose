const { Thought, User } = require('../models');
// crud for thought--also reactions. (except reactions don't need get ALL-- just create & delete by Thought.findOneAndUpdate)


module.exports = {

    // get all thoughts
    async allThoughts(req, res) {
        try {
            const payload = await Thought.find().populate({ path: 'userId' }).select('__v')
            res.json({ status: 'success', payload })

        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // get one by ids
    async oneThought(req, res) {
        try {
            const payload = await Thought.findOne({ _id: req.params.id }).populate({path: 'userId'}).select('__v')

            res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // create one
    async newThought(req, res) {
        try {
            const payload = await Thought.create(req.body);

            // add thought to user's array
            const user = await User.findOneAndUpdate({_id: req.body.userId}, {  $addToSet: { thoughts: payload._id } }, ) 

            res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // edit one
    async updateThought(req, res) {
        try {
            const payload = await Thought.findOneAndUpdate( {_id: req.params.id }, {$set: req.body },) 

            res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // remove one
    async deleteThought(req, res) {
        try {
            const payload = await Thought.findOneAndDelete({ _id: req.params.id });

            // const user = await User.findOneAndUpdate to take thought out of array? do I need to?
            res.json({status: 'success'}, `thought deleted!`)
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // create one
    async newReaction(req, res) {
        try {
            // const payload = await 
            // remember to push reaction to thought's reaction array? check this syntax
            // res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    async deleteReaction(req, res) {
        try {
            // const payload = await 

            // res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

}