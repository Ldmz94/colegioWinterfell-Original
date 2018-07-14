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
    selectedFile: File = null
    constructor(private http: HttpClient) {

    }

    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
        console.log(event)
    }

    upload() {
        const fd = new FormData();
        fd.append('image',this.selectedFile, this.selectedFile.name)
        this.http.post('http://localhost:3000/uploadImages', fd).subscribe(
            res=>{
                console.log(res);
            }
        )
    }
}