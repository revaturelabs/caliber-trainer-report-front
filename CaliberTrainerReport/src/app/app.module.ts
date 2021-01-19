import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavBarComponent } from './Components/main-nav-bar/main-nav-bar.component';
import { QcOverallBatchTechnicalScoresComponent } from './Components/qc-overall-batch-technical-scores/qc-overall-batch-technical-scores.component';
import { QcOverallWeekTechnicalScoresComponent } from './Components/qc-overall-week-technical-scores/qc-overall-week-technical-scores.component';
import { AssessmentScoresAccordingToBatchComponent } from './Components/assessment-scores-according-to-batch/assessment-scores-according-to-batch.component';
import { AssessmentScoresForCategoryComponent } from './Components/assessment-scores-for-category/assessment-scores-for-category.component';
import { QCComponent } from './Components/qc/qc.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { HomeComponent } from './Components/home/home.component';
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
import { CalendarViewComponent } from './Components/calendar-view/calendar-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AssessmentScoresAccordingToCategoryComponent } from './Components/assessment-scores-according-to-category/assessment-scores-according-to-category.component';
import { QcTechnicalScoresByCategoryAcrossBatchesComponent } from './Components/qc-technical-scores-by-category-across-batches/qc-technical-scores-by-category-across-batches.component';
import { ReviewPageComponent } from './Components/review-page/review-page.component';

import { ReviewPageTotalAvgAssessmentComponent } from './Components/review-page-total-avg-assessment/review-page-total-avg-assessment.component';

import { ReviewPageBestWorstCategoriesComponent } from './Components/review-page-best-worst-categories/review-page-best-worst-categories.component';
import { ReviewQcBestWorstComponent } from './Components/review-qc-best-worst/review-qc-best-worst.component';

import { ReviewPageAvgQcScoreComponent } from './Components/review-page-avg-qc-score/review-page-avg-qc-score.component';
import { ReviewPageSignificantChangesComponent } from './Components/review-page-significant-changes/review-page-significant-changes.component';
import { DxChartModule } from 'devextreme-angular';
import { FilterPipe } from './filter.pipe';
import { BatchService } from './services/batch.service';
import { AssessmentService } from './services/assessment.service';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    QcOverallBatchTechnicalScoresComponent,
    QcTechnicalScoresByCategoryAcrossBatchesComponent,
    QcOverallWeekTechnicalScoresComponent,
    AssessmentScoresAccordingToBatchComponent,
    AssessmentScoresAccordingToCategoryComponent,
    AssessmentScoresForCategoryComponent,
    QCComponent,
    AssessmentComponent,
    HomeComponent,
    UploadComponent,
    ProgressPage,
    TrainerSelectorComponent,
    ApiAllTrainersComponent,
    CalendarViewComponent,
    ReviewPageComponent,
    ReviewPageTotalAvgAssessmentComponent,
    ReviewPageBestWorstCategoriesComponent,
    ReviewQcBestWorstComponent,
    ReviewPageAvgQcScoreComponent,
    ReviewPageSignificantChangesComponent,
    FilterPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    NgbModule,
    BrowserAnimationsModule,
    DxChartModule
  ],
  providers: [AssessmentService, BatchService, UrlService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule {}
