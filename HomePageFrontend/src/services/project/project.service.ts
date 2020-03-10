import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/models/projekt';
import { HttpClient } from '@angular/common/http';
import { SkillModel } from 'src/models/skill';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl: string;

  constructor(private http: HttpClient) { 
    this.projectUrl = 'http://localhost:8000/projects';
  }

  get PROJECTS(): Observable<ProjectModel[]>{
    return this.http.get<ProjectModel[]>(this.projectUrl);
  }
}
