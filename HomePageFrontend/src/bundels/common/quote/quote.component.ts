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

  private imgScale: number;
  private _userWidth: number;

  public scaledImgHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.startResizing();
  }

  startResizing(){
    this.getScale();
    window.onresize = () => {
      this.setuserWidth(window.innerWidth);
      this.setScaledImgHeight();
    }
  }

  getScale(){
    const img = new Image();
    img.onload = () => {
      this.setScale([img.width, img.height]);
      const userWidth = window.innerWidth;
      this.setScaledImgHeight(userWidth);

    }
    img.src = this.bgPath;
  }

  setScale(imgProperties: number[]){
    this.imgScale = imgProperties[1] / imgProperties[0];
  }

 setScaledImgHeight(userWidth?: number){
   if (userWidth == undefined){
      this.scaledImgHeight = this.imgScale * this._userWidth;
    } else {
      this.scaledImgHeight = this.imgScale * userWidth;
    }
  }

  setuserWidth(width: number){
    this._userWidth = width;
  }

}
