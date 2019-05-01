import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'explore', component:  ExploreComponent},
  { path: 'events', component:  EventsComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'login', component:  LoginComponent},
  { path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
