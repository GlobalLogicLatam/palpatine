import { Component } from '@angular/core';

@Component({
    templateUrl: './dist/routes/home/home.template.html',
})

export class HomeComponent  {

    title: String;

    constructor() {
        this.title = "Welcome to Palpatine Project";
    }
}