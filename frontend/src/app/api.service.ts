import { Http} from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()

export class ApiService{
    messages =[]
    subjects =[]
    subject:any=[];
    //Constructor para inyectar Http
    constructor (private http: Http){}

    //Función de service
        getMessages(){
            //Damos el dato de la URL.
            //El subscribe es para poder recibir notificaciones y recibir los datos cuando entran
            //Una respusta
            this.http.get('http://localhost:3000/posts').subscribe  (res =>{
                this.messages = res.json()    
            console.log(res);
            })
        }

        getSubjects(){
            this.http.get('http://localhost:3000/subjects').subscribe  (res =>{
                this.subjects = res.json()    
            console.log(res);
            })
        }

        getTasks(param:string){
            console.log(param);
            this.http.get("http://localhost:3000/features/"+param).subscribe((data)=>{
                this.subject = data.json();
                console.log(data.json())
            });
        }
        
        
        
    
}