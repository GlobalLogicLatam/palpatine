import { Component } from '@angular/core';

@Component({
    templateUrl: './dist/routes/manager/manager.template.html',
})

export class ManagerComponent  {
        title: String;
        constructor () {
            this.title = "Page 1 from Compontent";
        }
}