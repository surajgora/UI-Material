import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-scroll-animation2',
  imports: [],
  templateUrl: './scroll-animation2.component.html',
  styleUrl: './scroll-animation2.component.scss'
})
export class ScrollAnimation2Component implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 800,      // Animation duration (ms)
      once: false,        // Repeat animation every time on scroll down
      mirror: true,       // Animate in reverse on scroll up
      easing: 'ease-in-out', // Easing type (optional)
      offset: 100         // Offset (px) before triggering animation
    });
  }
  ngAfterViewInit(): void {
  }
}
