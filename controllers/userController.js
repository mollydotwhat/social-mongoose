const { User } = require('../models');


module.exports = {
    
// get all users
async allUsers (req, res) {
    try {
        const payload = await User.find().select('__v')
        res.json({ status: 'success', payload })

        // res.json({status: 'success', payload})
    } catch (err) {
        res.status(500).json({status: 'error', payload: err.message});
    }
},

// one by id
async oneUser (req, res) {
    const payload = await Thought.findOne({ _id: req.params.id }).populate({path: 'userId'}).select('__v')

    res.json({status: 'success', payload})
},

// new user
async createUser (req, res) {
    try {
        // const payload = await 

        // res.json({status: 'success', payload})
    } catch (err) {
        res.status(500).json({status: 'error', payload: err.message});
    }
},

// update user info
async changeUser (req, res) {
    try {
        // const payload = await 

        // res.json({status: 'success', payload})
    } catch (err) {
        res.status(500).json({status: 'error', payload: err.message});
    }
}, 

// remove user
async deleteUser (req, res) {
    try {
        // const payload = await 

        // res.json({status: 'success', payload})
    } catch (err) {
        res.status(500).json({status: 'error', payload: err.message});
    }
}


}