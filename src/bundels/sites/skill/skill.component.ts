import { Component, OnInit, Input} from '@angular/core';

import { SkillModel } from '../../../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.styl']
})
export class SkillComponent implements OnInit {
  @Input() skill: SkillModel;

  constructor() { }

  ngOnInit(): void {
  }

}
