const { User } = require('../models');


module.exports = {

    // get all users
    async allUsers(req, res) {
        try {
            const payload = await User.find().select('__v')
            res.json({ status: 'success', payload })

            // res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // one by id
    async oneUser(req, res) {
        try {
            const payload = await User.findOne({ _id: req.params.id }).populate({ path: 'thoughts' }).select('__v')

            res.json({ status: 'success', payload })
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // new user
    async createUser(req, res) {
        try {
            const payload = await User.create(req.body);
            res.json(payload);
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // update user info
    async changeUser(req, res) {
        try {
            const payload = await User.findOneAndUpdate({_id: req.params.id}, {$set: req.body }) 

            res.json({status: 'success', payload})
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    },

    // remove user
    async deleteUser(req, res) {
        try {
            const payload = await User.findOneAndDelete({_id: req.params.id}) 

            res.json({status: 'success'}, `${payload} deleted`)
        } catch (err) {
            res.status(500).json({ status: 'error', payload: err.message });
        }
    }


}