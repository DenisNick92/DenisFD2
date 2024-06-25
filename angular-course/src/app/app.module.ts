import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCalculatorModule } from './components/my-calculator.module';
import { NavigationComponentComponent } from './navigation.component/navigation.component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
