import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { SkillModel } from '../../models/skill';
import { Observable, of } from 'rxjs';

const skill = [{title: 'Skill', text:'Text', iconLink:''}, {title: 'Skill', text:'Text', iconLink:''}]

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private _SKILLS: Observable<SkillModel[]>;
  private skillUrl: string;
  private debug: boolean;

  constructor(private http: HttpClient) {
    this.debug = true
   }

  get SKILLS(): Observable<SkillModel[]>{
    if(!this.debug){
      return this.http.get<SkillModel[]>(this.skillUrl);
    }else{
      return of(skill)
    }
  }
}