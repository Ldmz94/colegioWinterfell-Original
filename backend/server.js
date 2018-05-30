//Cors es una biblioteca que permite que las URLs "coincidan "
//Utilizamos express para el facil manejo de Node.js, Mongoose para la conexión con la base de datos

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express();
var mongooose = require('mongoose')

var Subject = require('./models/Subject.js')

mongooose.Promise = Promise

var posts =[
    {message: 'Matematicas'},
    {message: 'Español'}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req,res)=>{
    res.send(posts)
})

//Llega la solicitud y este busca en la base de datos lo que haya con respecto a las materias. Se podrán ver los datos en
//localhost:3000/subjects
app.get('/subjects', async (req,res)=>{
    try {
        var subjects = await Subject.find({}, '-__v')
        res.send(subjects)    
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
    
})

//Llega la solicitud y este busa en la base de datos lo que haya con respecto a las tareas, además de agregar el id
//de la materia a la URL para diferenciarla. Los datos se podrán ver en localhost:3000/features/"El id de la materia"
app.get('/features/:id', async (req,res)=>{
    console.log(req.params)
    try {
      var subject = await Subject.findById(req.params.id, '-__v')
        res.send(subject)    
    } catch (error) {
      console.error(error)
        res.sendStatus(200)
    }
    
})



app.post('/subjects', (req,res)=>{
    var subjectInfo = req.body;
    var subject = new Subject(subjectInfo)

    subject.save((err,result) =>{
        if(err)
            console.log('Error')
        
        res.sendStatus(200)
    })

    
})

//Se utiliza para la actualización de tareas en la base de datos
app.post('/taskUpdate', (req,res)=>{
    var subjectId = req.body;
    var subject = new Subject(subjectInfo)

    subject.save((err,result) =>{
        if(err)
            console.log('Error')
        
        res.sendStatus(200)
    })

})



mongooose.connect('mongodb://Administrator:admon@ds123976.mlab.com:23976/colegiowinterfell',  (err) =>{
    if(!err)
        console.log('Conexión a Mongo exitosa')
})

app.listen(3000)