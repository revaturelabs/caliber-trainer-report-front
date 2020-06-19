import { Component, OnInit, HostListener } from '@angular/core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { FourthChartService } from 'src/app/fourth-chart.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';

@Component({
  selector: 'app-assessment-batches-technical-status',
  templateUrl: './assessment-batches-technical-status.component.html',
  styleUrls: ['./assessment-batches-technical-status.component.css']
})
export class AssessmentBatchesTechnicalStatusComponent implements OnInit {
  radarChartIcon = faChartArea;
  pickedBatch: any;
  myRadarGraph: any;
  batchNames: string[];
  batchesObj: any[];
  selectedValue: any;
  allBatches: any[];
  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(private fourthChartService: FourthChartService, private assessmentTS: AssessmentComponent) { }

  ngOnInit(): void {
    this.selectedValue = this.assessmentTS.selectedValue;
    this.graphAdjust();
    this.pickedBatch = 0;
    this.batchNames = [];
    this.batchesObj = [];
    this.allBatches = [];

    this.fourthChartService.getAssessmentByBatch().subscribe(
      resp => {
        this.allBatches = resp;
        console.log(resp);
        for (const [index, value] of this.allBatches.entries()) {
          for (let j = 0; j < this.allBatches[index].assessmentScores.length; j++) {
            this.allBatches[index].assessmentScores[j] = Math.round(this.allBatches[index].assessmentScores[j] * 100) / 100;
          }
        }

        for (const item of resp) {
          this.batchNames.push(item.batchName);
        }

        this.batchesObj = this.allBatches[this.pickedBatch].assessmentScores;

        this.displayGraph(this.batchesObj);
      }
    );



  }

  updateGraph() {
    this.batchesObj = [];
    this.batchesObj = this.allBatches[this.pickedBatch].assessmentScores;
    this.displayGraph(this.batchesObj);
  }

  displayGraph(yDisplayValue: any[]) {
    if (this.myRadarGraph) {
      this.myRadarGraph.destroy();
    }

    this.myRadarGraph = new Chart('fourthChart', {
      type: 'radar',
      data: {
        labels: ['Exam', 'Verbal', 'Presentation', 'Project', 'Other'],
        datasets: [
          {
            label: 'Average assessment scores',
            backgroundColor: '#937cfa33',
            borderColor: '#937cfa',
            pointBackgroundColor: 'blue',
            pointHoverBackgroundColor: '#937cfa33',
            pointHoverBorderColor: 'blue',
            data: yDisplayValue
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 20
          }
        },
        title: {
          display: true,
          text: `Average assessment scores based on Batch: ${this.batchNames[this.pickedBatch]}`
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        tooltips: {
          mode: 'index',
          callbacks: {
            label: (tooltipItem, data) => {
              return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel + '%';
            }
          }
        }
      }
    });
  }

  graphAdjust() {
    if (this.assessmentTS.selectedValue === 'all') {
      this.width = window.innerWidth;
      if (this.width < 1281) {
        // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart').style.width = '80vw';
      } else {
        this.isBig = true;

        document.getElementById('divChart').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.assessmentTS.selectedValue === 'all') {

      this.width = window.innerWidth;

      if (this.width < 1281) {
        // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart').style.width = '80vw';
      } else {
        this.isBig = true;

        document.getElementById('divChart').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart').style.width = '90vw';

    }
  }


}
