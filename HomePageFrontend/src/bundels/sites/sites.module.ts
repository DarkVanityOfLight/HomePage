import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { StartComponent } from './start/start.component';
import { QuoteComponent } from './quote/quote.component';
import { SkillComponent } from './skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { CommonThingsModule } from '../common/common-things.module';


@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
    StartComponent,
    QuoteComponent,
    SkillComponent,
    ProjectComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    CommonThingsModule
  ],
  exports: [
    ContactMeComponent,
    AboutMeComponent,
    StartComponent,
  ]
})
export class SitesModule { }
