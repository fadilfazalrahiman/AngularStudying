import { Component } from "@angular/core";
import  { EventService } from '../shared/events.service';
import { ActivatedRoute , Params} from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './events-detail.component.html' ,
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px;}
        a {cursor:pointer}
    `]


})
export class EventsDetailComponent {

    event: IEvent 
    addMode: boolean
    filterBy: string = 'all';  
    sortBy: string = 'votes';
    constructor(private eventService: EventService , private route: ActivatedRoute) {
    }
    addSession(){
        this.addMode = true
    }
    cancelAddSession() {
        this.addMode = false;
    }
    saveNewSession(session :ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
    ngOnInit() {

        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false;
        })
    }

}