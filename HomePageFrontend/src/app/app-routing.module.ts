import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from 'src/bundels/sites/start/start.component';
import { AboutMeComponent } from 'src/bundels/sites/about-me/about-me.component';
import { ContactMeComponent } from 'src/bundels/sites/contact-me/contact-me.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'Start', component: StartComponent },
  { path: 'AboutMe', component: AboutMeComponent},
  { path: 'ContactMe', component: ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
