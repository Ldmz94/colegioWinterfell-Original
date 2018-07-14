import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {
  MatButtonModule, 
  MatCardModule,
  MatToolbarModule, 
  MatListModule, 
  MatInputModule, 
  MatFormFieldModule,
  MatDialogModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ApiService} from './api.service'
import {MessagesComponent} from './messages.component'
import {SubjectComponent} from './subject.component'
import {FeatureComponent,DialogOverviewExampleDialog} from './feature.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {GradesComponent} from './grades.component'
import { theTaskComponent } from './thetask.component';
import { gameUploadComponent } from './gameUpload.component';
import { seeImageComponent } from './seeImage.component';
const routes= [
  {path: 'subjects', component: SubjectComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'aboutGrades/:id', component: theTaskComponent},
  {path: 'uploadImages', component: gameUploadComponent},
  {path: 'images', component: seeImageComponent}
]

//En las declaraciones indicamos los componentes que se están usando para este caso de uso
//MessagesComponent no se debe tener en cuenta ya que es un módulo para pruebas de conexión

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent, 
    SubjectComponent, 
    FeatureComponent, 
    DialogOverviewExampleDialog, 
    GradesComponent,
    theTaskComponent,
    gameUploadComponent,
    seeImageComponent

  ],
  //Las importaciones que se ven a continuación son las necesarias para la interfaz, todas estas importaciones
  //vienen desde angular material
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    
  ],
  entryComponents: [FeatureComponent, DialogOverviewExampleDialog],
  providers: [
    ApiService,
    [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
