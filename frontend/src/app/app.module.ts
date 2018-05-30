import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
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

const routes= [
  {path: 'subjects', component: SubjectComponent},
  {path: 'feature/:id', component: FeatureComponent},
  
]

//En las declaraciones indicamos los componentes que se están usando para este caso de uso
//MessagesComponent no se debe tener en cuenta ya que es un módulo para pruebas de conexión

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, SubjectComponent, FeatureComponent, DialogOverviewExampleDialog
  ],
  //Las importaciones que se ven a continuación son las necesarias para la interfaz, todas estas importaciones
  //vienen desde angular material
  imports: [
    BrowserModule,
    HttpModule,
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
    MatOptionModule
  ],
  entryComponents: [FeatureComponent, DialogOverviewExampleDialog],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
