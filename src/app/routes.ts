import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { EventsDetailComponent } from './events/events-details/events-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { UserModule } from './user/user.module';
import { CreateSessionComponent } from './events/events-details/create-session.component';

export const appRoutes : Routes = [  
    {path: 'events', component : EventsListComponent, resolve : {events:EventListResolver}},
    {path: 'events/new', component : CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']} ,
    {path: 'events/:id', component : EventsDetailComponent, canActivate:[EventRouteActivator]},
    {path: '404', component : Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}, 
    {path: 'user', 
    loadChildren:() => import( './user/user.module')
    .then(m => m.UserModule)},
    {path: 'events/session/new', component : CreateSessionComponent}
]