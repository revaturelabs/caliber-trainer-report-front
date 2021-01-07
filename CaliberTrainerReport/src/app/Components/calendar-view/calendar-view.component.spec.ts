import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarViewComponent } from './calendar-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Batch } from 'src/app/class/batch';
import { QcOverallBatchTechnicalScoresComponent } from '../qc-overall-batch-technical-scores/qc-overall-batch-technical-scores.component';
import { getWeekYearWithOptions } from 'date-fns/fp';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { combineLatest, of } from 'rxjs';



describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;
  beforeEach(async(() => {
    let mockBatches: {batches: Batch[]} = {
      batches: [
        {id : 1,
        batchId : 'batch',
        name : 'nameBatch',
        startDate : '2012-1-1',
        endDate : '2012-9-2',
        skill : 'nice',
        location : 'surehasone',
        type : 'revature',
        qcNotes : null,
        assessments : null,
        currentWeek : 12,
        },
        {id : 2,
          batchId : 'batch2',
          name : 'nameBatch2',
          startDate : '2010-1-1',
          endDate : '2011-1-2',
          skill : 'nice',
          location : 'surehasone',
          type : 'revature',
          qcNotes : null,
          assessments : null,
          currentWeek : 12,
          }
         ]
        }
        for (let batch of mockBatches.batches) {
          let latest = mockBatches.batches.reduce(function (r,a) {
          return r.startDate > a.startDate ? r : a;
          });
          let latestSplit = latest.startDate.split("-");
          let latestYear = parseInt(latestSplit[0]);
          expect(latestYear).toEqual(2012) // verifies sort output for mock data
        }
        
    TestBed.configureTestingModule({
      declarations: [ CalendarViewComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render', () => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  })
});
