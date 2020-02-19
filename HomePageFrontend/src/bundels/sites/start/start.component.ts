import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/services/skill/skill.service';
import { SkillModel } from 'src/models/skill';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.styl']
})
export class StartComponent implements OnInit {
  skillHidden: boolean;
  SKILLS: SkillModel[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillHidden = true;
  }

  toggleHidden(){
    this.skillHidden = !this.skillHidden;
  }

  getSkills(){
    this.skillService.SKILLS.subscribe(
      data => this.SKILLS = data);;

  }
}
