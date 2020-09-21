import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnicalStatusPerBatchService } from './services/TechnicalStatusPerBatch.service';
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
import { BatchTechnicalStatusBySkillCategoryService } from './services/BatchTechnicalStatusBySkillCategory.service';
import { AssessmentByBatchService } from './services/AssessmentByBatch.service';
import { AssessmentByCategoryService } from './services/AssessmentByCategory.service';
import { FileUploadService } from './services/file-upload.service';
import { UrlService } from './services/url.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './Components/jsonuploader/upload.component';
import { ProgressPage } from './Components/progresspage/progress.component';
import { TrainerSelectorComponent } from './Components/trainer-selector/trainer-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiAllTrainersComponent } from './Components/api-all-trainers/api-all-trainers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarViewComponent } from './Components/calendar-view/calendar-view.component'
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { GetBatchService } from './services/get-batch.service';
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);



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
    HomeComponent,
    UploadComponent,
    ProgressPage,
    TrainerSelectorComponent,
    ApiAllTrainersComponent,
    CalendarViewComponent

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [TechnicalStatusPerBatchService, BatchTechnicalStatusBySkillCategoryService, AssessmentByBatchService, 
                AssessmentByCategoryService, UrlService, FileUploadService, GetBatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
