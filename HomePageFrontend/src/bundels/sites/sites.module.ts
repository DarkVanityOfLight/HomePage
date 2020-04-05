import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { StartComponent } from './start/start.component';
import { QuoteComponent } from './quote/quote.component';
import { SkillComponent } from './skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './start/project/project.component'
import { CommonThingsModule } from '../common/common-things.module';
import { AboutMeSideBarComponent } from './about-me/about-me-side-bar/about-me-side-bar.component';
import { AboutMeMainContainerComponent } from './about-me/about-me-main-container/about-me-main-container.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
    StartComponent,
    QuoteComponent,
    SkillComponent,
    ProjectComponent,
    AboutMeSideBarComponent,
    AboutMeMainContainerComponent
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
