//Cors es una biblioteca que permite que las URLs "coincidan "
//Utilizamos express para el facil manejo de Node.js, Mongoose para la conexión con la base de datos

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express();
var mongooose = require('mongoose')

var Subject = require('./models/Subject.js')
var Grade = require('./models/grade.js')
var Image = require('./models/image.js')

mongooose.Promise = Promise

var posts = [
    { message: 'Matematicas' },
    { message: 'Español' }
]

app.use(cors())
app.use(bodyParser.json())


app.get('/posts', (req, res) => {
    
    res.send(posts)
})



//Llega la solicitud y este busca en la base de datos lo que haya con respecto a las materias. Se podrán ver los datos en
//localhost:3000/subjects "courses":{"courseName":"a"}
app.get('/subjects', async (req, res) => {
    try {
        //var subjects = await Subject.find({ $and: [{ "gradeName": "Noveno" }, { "courses.courseName": "a" }] }, { "courses.subjects": 1 })
        var subjects = await Subject.find({}, { "courses.subjects": 1 ,"gradeName" : 1, "courses.courseName" : 1})
        
      /*  var cliente = new Object();
        cliente = JSON.parse(JSON.stringify(subjects))
        console.log("Holi x2" , JSON.stringify(cliente))*/
        //console.log(cliente.courses[0].subjects)
        res.send(subjects)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }

})
//Llega la solicitud y este busca los cursos, A, B o C, y busca las materias de estos cursos 
app.get('/aboutGrades', async (req, res) => {
    try {
        var subjects = await Subject.find({ $and: [{ "gradeName": "8" }, { "courses.courseName": "a" }] }, { "courses.subjects": 1 })
        var cliente = new Object();
        cliente = JSON.parse(JSON.stringify(subjects[0]))
        //console.log(cliente.courses[0].subjects)
        res.send(cliente.courses[0].subjects)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }

})

//Llega la solicitud y este busa en la base de datos lo que haya con respecto a las tareas, además de agregar el id
//de la materia a la URL para diferenciarla. Los datos se podrán ver en localhost:3000/features/"El id de la materia"
app.post('/features', async (req, res) => {
    var objData = req.body;
    //console.log("hola soy task data", objData)

    try {
        var subjects = await Subject.findOne({ "gradeName": objData.gradeName  }, { "courses.subjects": 1 ,"courses.courseName":1})
        console.log(subjects)
        var cliente = new Object();
        cliente = JSON.parse(JSON.stringify(subjects));
        
        cliente.courses.forEach(course => {
            if (course.courseName == objData.courseName) {
                course.subjects.forEach(subject=>{
                    if(subject._id==objData.subjectId){
                        console.log(subject)
                        res.send(subject);
                    }
                })
                
            }
        });


    } catch (error) {
        console.error(error)
        res.sendStatus(200)
    }

})



app.post('/subjects', (req, res) => {
    var subjectInfo = req.body;
    var subject = new Subject(subjectInfo)

    subject.save((err, result) => {
        if (err)
            console.log('Error')

        res.sendStatus(200)
    })


})

//Se utiliza para la actualización de tareas en la base de datos
app.post('/taskUpdate', (req, res) => {
    var subjectId = req.body;
    var subject = new Subject(subjectInfo)

    subject.save((err, result) => {
        if (err)
            console.log('Error')

        res.sendStatus(200)
    })

})
//Llega la solicitud a la base de datos y esta nos va a permitir ver una lista de todos los grados del colegio
app.get('/grades', async (req, res) => {
    try {
        var grades = await Subject.find({}, '-courses ')

        res.send(grades)
    } catch (error) {
        console.error(error)
        sendStatus(500)
    }


})

//Llega la solicitud y este busa en la base de datos lo que haya con respecto a las tareas, además de agregar el id
//de la materia a la URL para diferenciarla. Los datos se podrán ver en localhost:3000/features/"El id de la materia"
app.get('/courses/:id', async (req, res) => {
    console.log(req.params)

    try {
        var courses = await Subject.find({ $and: [{ "gradeName": req.params.id },] }, { "courses": 1 })

        var theCourses = new Object();
        theCourses = JSON.parse(JSON.stringify(courses[0])).courses;
        console.log(theCourses)
        res.send(theCourses);

    } catch (error) {
        console.error(error)
        res.sendStatus(200)
    }

})

app.post('/addTask', async (req, res) => {
    var objData = req.body;
    //console.log("hola soy task data", objData)
    var allData = await Subject.find({ $and: [{ "gradeName": objData.gradeName }] })
    console.log("hola " + allData[0].courses)
    var jsonAllData = new Object();
    jsonAllData = JSON.parse(JSON.stringify(allData[0])).courses;
    //console.log("soy jsonall", jsonAllData)
    jsonAllData.forEach(course => {
        if (course.courseName == objData.courseName) {
            course.subjects.forEach(subject => {
                if (subject.subjectName == objData.subjectName) {
                    subject.tasks.push(objData.taskData)
                    console.log("subject", subject)
                }

            });
            //course.subjects.push(objData.taskData)
            //console.log(course.subjects)
            /*
            ,
        (err,result) =>{
            if(err){
                console.log("error")
                return res.status(500).send({message: 'update task error'});
            }
            console.log("Yai")
            res.status(200).send({msg:"ok"});
        }*/
        }
    });
    console.log(JSON.stringify(jsonAllData));
    /*Subject.update({
        "gradeName": objData.gradeName,

    }, {
            $set: { courses: JSON.stringify(jsonAllData) }
        })*/
    Subject.findOneAndUpdate({
        gradeName: objData.gradeName

    }, {
            courses: jsonAllData
        },
        (err, result) => {
            if (err) {
                console.log("error")
                return res.status(500).send({ message: 'update task error' });
            }
            console.log("Yai")
            res.status(200).send({ msg: "ok" });
        })
})

app.post('/uploadImages', (req, res)=>{
    var imageData = req.body;

    var image = new Image(imageData)
    image.save((err,result) =>{
        if(err){
            console.log(err)
        }
        res.sendStatus(200)
    })

    console.log(imageData.name)
    res.sendStatus(200)
})

exports.Uploads = function(req, res) {
    console.log(req.files);
    var tmp_path = req.files.photo.path;
    // Ruta donde colocaremos las imagenes
    var target_path = './public/images/' + req.files.photo.name;
   // Comprobamos que el fichero es de tipo imagen
    if (req.files.photo.type.indexOf('image')==-1){
                res.send('El fichero que deseas subir no es una imagen');
    } else {
         // Movemos el fichero temporal tmp_path al directorio que hemos elegido en target_path
        fs.rename(tmp_path, target_path, function(err) {
            if (err) throw err;
            // Eliminamos el fichero temporal
            fs.unlink(tmp_path, function() {
                if (err) throw err;
                res.render('upload',{message: '/images/' + req.files.photo.name,title: ''});
            });
         });
     }
};
app.get('/images', async (req, res) => {

    try {
        var images = await Image.find({}, '-name -__v')
        res.send(images)    
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
    
})

mongooose.connect('mongodb://Administrator:admon@ds123976.mlab.com:23976/colegiowinterfell', (err) => {
    if (!err)
        console.log('Conexión a Mongo exitosa')
})

app.listen(3000)