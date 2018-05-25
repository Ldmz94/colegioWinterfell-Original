import { Component } from '@angular/core';
import {ApiService} from './api.service'

@Component({
  selector: 'messages',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent {

  Subject : string
  constructor(private apiService: ApiService){}

  ngOnInit(){
      this.apiService.getSubjects();
      console.log(this.Subject)
  }
  
}
