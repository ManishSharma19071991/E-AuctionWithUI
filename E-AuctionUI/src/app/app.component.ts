import {Component, HostListener, OnInit} from '@angular/core';

import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
 
  constructor( private router: Router, private route: ActivatedRoute) {
  }

  @HostListener('window:scroll') onScroll(): void {
  /*  this.isBackToTopActive = window.pageYOffset > 20;*/
  }

  logout() {
  
  }

  ngOnInit(): void {
   
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}
