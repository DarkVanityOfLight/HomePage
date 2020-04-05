import { Component, OnInit, Input} from '@angular/core';

import { ProjectModel } from '../../../models/projekt';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectModel;

  constructor() { }

  ngOnInit(): void {
  }

}
