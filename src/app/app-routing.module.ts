import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components//login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components//home/home.component";
import { ProfileComponent } from './components//profile/profile.component';
import { AdminComponent } from './components//admin/admin.component';
import { AccessControlGuard } from './guards/access-control.guard';


const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "profile", component: ProfileComponent, canActivate: [AccessControlGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: "admin", component: AdminComponent, canActivate: [AccessControlGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
