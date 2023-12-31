import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes),
        ReactiveFormsModule
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[

    ]
})

export class UserModule{

}