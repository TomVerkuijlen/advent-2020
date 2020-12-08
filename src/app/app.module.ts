import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DayThreeComponent } from './components/day-three/day-three.component';
import { DayOneComponent } from './components/day-one/day-one.component';
import { DayTwoComponent } from './components/day-two/day-two.component';
import { AppRoutingModule } from './app-routing.module';
import { DayFourComponent } from './components/day-four/day-four.component';
import { DayFiveComponent } from './components/day-five/day-five.component';
import { DaySixComponent } from './components/day-six/day-six.component';
import { DaySevenComponent } from './components/day-seven/day-seven.component';
import { DayEightComponent } from './components/day-eight/day-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    DayThreeComponent,
    DayOneComponent,
    DayTwoComponent,
    DayFourComponent,
    DayFiveComponent,
    DaySixComponent,
    DaySevenComponent,
    DayEightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
