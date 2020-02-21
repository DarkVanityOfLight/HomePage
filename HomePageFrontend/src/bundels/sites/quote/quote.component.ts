import { Component, OnInit, Input } from '@angular/core';
import { callbackify } from 'util';

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

  startImageResizing(): void{
    this.scaleRatio = this.imgWidth / this.imgHeight;
    window.onresize = () =>{
      this.getUserProperties();
      this.calculateNewImageHeight();
    }
  }

  calculateNewImageHeight(): void{
    this.scaledImgHeight = this.imgHeight * this.scaleRatio;
  }

  getImageProperties(): void{
    const img = new Image();
    img.onload = () => {
      this.setImgProperties([img.height, img.width]);
    };
    img.src = this.bgPath;
  }

  setImgProperties(properties: number[]): void{
    this.imgHeight = properties[0];
    this.imgWidth = properties[1];
  }

  getUserProperties(): void{
    this.userWidth = window.screen.width;
    this.userHeight = window.screen.height;
  }

}
