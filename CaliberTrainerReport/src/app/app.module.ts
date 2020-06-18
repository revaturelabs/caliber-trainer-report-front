import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChartService } from './first-chart.service';
import { MainNavBarComponent } from './Components/main-nav-bar/main-nav-bar.component';
import { QCBatchesTechnicalStatusComponent } from './Components/qcbatches-technical-status/qcbatches-technical-status.component';
import { QCBatchesIndivCategoryTechnicalStatusComponent } from './Components/qcbatches-indiv-category-technical-status/qcbatches-indiv-category-technical-status.component';
import { QCBatchesWeekCategoryTechnicalStatusComponent } from './Components/qcbatches-week-category-technical-status/qcbatches-week-category-technical-status.component';
import { AssessmentBatchesTechnicalStatusComponent } from './Components/assessment-batches-technical-status/assessment-batches-technical-status.component';
import { AssessmentBatchesIndivCategoryTechnicalStatusComponent } from './Components/assessment-batches-indiv-category-technical-status/assessment-batches-indiv-category-technical-status.component';
import { AssessmentBatchesTrendCategoryTechnicalStatusComponent } from './Components/assessment-batches-trend-category-technical-status/assessment-batches-trend-category-technical-status.component';
import { QCComponent } from './Components/qc/qc.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { HomeComponent } from './Components/home/home.component';
import { SecondChartService } from './second-chart.service';
import { FourthChartService } from './fourth-chart.service';
import { FifthChartService } from './fifth-chart.service';
import { UrlService } from './url.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    QCBatchesTechnicalStatusComponent,
    QCBatchesIndivCategoryTechnicalStatusComponent,
    QCBatchesWeekCategoryTechnicalStatusComponent,
    AssessmentBatchesTechnicalStatusComponent,
    AssessmentBatchesIndivCategoryTechnicalStatusComponent,
    AssessmentBatchesTrendCategoryTechnicalStatusComponent,
    QCComponent,
    AssessmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FirstChartService,SecondChartService,FourthChartService,FifthChartService,UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
