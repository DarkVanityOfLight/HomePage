import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { StartComponent } from './start/start.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    AboutMeComponent, 
    ContactMeComponent, 
    StartComponent,
    QuoteComponent
  ],

  imports: [
    CommonModule,
  ],
  exports: [
    ContactMeComponent,
    AboutMeComponent,
    StartComponent,
  ]
})
export class SitesModule { }
