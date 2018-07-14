import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'


@Component({
    selector: 'messages',
    templateUrl: './seeImage.component.html',
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})


export class seeImageComponent {

    constructor(private http: HttpClient, private apiService: ApiService) {
        
    }
    ngOnInit(){
        this.apiService.getImages();
    }
    
}