import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})
export class ProjectComponent implements OnInit {
  responsive?: boolean;
  responsiveImg?: string;
  text: string;
  imgPath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
