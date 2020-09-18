import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { AssessmentByBatchService } from 'src/app/services/AssessmentByBatch.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';

@Component({
  selector: 'app-assessment-batches-technical-status',
  templateUrl: './assessment-batches-technical-status.component.html',
  styleUrls: ['./assessment-batches-technical-status.component.css'],
})
export class AssessmentBatchesTechnicalStatusComponent implements OnInit, OnDestroy {
  private AssessmentByBatchServiceSubscription: Subscription;
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
  scoreNames: string[];

  constructor(
    private AssessmentByBatchService: AssessmentByBatchService,
    private assessmentTS: AssessmentComponent,
    private displayGraphService: DisplayGraphService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.assessmentTS.selectedValue;
    this.graphAdjust();
    this.pickedBatch = 0;
    this.batchNames = [];
    this.batchesObj = [];
    this.scoreNames = ['Exam', 'Verbal', 'Presentation', 'Project', 'Other'];
    this.allBatches = [];
    let ssallBatches: any = JSON.parse(sessionStorage.getItem("allBatches"));
    let ssBatchNames: any = JSON.parse(sessionStorage.getItem("batchNames"));
    let trainerId: string = sessionStorage.getItem("selectedId");
    let gArray4: any[]= JSON.parse(sessionStorage.getItem("graphArray4" + trainerId));

    // Performance workaround to prevent constantly loading from DB.
    if(gArray4 != null && !gArray4.includes(null) && false){
      console.log("ACCESSING SESSION STORAGE");
      
      this.allBatches = JSON.parse(JSON.stringify(gArray4))[1];
      this.batchNames = JSON.parse(JSON.stringify(gArray4))[2];
      console.log(this.batchNames);
      this.batchesObj = this.allBatches[this.pickedBatch].assessmentScores;
      this.displayGraph(this.batchesObj);

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

      let graphArray4 = [this.batchesObj, this.allBatches, this.batchNames];
      let trainerId: string = sessionStorage.getItem("selectedId");
      sessionStorage.setItem("graphArray4" + trainerId, JSON.stringify(graphArray4));

      this.displayGraph(this.batchesObj);
    });
  }
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
        labels: this.scoreNames,
        datasets: [
          {
            label: 'Average assessment scores',
            backgroundColor: '#937cfa33',
            borderColor: '#937cfa',
            pointBackgroundColor: 'blue',
            pointHoverBackgroundColor: '#937cfa33',
            pointHoverBorderColor: 'blue',
            data: yDisplayValue,
          },
        ],
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 20,
          },
        },
        title: {
          display: true,
          text: `Average assessment scores based on Batch: ${
            this.batchNames[this.pickedBatch]
          }`,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        tooltips: {
          mode: 'index',
          callbacks: {
            label: (tooltipItem, data) => {
              return (
                data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel + '%'
              );
            },
          },
        },
      },
    });
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart4');
    this.isBig = this.displayGraphService.graphAdjust(
          chartElem,
          this.assessmentTS.selectedValue,
          this.isBig
        );

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.graphAdjust();
  }

  // This method selects the large view of the graph when double clicking the graph title.
  doubleClickGraph4(): void {
    const graphSelector = document.getElementById(
      'assessment-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'status') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'status';
    }
  }

  ngOnDestroy() {
    if(this.AssessmentByBatchServiceSubscription != undefined){
      this.AssessmentByBatchServiceSubscription.unsubscribe();

    }
  }
}
