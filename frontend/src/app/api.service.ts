import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TaskFeature } from './taskFeature.component';

@Injectable()

export class ApiService {
    messages = []
    subjects = []
    grades = []
    taskFeature = {}
    subject: any = [];
    courses: any = []
    //Constructor para inyectar Http
    constructor(private http: Http, private httpClient: HttpClient) { }

    //Función de service
    getMessages() {
        //Indicamos cual es la URL con la que nos vamos a comunicar
        //El subscribe es para poder recibir notificaciones y recibir los datos cuando entran
        //Una respusta
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.messages = res.json()
            console.log(res);
        })
    }

    getGrades() {
        //Indicamos cual es la URL con la que nos vamos a comunicar
        //El subscribe es para poder recibir notificaciones y recibir los datos cuando entran
        //Una respusta
        this.http.get('http://localhost:3000/grades').subscribe(res => {
            this.grades = res.json()
            console.log(res);
        })
    }

    //Indicamos cual es la URL con la que nos vamos a comunicar
    //El subscribe nos va permitir recibir notificaciones y recibir los datos cuando entran
    //Se van a obtener los datos que hay en la base de datos de las tareas correspondientes a una materia específica
    getCourses(param: string) {
        console.log(param);
        this.http.get("http://localhost:3000/courses/" + param).subscribe((data) => {
            this.courses = data.json();
            console.log(data.json())
        });


    }
    //Indicamos cual es la URL con la que nos vamos a comunicar
    //El subscribe nos va permitir recibir notificaciones y recibir los datos cuando entran
    //Se van a obtener los datos que hay en la base de datos de las materias
    getSubjects() {
        this.http.get('http://localhost:3000/subjects').subscribe(res => {
            this.subjects = res.json()
            console.log(this.subjects);
        })
    }
    

    addTask(taskData) {
        //console.log(taskData);

        this.httpClient.post<any>("http://localhost:3000" + '/addTask', taskData).subscribe(res => {

        });
    }
//Indicamos cual es la URL con la que nos vamos a comunicar
    //El subscribe nos va permitir recibir notificaciones y recibir los datos cuando entran
    //Se van a obtener los datos que hay en la base de datos de las tareas correspondientes a una materia específica
 
    getTasks() {

        this.httpClient.post<any>("http://localhost:3000" + '/features', this.taskFeature).subscribe(res => {
        
        this.subject = res;
            console.log(this.subject)
        });
    }


}