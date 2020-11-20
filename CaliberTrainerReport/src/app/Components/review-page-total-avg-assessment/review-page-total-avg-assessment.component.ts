import { Component, OnInit, HostListener } from '@angular/core';
import { AssessmentByBatchService } from 'src/app/services/AssessmentByBatch.service';
import { Subscription } from 'rxjs';
import { Chart } from 'node_modules/chart.js';
import { DisplayGraphService } from 'src/app/services/display-graph.service';

@Component({
  selector: 'app-review-page-total-avg-assessment',
  templateUrl: './review-page-total-avg-assessment.component.html',
  styleUrls: ['./review-page-total-avg-assessment.component.css']
})
export class ReviewPageTotalAvgAssessmentComponent implements OnInit {
  private AssessmentByBatchServiceSubscription: Subscription;
  pickedBatch: any;
  allBatches: any[];
  batchesObj: any[];
  batchNames: string[];
  myLineChart: any;
  batchAverages: any[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;
  constructor(private AssessmentByBatchService: AssessmentByBatchService,
    private displayGraphService: DisplayGraphService
  ) { }

  ngOnInit(): void {
    this.allBatches = [];
    this.batchesObj = [];
    this.batchNames = [];
    this.batchAverages = [];
    this.pickedBatch = 0;
    let trainerId: string = sessionStorage.getItem("selectedId");

    let reviewPageAvgTotal: any[]= JSON.parse(sessionStorage.getItem("reviewPageAvgTotal" + trainerId));

    // Performance workaround to prevent constantly loading from DB.
    if(reviewPageAvgTotal != null && !reviewPageAvgTotal.includes(null) && false){
      console.log("ACCESSING SESSION STORAGE");
      
      this.allBatches = JSON.parse(JSON.stringify(reviewPageAvgTotal))[1];
      this.batchNames = JSON.parse(JSON.stringify(reviewPageAvgTotal))[2];
      console.log(this.batchNames);
      this.batchesObj = this.allBatches[this.pickedBatch].assessmentScores;
      //this.displayGraph(this.batchesObj);

    } else {
      console.log("ACESSING DB");
    
      this.AssessmentByBatchServiceSubscription = this.AssessmentByBatchService.getAssessmentByBatch().subscribe((resp) => {
        this.allBatches = resp;
        for (const i of this.allBatches.keys()) {
          for (const [j, value] of this.allBatches[i].assessmentScores.entries()) {
            this.allBatches[i].assessmentScores[j] =
              Math.round(value * 100) / 100;
          }
        }

        for (const item of resp) {
          this.batchNames.push(item.batchName);
        }

        this.batchesObj = this.allBatches[this.pickedBatch].assessmentScores;

        let reviewPageAvgTotal = [this.batchesObj, this.allBatches, this.batchNames];
        console.log("batchNames Info: " + this.batchNames)
        for (const i of this.allBatches.keys()) {
            let batch_total = 0;
            let batch_avg = 0;
            for (let j=0; j<this.allBatches[i].assessmentScores.length; j++){
              console.log("allBatches[" + i + "] = " + this.allBatches[i].assessmentScores[j])
              batch_total = batch_total + this.allBatches[i].assessmentScores[j];
              batch_avg = batch_total/(j+1);
            }
            batch_avg = Math.round(batch_avg * 100) / 100;
            this.batchAverages[i] = batch_avg;
            console.log("Batch " + i + ": avg: " + batch_avg)
        }
        let trainerId: string = sessionStorage.getItem("selectedId");
        sessionStorage.setItem("reviewPageAvgTotal" + trainerId, JSON.stringify(reviewPageAvgTotal));

        this.displayGraph(this.batchNames, this.batchAverages);
      });

    }
  }

  displayGraph(batchDisplayNames: string[], batchAverages: any[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    var colorArray = [ 
      '#FF0000', '#FF8C00', 
      '#FFD700',  '#228B22',
      '#000080', '#4B0082',
      '#FF00FF', '#800000',
      '#00FF00', '#00CED1',]

      const graphText = 'QC Average Batch Score';
      this.myLineChart = new Chart('totalAvgAssessmentChart', {
        type: 'bar',
        data: {
          labels: batchDisplayNames,
          datasets: [
            {
              label: 'Average Score',
              data: batchAverages,
              backgroundColor: colorArray,
              backgroundHoverColor: colorArray,
              borderWidth: 1,
              fill: false,
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100,
                  callback(value, index, values) {
                    return value + '%';
                  },
                },
              },
            ],
          },
          title: {
            display: true,
            text: `Total Average Assessment Scores`,
          },
          legend: {
            display: false
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
        },
      });

/*



    // An array of objects. Each object should contain a yDisplay array within.
    let lineData: any[] = [];

      for(let i = 0; i < batchDisplayNames.length; i++){
        let lineColor:string;

        lineColor = colorArray[i];

        let dataObj = {
          label: ''+batchDisplayNames[i], // Name the series
          data: batchAverages[i], // Specify the data values array
          fill: false,
          borderColor: lineColor, // Add custom color border (Line)
          backgroundColor: lineColor, // Add custom color background (Points and Fill)
          borderWidth: 1, // Specify bar border width
        };

        lineData.push(dataObj);

      }
  
      this.myLineChart = new Chart('totalAvgAssessmentChart', {
        type: 'bar',
        data: {
          labels: batchDisplayNames,
          datasets: lineData,
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100,
                  callback(value, index, values) {
                    return value + '%';
                  },
                },
              },
            ],
          },
          title: {
            display: true,
            text: `Total Average Assessment Scores`,
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
        },
      });
*/
  }

  graphAdjust() {
    const chartElem = document.getElementById('divTotalAvgAssessment');
    this.isBig = this.displayGraphService.graphAdjust(
      chartElem,
      'all',
      this.isBig
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.graphAdjust();
  }
}
