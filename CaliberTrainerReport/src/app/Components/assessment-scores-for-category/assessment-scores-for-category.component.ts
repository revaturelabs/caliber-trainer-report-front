import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import { AssessScoresByCategoryAllBatchesService } from 'src/app/services/AssessScoresByCategoryAllBatches.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';

@Component({
  selector: 'app-assessment-scores-for-category',
  templateUrl:
    './assessment-scores-for-category.component.html',
  styleUrls: [
    './assessment-scores-for-category.component.css',
  ],
})
export class AssessmentScoresForCategoryComponent
  implements OnInit, OnDestroy {
  private AssessScoresByCategoryAllBatchesServiceSubscription: Subscription;
  lineGraphIcon = faChartLine;
  tableGraphIcon = faTable;
  myLineChart: any;
  selectedValue: string;

  // The selected category, representing the index of the category data to display. If 0, displays all data ("Overview").
  pickedCategory: number;

  // An array of all category names.
  categoriesName: string[];
  
  // An array of all batch names. 
  batchNames: string[];

  // A 2D-array consisting of the scores of all batches across all categories.
  multiGraphYValues: number[][];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(
    private assessScoresByCategoryAllBatchesService: AssessScoresByCategoryAllBatchesService,
    private assessmentTS: AssessmentComponent,
    private displayGraphService: DisplayGraphService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.assessmentTS.selectedValue;
    this.graphAdjust();
    
    this.categoriesName = [];
    this.batchNames = [];
    this.multiGraphYValues = [];
    this.pickedCategory = 0;
    
    this.AssessScoresByCategoryAllBatchesServiceSubscription = this.assessScoresByCategoryAllBatchesService
    .getSixthGraphData().subscribe((resp) => {
      for (const score of resp.categories) {
        if(!this.isCategoryEmpty(score.batchAssessments)) {
          this.categoriesName.push(score.category);
          this.multiGraphYValues.push(JSON.parse(JSON.stringify(this.getBatchAverages(score.batchAssessments))));
        } 
      }
        
      for (const score of resp.categories[0].batchAssessments) {
        this.batchNames.push(score.batchName);
      }

      this.categoriesName.unshift("Overview");
      this.displayGraph();
    },
    () => {
      console.log("An error has occurred building the assessment-scores-for-category.");
    });

  }

  /**
   * Displays a graph based on the given data.
   */
  displayGraph() {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    var colorArray = [ 
      '#FF0000', '#FF8C00', 
      '#FFD700',  '#228B22',
      '#000080', '#4B0082',
      '#FF00FF', '#800000',
      '#00FF00', '#00CED1',
      '#9370DB', '#000000',
      '#6495ED', '#696969']

    // An array of objects. Each object should contain a yDisplay array within.
    let lineData: any[] = [];
    if(this.pickedCategory == 0){
      for(let i = 1; i < this.categoriesName.length; i++){
        let lineColor: string = colorArray[(i-1) % colorArray.length];

        let dataObj = {
          label: ''+this.categoriesName[i], // Name the series
          data: this.multiGraphYValues[i-1], // Specify the data values array
          fill: false,
          borderColor: lineColor, // Add custom color border (Line)
          backgroundColor: lineColor, // Add custom color background (Points and Fill)
          borderWidth: 1, // Specify bar border width
        };

        lineData.push(dataObj);
      }
  
      this.myLineChart = new Chart('sixthChart', {
        type: 'line',
        data: {
          labels: this.batchNames,
          datasets: lineData,
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100,
                  callback(value) {
                    return value + '%';
                  },
                },
              },
            ],
          },
          title: {
            display: true,
            text: `QC Scores Overview`,
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
        },
      });
    } else {

    
    let lineColor:string = colorArray[this.pickedCategory-1];

    this.myLineChart = new Chart('sixthChart', {
      type: 'line',
      data: {
        labels: this.batchNames,
        datasets: [
          {
            label: 'Overall Average', // Name the series
            data: this.multiGraphYValues[this.pickedCategory - 1], // Specify the data values array
            fill: false,
            borderColor: lineColor, // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
                callback(value) {
                  return value + '%';
                },
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Assessment scores based on ${
            this.categoriesName[this.pickedCategory]
          }`,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });
  }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart6');
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
  doubleClickGraph6(): void {
    const graphSelector = document.getElementById(
      'assessment-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'trend') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'trend';
    }
    this.graphAdjust();
  }

  private isCategoryEmpty(batchAssessments:{assessments:number[]}[]): boolean {
    for(const assessments of batchAssessments) {
      if(assessments.assessments.length != 0) {
        return false;
      }
    }

    return true;
  }

  private getBatchAverages(batchAssessments: {assessments:number[]}[]): number[] {
    let yValueSet: number[] = [];
      for(const assessments of batchAssessments) {
        if(!assessments.assessments || assessments.assessments.length == 0) {
          yValueSet.push(0);
        } else {
          yValueSet.push(assessments.assessments.reduce((acc, curr) => acc + curr) / assessments.assessments.length);
        }
      }
    return yValueSet;
  }

  ngOnDestroy() {
    if (this.AssessScoresByCategoryAllBatchesServiceSubscription != undefined) {
      this.AssessScoresByCategoryAllBatchesServiceSubscription.unsubscribe();
    }
  }
}
