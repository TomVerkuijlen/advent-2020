import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DayEightComponent } from './components/day-eight/day-eight.component';
import { DayElevenComponent } from './components/day-eleven/day-eleven.component';
import { DayFiveComponent } from './components/day-five/day-five.component';
import { DayFourComponent } from './components/day-four/day-four.component';
import { DayNineComponent } from './components/day-nine/day-nine.component';
import { DayOneComponent } from './components/day-one/day-one.component';
import { DaySevenComponent } from './components/day-seven/day-seven.component';
import { DaySixComponent } from './components/day-six/day-six.component';
import { DayThreeComponent } from './components/day-three/day-three.component';
import { DayTwelveComponent } from './components/day-twelve/day-twelve.component';
import { DayTwoComponent } from './components/day-two/day-two.component';
import { DayTenComponent } from './day-ten/day-ten.component';

const routes: Routes = [
  { path: 'day1', component: DayOneComponent, data: {animation: 'Day1Page'} },
  { path: 'day2', component: DayTwoComponent, data: {animation: 'Day2Page'} },
  { path: 'day3', component: DayThreeComponent, data: {animation: 'Day3Page'} },
  { path: 'day4', component: DayFourComponent, data: {animation: 'Day4Page'} },
  { path: 'day5', component: DayFiveComponent, data: {animation: 'Day5Page'} },
  { path: 'day6', component: DaySixComponent, data: {animation: 'Day6Page'} },
  { path: 'day7', component: DaySevenComponent, data: {animation: 'Day7Page'} },
  { path: 'day8', component: DayEightComponent, data: {animation: 'Day8Page'} },
  { path: 'day9', component: DayNineComponent, data: {animation: 'Day9Page'} },
  { path: 'day10', component: DayTenComponent, data: {animation: 'Day10Page'} },
  { path: 'day11', component: DayElevenComponent, data: {animation: 'Day11Page'} },
  { path: 'day12', component: DayTwelveComponent, data: {animation: 'Day12Page'} },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
