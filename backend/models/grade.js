var mongoose = require('mongoose')
//Se va a utilizar para las sesiones. En este momento no está en uso en el proyecto
module.exports = mongoose.model('subjects',{
    subjectName: String
})