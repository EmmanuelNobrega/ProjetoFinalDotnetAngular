import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path  : "**", redirectTo: "", pathMatch: "full" }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
