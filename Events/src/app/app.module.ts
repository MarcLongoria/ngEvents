import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CreateEventComponent,EventDetailsComponent,EventsThumbnailComponent,EventsListComponent,EventRouteActivator,EventService} from './events/index'
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routers';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './events/errors/404.component';


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
