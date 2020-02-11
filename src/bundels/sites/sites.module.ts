import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [StartComponent, AboutMeComponent, ContactMeComponent],
  imports: [
    CommonModule
  ]
})
export class SitesModule { }
