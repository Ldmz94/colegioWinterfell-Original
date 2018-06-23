import { Component } from '@angular/core';
import {ApiService} from './api.service'
@Component({
  selector: 'messages',
  //Muestra la lista de los grados en el colegio
  template: `
   <div *ngFor="let grade of apiService.grades">
  <mat-card [routerLink] = "['/aboutGrades']" style= "cursor:pointer">{{grade.gradeName}}</mat-card>
  </div>
  `
})
export class GradesComponent {

  constructor( private apiService: ApiService){}
  
  ngOnInit(){
    this.apiService.getGrades();
  }
}
