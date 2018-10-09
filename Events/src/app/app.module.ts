import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routers';
import { NavBarComponent } from './nav/navbar.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './events/errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsListComponent, EventsAppComponent, EventsThumbnailComponent, EventDetailsComponent, NavBarComponent, CreateEventComponent, Error404Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,EventRouteActivator, {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(){
  
}
