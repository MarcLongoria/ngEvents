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

@NgModule({
  declarations: [
    EventsListComponent, EventsAppComponent, EventsThumbnailComponent, EventDetailsComponent, NavBarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
