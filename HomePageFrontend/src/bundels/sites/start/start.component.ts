import { Component, OnInit } from '@angular/core';

import { SkillService } from 'src/services/skill/skill.service';
import { ProjectService } from 'src/services/project/project.service';

import { SkillModel } from 'src/models/skill';
import { ProjectModel } from 'src/models/projekt';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.styl']
})
export class StartComponent implements OnInit {
  skillHidden: boolean;
  projectHidden: boolean;
  SKILLS: SkillModel[];
  PROJECTS: ProjectModel[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillHidden = true;
    this.projectHidden = true;
  }

  toggleHiddenSkill() {
    this.skillHidden = !this.skillHidden;
  }

  toggleHiddenProject() {
    this.projectHidden = !this.projectHidden;
  }

  getSkills() {
    this.skillService.SKILLS.subscribe(
      data => this.SKILLS = data);

  }
}
