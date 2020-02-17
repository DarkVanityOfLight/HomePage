import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {
  @Input() bgPath: string;
  @Input() quote: string;
  imgWidth: number;
  imgHeight: number;
  userWidth: number;
  userHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.getImageProperties();
    this.getUserProperties();
    
  }

  getImageProperties(){
    var img = new Image();
    img.onload = () =>{
      this.imgHeight = img.height;
      this.imgWidth = img.width;
      
    }
    img.src = this.bgPath;
  }

  getUserProperties(){
    this.userWidth = window.screen.width;
    this.userHeight = window.screen.height;
  }

}
