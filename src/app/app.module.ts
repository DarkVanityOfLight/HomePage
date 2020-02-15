import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonThingsModule } from '../bundels/common/common-things.module';
import { SitesModule } from '../bundels/sites/sites.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonThingsModule,
    SitesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
