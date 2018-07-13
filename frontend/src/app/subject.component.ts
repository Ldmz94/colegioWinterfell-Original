import { Component } from '@angular/core';
import {ApiService} from './api.service'
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'messages',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class SubjectComponent {
  //A continuación tenemos el constructor y su única inyección la cual es ApiService
  Subject : string
 location: Location;
  constructor(private apiService: ApiService,  location: Location, public router: Router){
    this.location = location
  }

  ngOnInit(){
      this.apiService.getSubjects();
      console.log(this.Subject)
  }
  seeTasks(gradeName, courseName, subjectId) {
    var obj = {gradeName:'', courseName:'', subjectId: ''}
    //this.taskData.subject = tempCourse[1]
    obj.gradeName = (gradeName)
    obj.courseName =(courseName)
    obj.subjectId = (subjectId)
    
    this.apiService.taskFeature=obj;
    //this.location.go("/feature")
    this.router.navigateByUrl('/feature');

    }
}
