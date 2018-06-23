import { Http} from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()

export class ApiService{
    messages =[]
    subjects =[]
    grades =[]
    subject:any=[];
    //Constructor para inyectar Http
    constructor (private http: Http){}

    //Función de service
        getMessages(){
            //Indicamos cual es la URL con la que nos vamos a comunicar
            //El subscribe es para poder recibir notificaciones y recibir los datos cuando entran
            //Una respusta
            this.http.get('http://localhost:3000/posts').subscribe  (res =>{
                this.messages = res.json()    
            console.log(res);
            })
        }

        getGrades(){
            //Indicamos cual es la URL con la que nos vamos a comunicar
            //El subscribe es para poder recibir notificaciones y recibir los datos cuando entran
            //Una respusta
            this.http.get('http://localhost:3000/grades').subscribe  (res =>{
                this.grades = res.json()    
            console.log(res);
            })
        }
        //Indicamos cual es la URL con la que nos vamos a comunicar
        //El subscribe nos va permitir recibir notificaciones y recibir los datos cuando entran
        //Se van a obtener los datos que hay en la base de datos de las materias
        getSubjects(){
            this.http.get('http://localhost:3000/subjects').subscribe  (res =>{
                this.subjects = res.json()    
            console.log(res);
            })
        }
        //Indicamos cual es la URL con la que nos vamos a comunicar
        //El subscribe nos va permitir recibir notificaciones y recibir los datos cuando entran
        //Se van a obtener los datos que hay en la base de datos de las tareas correspondientes a una materia específica
        getTasks(param:string){
            console.log(param);
            this.http.get("http://localhost:3000/features/"+param).subscribe((data)=>{
                this.subject = data.json();
                console.log(data.json())
            });

               
        }
        
        
        
    
}