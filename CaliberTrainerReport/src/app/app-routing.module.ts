import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QCComponent } from './Components/qc/qc.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { HomeComponent } from './Components/home/home.component';
import { QCBatchesTechnicalStatusComponent } from './Components/qcbatches-technical-status/qcbatches-technical-status.component';
import { QCBatchesIndivCategoryTechnicalStatusComponent } from './Components/qcbatches-indiv-category-technical-status/qcbatches-indiv-category-technical-status.component';
import { QCBatchesWeekCategoryTechnicalStatusComponent } from './Components/qcbatches-week-category-technical-status/qcbatches-week-category-technical-status.component';
import { AssessmentBatchesTechnicalStatusComponent } from './Components/assessment-batches-technical-status/assessment-batches-technical-status.component';
import { AssessmentBatchesIndivCategoryTechnicalStatusComponent } from './Components/assessment-batches-indiv-category-technical-status/assessment-batches-indiv-category-technical-status.component';
import { AssessmentBatchesTrendCategoryTechnicalStatusComponent } from './Components/assessment-batches-trend-category-technical-status/assessment-batches-trend-category-technical-status.component';
import { UploadComponent } from './Components/jsonuploader/upload.component';
import { CalendarViewComponent } from './Components/calendar-view/calendar-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qc', component: QCComponent},
  { path: 'assessment', component: AssessmentComponent },
  { path: 'qctechnicalstatus', component: QCBatchesTechnicalStatusComponent},
  { path: 'qcindivtechnicalstatus', component: QCBatchesIndivCategoryTechnicalStatusComponent},
  { path: 'qcweektechnicalstatus', component: QCBatchesWeekCategoryTechnicalStatusComponent},
  { path: 'assessmenttechnicalstatus', component: AssessmentBatchesTechnicalStatusComponent},
  { path: 'assessmentindivtechnicalstatus', component: AssessmentBatchesIndivCategoryTechnicalStatusComponent},
  { path: 'assessmenttrendtechnicalstatus', component: AssessmentBatchesTrendCategoryTechnicalStatusComponent},
  { path: 'uploader', component: UploadComponent },
  { path: 'calendarview', component: CalendarViewComponent },

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
