import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartBar,faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import { TechnicalStatusPerBatchService } from 'src/app/services/TechnicalStatusPerBatch.service';
import { Chart } from 'node_modules/chart.js';
import { QCComponent } from 'src/app/Components/qc/qc.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
@Component({
  selector: 'app-review-page-avg-qc-score',
  templateUrl: './review-page-avg-qc-score.component.html',
  styleUrls: ['./review-page-avg-qc-score.component.css']
})
export class ReviewPageAvgQcScoreComponent implements OnInit {

  private TechnicalStatusPerBatchServiceSubscription: Subscription;
  barGraphIcon = faChartBar;
  lineGraphIcon = faChartLine;
  avgQCGraph: any;
  batchNames: string[];
  technicalStatus: any[];

  constructor( private TechnicalStatusPerBatchService: TechnicalStatusPerBatchService,
    private qcTS: QCComponent,
    private displayGraphService: DisplayGraphService) { 
   
  }

  ngOnInit(): void {

    this.TechnicalStatusPerBatchServiceSubscription = this.TechnicalStatusPerBatchService
    .getTechnicalStatusPerBatch().subscribe((resp) => {
      this.avgQCGraph = resp;
      
      // Get batch names 
      for (const batch of this.avgQCGraph) {
        this.batchNames.push(batch.batchName);
        this.technicalStatus.push(batch.technicalStatus);
      }
    
    
    })
  }
}
