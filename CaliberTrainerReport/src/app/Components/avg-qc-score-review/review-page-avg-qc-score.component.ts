import { Component, OnInit } from '@angular/core';
import { faChartBar,faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { DisplayQcAverageGraphService } from 'src/app/services/display-qc-average-graph.service';
import { BatchService } from 'src/app/services/batch.service';

@Component({
  selector: 'review-page-avg-qc-score',
  templateUrl: './review-page-avg-qc-score.component.html',
  styleUrls: ['./review-page-avg-qc-score.component.css'],
})
export class ReviewPageAvgQcScoreComponent implements OnInit {
  barGraphIcon = faChartBar;
  lineGraphIcon = faChartLine;
  avgQCGraphObj: any;
  batchNames: string[] = [];
  technicalStatus: any[] = [];
  avgScores: any[] = [];
  batchLabel: string[] = [];
  avgQCGraph: any;
  bgColor: any[] = [];

  constructor(
    private batchService: BatchService,
    private displayQcAverageGraphService: DisplayQcAverageGraphService
  ) {}

  ngOnInit(): void {
    this.batchService.getTechnicalStatusPerBatch().subscribe((resp) => {
      this.initializeComponent(resp);
    });
  }

  initializeComponent(resp) {
    if (resp != null && resp != undefined) {
      this.avgQCGraphObj = resp;
      // Get batch names
      for (const batch of this.avgQCGraphObj) {
        this.batchNames.push(batch.batchName);
        this.technicalStatus.push(batch.technicalStatus);
      }
  
      for (const batchScores of this.technicalStatus) {
        let totalScores: number = 0;
        let avgScore: number = 0;
        for (let i in batchScores) {
          totalScores += parseInt(batchScores[i]);
          switch (i) {
            //these are the students who scored poorly in QC
            case '0':
              avgScore += 1 * parseInt(batchScores[i]);
              break;
            //these are the students who scored average in QC
            case '1':
              avgScore += 2 * parseInt(batchScores[i]);
              break;
            //these are the students who scored good in QC
            case '2':
              avgScore += 3 * parseInt(batchScores[i]);
              break;
            //these are superstar students who knocked it out of the park.
            case '3':
              avgScore += 4 * parseInt(batchScores[i]);
              break;
          }
        }
        //finds the numerical average.
        if (totalScores > 0) avgScore = Math.round(avgScore / totalScores);
        else avgScore = 1;
        if (avgScore < 1) avgScore = 1;
        switch (avgScore) {
          case 1:
            this.batchLabel.push('Poor');
            this.bgColor.push('#e33936');
            break;
          case 2:
            this.batchLabel.push('Average');
            this.bgColor.push('#ebc634');
            break;
          case 3:
            this.batchLabel.push('Good');
            this.bgColor.push('#3fe86c');
            break;
          case 4:
            this.batchLabel.push('Superstar');
            this.bgColor.push('blue');
            break;
        }
        this.avgScores.push(avgScore);
      }
      this.displayGraph();
    }
  }

  displayGraph() {
    const graphText = 'QC Average Batch Score';
    this.avgQCGraph = new Chart('qcAvgScoreGraph', {
      type: 'bar',
      data: {
        labels: this.batchNames,
        datasets: [
          {
            label: 'Average Score',
            data: this.avgScores,
            backgroundColor: this.bgColor,
            backgroundHoverColor: this.bgColor,
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: this.displayQcAverageGraphService.graphOptions(graphText),
    });
  }
}
