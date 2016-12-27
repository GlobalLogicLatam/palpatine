import { Component } from '@angular/core';

@Component({
    templateUrl: './dist/routes/page1/page1.template.html',
})

export class Page1  {
        title: String;
        constructor () {
            this.title = "Page 1 from Compontent";
        }
}