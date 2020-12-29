import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QCComponent } from './Components/qc/qc.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { HomeComponent } from './Components/home/home.component';
import { QcOverallBatchTechnicalScoresComponent } from './Components/qc-overall-batch-technical-scores/qc-overall-batch-technical-scores.component';
import { QcOverallWeekTechnicalScoresComponent } from './Components/qc-overall-week-technical-scores/qc-overall-week-technical-scores.component';
import { AssessmentScoresAccordingToBatchComponent } from './Components/assessment-scores-according-to-batch/assessment-scores-according-to-batch.component';
import { AssessmentScoresForCategoryComponent } from './Components/assessment-scores-for-category/assessment-scores-for-category.component';
import { UploadComponent } from './Components/jsonuploader/upload.component';
import { CalendarViewComponent } from './Components/calendar-view/calendar-view.component';
import { AssessmentScoresAccordingToCategoryComponent } from './Components/assessment-scores-according-to-category/assessment-scores-according-to-category.component';
import { QcTechnicalScoresByCategoryAcrossBatchesComponent } from './Components/qc-technical-scores-by-category-across-batches/qc-technical-scores-by-category-across-batches.component';
import { ReviewPageComponent } from './Components/review-page/review-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qc', component: QCComponent},
  { path: 'assessment', component: AssessmentComponent },
  { path: 'qctechnicalstatus', component: QcOverallBatchTechnicalScoresComponent},
  { path: 'qcscoresbycategory', component: QcTechnicalScoresByCategoryAcrossBatchesComponent},
  { path: 'qcweektechnicalscores', component: QcOverallWeekTechnicalScoresComponent},
  { path: 'assessmenttechnicalstatus', component: AssessmentScoresAccordingToBatchComponent},
  { path: 'assessmentscoresacategory', component: AssessmentScoresAccordingToCategoryComponent},
  { path: 'assessmenttrendtechnicalstatus', component: AssessmentScoresForCategoryComponent},
  { path: 'uploader', component: UploadComponent },
  { path: 'calendarview', component: CalendarViewComponent },
  { path: 'review-page', component:ReviewPageComponent },

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
