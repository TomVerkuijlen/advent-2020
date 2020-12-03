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

@NgModule({
  declarations: [
    AppComponent,
    DayThreeComponent,
    DayOneComponent,
    DayTwoComponent,
    DayFourComponent
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
