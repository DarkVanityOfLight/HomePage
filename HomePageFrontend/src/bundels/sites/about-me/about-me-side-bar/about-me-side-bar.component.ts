import { Component, OnInit, Input } from '@angular/core';
import { AboutMeModel } from 'src/models/about-me';

@Component({
  selector: 'app-about-me-side-bar',
  templateUrl: './about-me-side-bar.component.html',
  styleUrls: ['./about-me-side-bar.component.styl']
})
export class AboutMeSideBarComponent implements OnInit {
  
  @Input() aboutMeData: AboutMeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
