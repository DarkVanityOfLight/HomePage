import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { SkillModel } from '../../models/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private _SKILLS: SkillModel[];
  private debug: boolean;
  private skillUrl: string;

  constructor(private http: HttpClient) { 
    this.debug = true;
    if (this.debug){
      this._SKILLS = [{
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        title: 'Python',
        text: 'This is my text, I wonder if it does line breaks auto'
        },
        {
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        title: 'Python',
        text: 'This is my text, I wonder if it does line breaks auto'
        }
      ]
    }else{

    }
   }
}
