import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { StartComponent } from './start/start.component';
import { QuoteComponent } from './quote/quote.component';
import { SkillComponent } from './skill/skill.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AboutMeComponent, 
    ContactMeComponent, 
    StartComponent,
    QuoteComponent,
    SkillComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ContactMeComponent,
    AboutMeComponent,
    StartComponent,
  ]
})
export class SitesModule { }
