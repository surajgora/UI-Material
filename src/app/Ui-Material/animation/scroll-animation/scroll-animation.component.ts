import { Component,OnInit  } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-scroll-animation',
  imports: [],
  templateUrl: './scroll-animation.component.html',
  styleUrl: './scroll-animation.component.scss'
})
export class ScrollAnimationComponent implements OnInit{

  ngOnInit(): void {
    AOS.init({
      duration: 1000,  // animation duration in milliseconds
      once: true       // animate only once per element
    });
  }
}
