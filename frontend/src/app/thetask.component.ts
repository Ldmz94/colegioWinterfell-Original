import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router'
import { ApiService } from './api.service'

@Component({
  selector: 'messages',
  templateUrl: 'thetask.component.html'
})
//Solo para pruebas de conexión y de mostrar mensajes
export class theTaskComponent {
  gradeName: string;
  subjectName : string;
  taskData = {};



  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    let va = this.activatedRoute.params.subscribe(params => {
      this.gradeName = params.id;

    })

  }

  ngOnInit() {
    this.apiService.getCourses(this.gradeName);
  }

  post() {
    var obj = {taskData :{}, gradeName:'', courseName:'', subjectName: ''}
    let tempCourse = this.subjectName.split(">");
    //this.taskData.subject = tempCourse[1]
    obj.taskData = this.taskData
    obj.gradeName = (this.gradeName)
    obj.courseName =(tempCourse[0])
    obj.subjectName = (tempCourse[1])
    console.log("1: ", obj);
    this.apiService.addTask(obj);
  }

  
}

