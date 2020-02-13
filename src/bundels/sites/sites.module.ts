import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { QuoteComponent } from './start/quote/quote.component';



@NgModule({
  declarations: [StartComponent, AboutMeComponent, ContactMeComponent, QuoteComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StartComponent,
    ContactMeComponent,
    AboutMeComponent,
    QuoteComponent
  ]
})
export class SitesModule { }
