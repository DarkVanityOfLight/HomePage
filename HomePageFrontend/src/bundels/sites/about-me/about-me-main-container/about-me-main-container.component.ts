import { Component, OnInit, Input } from '@angular/core';
import { AboutMeModel } from 'src/models/about-me';

@Component({
  selector: 'app-about-me-main-container',
  templateUrl: './about-me-main-container.component.html',
  styleUrls: ['./about-me-main-container.component.styl']
})
export class AboutMeMainContainerComponent implements OnInit {

  @Input() aboutMeData: AboutMeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
