import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {
  @Input() bgPath: string;
  @Input() quote: string;

  imgProperties: number[];

  constructor() { }

  ngOnInit(): void {
    this.imgProperties[3] = document.documentElement.clientWidth;
    this.imgProperties[4] = document.documentElement.clientHeight;
    alert(this.imgProperties[3] + ' ' + this.imgProperties[4]);
  }

  getImgProperties(): void {
    const img = new Image();
    img.onload = () => {
      this.imgProperties[0] = img.width;
      this.imgProperties[1] = img.height;
    };
    img.src = this.bgPath;
  }

}
