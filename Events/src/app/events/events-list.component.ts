import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
    }
    constructor() { 

    }

    ngOnInit(): void { }
}
