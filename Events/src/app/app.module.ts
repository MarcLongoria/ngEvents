import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';

@NgModule({
  declarations: [
    EventsListComponent, EventsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
