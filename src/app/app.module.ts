import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
