import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {
  @Input() bgPath: string;
  @Input() quote: string;
  private imgWidth: number;
  private imgHeight: number;
  private userWidth: number;
  private userHeight: number;
  scaledImgHeight: number;
  scaleRatio: number;

  constructor() { }

  ngOnInit(): void {
    this.getImageProperties();
    this.getUserProperties();
    this.startImageResizing();
    this.calculateNewImageHeight();

  }

  startImageResizing() {
    alert(this.imgWidth)
    alert(this.imgWidth)
    this.scaleRatio = this.imgWidth / this.imgHeight;
    window.onresize = () =>{
      this.getUserProperties();
      this.calculateNewImageHeight();
    }
  }

  calculateNewImageHeight() {
    this.scaledImgHeight = this.imgHeight * this.scaleRatio;
  }

  getImageProperties() {
    const img = new Image();
    img.onload = () => {
      this.imgHeight = img.height;
      this.imgWidth = img.width;
    };
    img.src = this.bgPath;
  }

  getUserProperties() {
    this.userWidth = window.screen.width;
    this.userHeight = window.screen.height;
  }

}
