import { Routes,RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routing: Routes=[
    { path:'', component: SigninComponent },
    { path:'dashboard', component: DashboardComponent},
    { path:'signup', component: SignupComponent},
    { path:'user', component: UserComponent},
    { path:'home', component: HomeComponent}
]
export const appRoutes = RouterModule.forRoot(routing);
