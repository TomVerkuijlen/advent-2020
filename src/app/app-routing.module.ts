import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DayFourComponent } from './components/day-four/day-four.component';
import { DayOneComponent } from './components/day-one/day-one.component';
import { DayThreeComponent } from './components/day-three/day-three.component';
import { DayTwoComponent } from './components/day-two/day-two.component';

const routes: Routes = [
  { path: 'day1', component: DayOneComponent },
  { path: 'day2', component: DayTwoComponent },
  { path: 'day3', component: DayThreeComponent },
  { path: 'day4', component: DayFourComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
