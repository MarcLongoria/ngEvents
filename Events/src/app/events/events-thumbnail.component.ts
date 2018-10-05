import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent {


    @Input() event: any;
    @Output() methodName = new EventEmitter();


}
