import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
      
    },
    nav: true
  }
  
    slides = [
      {id: 1, img: "assets/images/pic1.png"},
      {id: 2, img: "assets/images/pic2.png"},
      {id: 3, img: "assets/images/pic3.png"},
      
    ];



  constructor() { }

  ngOnInit(): void {
  }


}
