import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/services/about-me/about-me.service';
import { AboutMeModel } from 'src/models/about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.styl']
})
export class AboutMeComponent implements OnInit {
  aboutMeData: AboutMeModel;
  

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
  }


  getAboutMe(){
    this.aboutMeService.ABOUT_ME.subscribe(data => this.aboutMeData = data);
  }
}
