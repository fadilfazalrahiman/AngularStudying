import { Component } from "@angular/core";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
@Component({
    selector: 'events-app',
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    `
})

export class EventsAppComponent {
 
}