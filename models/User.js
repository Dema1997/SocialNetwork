const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [25, 'First Name cannot be more than 20 characters']
    },
    lastName: {
        type: String,
        required: true,
        maxlength: [25, 'Last Name cannot be more than 20 characters'],
    },
    email: {
        type: String,
        required: true,
        maxlength: [35, 'Email cannot be more than 20 characters']
    },
    city: {
        type: String,
        required: true,
        maxlength: [20, 'City Name cannot be more than 20 characters']
    },
    address: {
        type: String,
        required: true,
        maxlength: [35, 'Address cannot be more than 20 characters']
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.User || mongoose.model('User',UserSchema)