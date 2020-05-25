import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabetCounterPipe } from './CustomPipes/alphabet-counter.pipe';
import { ExponentialCalculatorPipe } from './CustomPipes/exponential-calculator.pipe';
import { MenuComponent } from './Menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetCounterPipe,
    ExponentialCalculatorPipe,
    routingComponents,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
