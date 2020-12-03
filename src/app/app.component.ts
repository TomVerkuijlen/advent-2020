import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  days = [
    { nr: 1, stars: '**' },
    { nr: 2, stars: '**' },
    { nr: 3, stars: '**' },
    { nr: 4, stars: '' }
  ];

  constructor(
  ) {}


}
