import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LinkButtonComponent, QuoteComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LinkButtonComponent,
    QuoteComponent,
  ]
})
export class CommonThingsModule { }
