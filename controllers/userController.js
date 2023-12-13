const { User } = require('../models');


module.exports = {
    
// get all users
async allUsers (req, res) {
    try {
        // const payload = await 

        // res.json({status: 'success', payload})
    } catch (err) {
        res.status(500).json({status: 'error', payload: err.message});
    }
}


}