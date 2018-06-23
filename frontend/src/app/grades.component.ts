import { Component } from '@angular/core';
import {ApiService} from './api.service'
@Component({
  selector: 'messages',
  template: `
   <div *ngFor="let grade of apiService.grades">
  <mat-card [routerLink] = "['/aboutGrades']" style= "cursor:pointer">{{grade.gradeName}}</mat-card>
  </div>
  `
})
//Solo para pruebas de conexión y de mostrar mensajes
export class GradesComponent {

  constructor( private apiService: ApiService){}
  
  ngOnInit(){
    this.apiService.getGrades();
  }
}
