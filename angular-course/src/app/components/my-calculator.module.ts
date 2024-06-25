import { NgModule } from '@angular/core';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [FormsModule, BrowserModule],
  exports: [MyCalculatorComponent],
  declarations: [MyCalculatorComponent],
  providers: [],
})
export class MyCalculatorModule { }