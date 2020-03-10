import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AboutMeModel } from '../../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  private aboutMeUrl: string;

  constructor(private http: HttpClient) { 
    this.aboutMeUrl = "http://localhost:8000/about-me";
  }

  get ABOUT_ME(): Observable<AboutMeModel>{

    return this.http.get<AboutMeModel>(this.aboutMeUrl);
  }
}