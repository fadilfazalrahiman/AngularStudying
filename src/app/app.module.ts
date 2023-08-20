import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './user/auth.service';
import{

  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventsDetailComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  DurationPipe,
  VoterService,
  UpvoteComponent

}from './events/index'

import { 
  
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective

} from './common/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SessionListComponent } from './events/events-details/session-list.component';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventsAppComponent,
    EventsDetailComponent,
    CollapsibleWellComponent,
    NavBarComponent,
    DurationPipe,
    UpvoteComponent,
    CreateEventComponent,
    Error404Component, 
    SessionListComponent,
    CreateSessionComponent,
    ModalTriggerDirective,
    SimpleModalComponent
    ],
  providers: [
    EventService, 
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery} ,
    EventRouteActivator,
    EventListResolver,
    VoterService, 
    AuthService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?') 
  return true
}