import { Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared';


@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[]
  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {this.events = events});
  }
}
