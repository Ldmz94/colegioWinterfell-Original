var mongoose = require('mongoose')

module.exports = mongoose.model('theImage',{
    image: String,
    name: String
})