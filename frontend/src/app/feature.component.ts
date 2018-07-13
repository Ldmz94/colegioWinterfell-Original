import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Router, Route} from '@angular/router'
import {ApiService} from './api.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'messages',
  templateUrl: './feature.component.html',
  styleUrls: ['./subject.component.css']
})

export class FeatureComponent {
  subjectId: string;
  //A continuación se muestra el constructor y las inyecciones que se están haciendo las cuales son
  //ApiService, ActivatedRoute, Router y MatDialog
  constructor(public apiService: ApiService, private activatedRoute: ActivatedRoute, private Router: Router, public dialog: MatDialog ){
    /*let va = this.activatedRoute.params.subscribe(params=>{
      this.subjectId = params.id;
      
    })*/

    this.apiService.getTasks();
    //console.log(this.apiService.tasks);
  }
  //Se va a encargar de abrir la ventana donde se muestran las características de la tarea, 
  //se utiliza DialogOverviewExample
  openDialog(task,subject): void {
    console.log("tarea",task)
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
      data: { subject: subject, task: task }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.apiService.subject ;
    });
  }

  
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}