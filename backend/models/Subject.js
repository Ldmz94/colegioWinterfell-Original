var mongoose = require('mongoose')
//Se va a utilizar para las sesiones. En este momento no está en uso en el proyecto
module.exports = mongoose.model('subjects',{
    subjectName: String,
    gradeName: String,
    courses:[{
        courseName: String,
        subjects: [{
            _id:{type: mongoose.Schema.Types.ObjectId},
            subjectName: String,
            tasks:[{
                taskName: String,
                date: Date,
                description: String,
                archivo: String,
                Completada: Boolean
            }]
        }]
    }]
})