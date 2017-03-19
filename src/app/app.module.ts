import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AlertComponent } from './directive/alert.component';
import { HomeComponent } from './home/home.component';

import { UserService ,AlertService, AuthenticationService } from './service/index';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    SignupComponent,
    UserComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
  ],
  providers: [UserService, AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
