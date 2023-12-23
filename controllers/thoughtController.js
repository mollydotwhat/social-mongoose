const { Thought, User } = require('../models');
// crud for thought--also reactions. (except reactions don't need get ALL-- just create & delete by Thought.findOneAndUpdate)


module.exports = {

    // get all thoughts
    async allThoughts(req, res) {
        try {
            const payload = await Thought.find().populate({ path: 'userId' }).select('__v')
            console.log('got all thoughts')
            res.json({ status: 'success', payload })

        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // get one by ids
    async oneThought(req, res) {
        try {
            const payload = await Thought.findOne({ _id: req.params.id }).populate({path: 'userId'}).select('__v')
            console.log('got one thought')
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
            
            console.log('wrote new thought')
            res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // edit one
    async updateThought(req, res) {
        try {
            const payload = await Thought.findOneAndUpdate( {_id: req.params.id }, {$set: req.body },);

            console.log('thought updated')
            res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // remove one
    async deleteThought(req, res) {
        try {
            const payload = await Thought.findOneAndDelete({ _id: req.params.id });

            const user = await User.findOneAndUpdate({_id: req.params.userId}) 
            console.log(`${user} deleted a thought`);
            res.json({status: 'success'}, `thought deleted!`)
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // create one
    async newReaction(req, res) {
        try {
            // this should just be updating the thought. since reaction shouldn't be a model...for some reason.
            const reactingTo = await Thought.findOneAndUpdate({_id: req.body.userId}, {  $addToSet: { reactions: req.body }},);
            console.log('reaction added')
            res.json({status: 'success', reactingTo})

        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    async deleteReaction(req, res) {
        try {
            const removeReaction = await Thought.findOneAndUpdate({_id: req.body.userId}, {  $pull: { reactions: {_id: req.params.id} }},);
            console.log("deleting reaction")
            res.json({status: 'success'}, `reaction REMOVED`)
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

}