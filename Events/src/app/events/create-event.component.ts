import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 't',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent implements OnInit {
    constructor(private route:Router) { }

    cancel(){
        this.route.navigate(['/event']);
    }

    ngOnInit(): void { }
    
    
}
