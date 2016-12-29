import { Component } from '@angular/core';
import {AppService} from './../../services/app.service';

@Component({
    templateUrl: './dist/routes/page2/page2.template.html',
    providers:[AppService]
})

export class Page2  {
    title: String;
    subtitle: String;
    participants: Object [];

    constructor(appService: AppService) {
        this.title = "Page 2";
        this.subtitle = "Loading names array from Service";
        this.participants = appService.getParticipants();
    }
}