import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DayFourComponent } from './components/day-four/day-four.component';
import { DayOneComponent } from './components/day-one/day-one.component';
import { DayThreeComponent } from './components/day-three/day-three.component';
import { DayTwoComponent } from './components/day-two/day-two.component';

const routes: Routes = [
  { path: 'day1', component: DayOneComponent, data: {animation: 'Day1Page'} },
  { path: 'day2', component: DayTwoComponent, data: {animation: 'Day2Page'} },
  { path: 'day3', component: DayThreeComponent, data: {animation: 'Day3Page'} },
  { path: 'day4', component: DayFourComponent, data: {animation: 'Day4Page'} }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
