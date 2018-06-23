import { Component, Inject } from '@angular/core';
import {ApiService} from './api.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'messages',
  templateUrl: 'thetask.component.html'
})
//Solo para pruebas de conexión y de mostrar mensajes
export class theTaskComponent {

  constructor( private apiService: ApiService){}
  
}

