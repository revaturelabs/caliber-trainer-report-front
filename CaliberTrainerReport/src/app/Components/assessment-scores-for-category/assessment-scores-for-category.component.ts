import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import { AssessScoresByCategoryAllBatchesService } from 'src/app/services/AssessScoresByCategoryAllBatches.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { FilterBatch } from '../../utility/FilterBatch';

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

  // this array tracks which batches to show on the graph
  // index of batchFlags corresponds to index of batchNames:string[]
  batchFlags: boolean[];
  // FilterBatch is a helper class located in utility folder under src > app
  // it contains a method called filterBatch(any[], boolean[]) that takes in any[] and returns a new any[] with true indices from boolean[]
  batchFilter: FilterBatch;

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

    this.batchFlags = [];
    this.batchFilter = new FilterBatch();

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
        this.batchFlags.push(true);
      }

      this.categoriesName.unshift("Overview");
      this.displayGraph(this.batchFilter.filterBatch(this.batchNames,this.batchFlags), this.batchFilter.filterBatch(this.multiGraphYValues,this.batchFlags));
    },
    () => {
      console.log("An error has occurred building the assessment-scores-for-category.");
    });
  }

  /**
   * Displays a graph based on the given data.
   */
  displayGraph(batchNames: string[], yValues: number[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    // Remove categories if they are not present in the shown batches.
    let batchRemoveEmptyReduce = (acc, curr, i) => {
      if(this.batchFlags[i]) {
        return acc += curr;
      } else {
        return acc;
      }
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
    var pointRadius = [];
    var pointHitRadius = [];
    let lineData: any[] = [];
    if(this.pickedCategory == 0){
      for(let i = 1; i < this.categoriesName.length; i++){
        if(this.multiGraphYValues[i-1].reduce(batchRemoveEmptyReduce, 0) != 0) {
          let lineColor: string = colorArray[(i-1) % colorArray.length];
          var pointRadius1 = [];
          var pointHitRadius1 = [];
                    let dataWith0Values = this.batchFilter.filterBatch(this.multiGraphYValues[i-1],this.batchFlags);
                    //remove interactive points where there is no data
                    var j;
                    //console.log(dataWith0Values.length)
                    for(j=0; j< dataWith0Values.length; j++) {
                      pointRadius1.push(3);
                      pointHitRadius1.push(3);
                      if (dataWith0Values[j] == 0) {
                        console.log(dataWith0Values[j])
                        pointRadius1[j] = 0;
                        pointHitRadius1[j] = 0; 
                        }
                    }
          
                    let finalYValues = this.cleanYValues(dataWith0Values);

          let dataObj = {
            label: ''+this.categoriesName[i], // Name the series
            data: finalYValues, // Specify the data values array
            fill: false,
            borderColor: lineColor, // Add custom color border (Line)
            backgroundColor: lineColor, // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
            pointRadius: pointRadius1,
            pointHitRadius: pointHitRadius1
          };

          lineData.push(dataObj);
        }
      }
  
      this.myLineChart = new Chart('sixthChart', {
        type: 'line',
        data: {
          labels: batchNames,
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

    
    let lineColor:string = colorArray[(this.pickedCategory-1) % colorArray.length];
    var i;
    //console.log(this.myLineChart.data.datasets[0].length)
    for(i=0; i< yValues.length; i++) {
      pointRadius.push(3);
      pointHitRadius.push(3);
      if (yValues[i] == 0) {
        console.log(yValues[i])
        pointRadius[i] = 0;
        pointHitRadius[i] = 0;
        }
    }

    let dataWith0Values = yValues;
    //filter out no data values and replace with averages of non-zero points
    let finalYValues = this.cleanYValues(dataWith0Values);

    this.myLineChart = new Chart('sixthChart', {
      type: 'line',
      data: {
        labels: batchNames,
        datasets: [
          {
            label: 'Overall Average', // Name the series
            data: finalYValues, // Specify the data values array
            fill: false,
            borderColor: lineColor, // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
            pointRadius: pointRadius,
            pointHitRadius: pointHitRadius
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

  updateGraph() {
    if(this.pickedCategory == 0) {
      this.displayGraph(this.batchFilter.filterBatch(this.batchNames,this.batchFlags), this.batchFilter.filterBatch(this.multiGraphYValues, this.batchFlags));
    } else {
      this.displayGraph(this.batchFilter.filterBatch(this.batchNames,this.batchFlags), this.batchFilter.filterBatch(this.multiGraphYValues[this.pickedCategory - 1], this.batchFlags));
    }
  }

  toggle(index: number): void{
    this.batchFlags[index] = !this.batchFlags[index];
    this.updateGraph();
  }

  batch_dropdown_flag: boolean = true;
  toggleBatchDropdown(): void{
    this.batch_dropdown_flag = !this.batch_dropdown_flag;
  }

  cleanYValues(dataWith0Values: number[]){
    //filter out no data values and replace with averages
    let finalYValues = [];

    if(dataWith0Values[0] == 0){
      //the first value is zero, replace it with the first non-zero value
      for(let k = 1; k < dataWith0Values.length; k++){
        if(dataWith0Values[k] != 0){
          dataWith0Values[0] = dataWith0Values[k];
          break;
        }
      }
    }

    if(dataWith0Values[dataWith0Values.length-1] == 0){
      //the last value is zero, replace it with the first previous non-zero value
      for(let k = dataWith0Values.length-1; k >= 0; k--){
        if(dataWith0Values[k] != 0){
          dataWith0Values[dataWith0Values.length-1] = dataWith0Values[k];
          break;
        }
      }
    }

    finalYValues.push(dataWith0Values[0]);
    //replace any zero inner y values with averages of values around them
    for(let k = 1; k < dataWith0Values.length-1; k++){
      if(dataWith0Values[k] == 0){

        let prev;
        for(let h = k-1; h >= 0; h--){
          if(dataWith0Values[h] != 0){
            prev = dataWith0Values[h];
            break;
          }
        }

        let next;
        for(let h = k+1; h < dataWith0Values.length; h++){
          if(dataWith0Values[h] != 0){
            next = dataWith0Values[h];
            break;
          }
        }

        let avg = (next+prev)/2;
        finalYValues.push(avg);
      } else {
        finalYValues.push(dataWith0Values[k]);
      }
    }
    finalYValues.push(dataWith0Values[dataWith0Values.length-1]);
    return finalYValues;
  }
}