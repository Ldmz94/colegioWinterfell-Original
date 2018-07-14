import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'


@Component({
    selector: 'messages',
    templateUrl: './gameUpload.component.html',
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})


export class gameUploadComponent {

    constructor(private http: HttpClient) {

    }

    selectedFile = null;
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(event)
    }

    upload() {

    }
}