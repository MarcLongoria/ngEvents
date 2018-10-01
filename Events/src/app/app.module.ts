import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';

@NgModule({
  declarations: [
    EventsListComponent, EventsAppComponent, EventsThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
