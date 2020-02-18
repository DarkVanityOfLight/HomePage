import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.styl']
})
export class StartComponent implements OnInit {
  skillHidden: boolean;

  constructor() { }

  ngOnInit(): void {
    this.skillHidden = true;
  }

  toggleHidden(){
    this.skillHidden = !this.skillHidden;
  }

}
