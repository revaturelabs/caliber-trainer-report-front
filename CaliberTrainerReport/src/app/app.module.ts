import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestChartComponent } from './Components/test-chart/test-chart.component';
import { FirstChartService } from './first-chart.service';
import { MainNavBarComponent } from './Components/main-nav-bar/main-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChartComponent,
    MainNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [FirstChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
