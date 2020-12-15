import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  days = [
    { nr: 1, stars: '**' },
    { nr: 2, stars: '**' },
    { nr: 3, stars: '**' },
    { nr: 4, stars: '**' },
    { nr: 5, stars: '**' },
    { nr: 6, stars: '**' },
    { nr: 7, stars: '**' },
    { nr: 8, stars: '**' },
    { nr: 9, stars: '**' },
    { nr: 10, stars: '*' },
    { nr: 11, stars: '*'}
  ];

  constructor(
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
