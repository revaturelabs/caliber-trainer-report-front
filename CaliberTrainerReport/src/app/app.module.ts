import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestChartComponent } from './Components/test-chart/test-chart.component';
import { FirstChartService } from './first-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    TestChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirstChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
