import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent {


    @Input() event: IEvent;
    @Output() methodName = new EventEmitter();


}
