import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components//login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components//home/home.component";
import { ProfileComponent } from './components//profile/profile.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { AdminComponent } from './components//admin/admin.component';


const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "user", component: ProfileComponent, canActivate: [UserGuardGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: "admin", component: AdminComponent, canActivate: [UserGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
