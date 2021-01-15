import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  SystemJsNgModuleLoader,
} from '@angular/core';
import { faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { BatchTechnicalStatusBySkillCategoryService } from 'src/app/services/BatchTechnicalStatusBySkillCategory.service';
import { QCComponent } from 'src/app/Components/qc/qc.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service'; 
import { FilterBatch } from 'src/app/utility/FilterBatch';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import {FilterPipe} from '../../filter.pipe';


@Component({
  selector: 'app-qc-technical-scores-by-category-across-batches',
  templateUrl:
    './qc-technical-scores-by-category-across-batches.component.html',
  styleUrls: ['./qc-technical-scores-by-category-across-batches.component.css'],
})
export class QcTechnicalScoresByCategoryAcrossBatchesComponent
  implements OnInit, OnDestroy {
  filterText: string;
  private BatchTechnicalStatusBySkillCategoryServiceSubscription: Subscription;
  lineGraphIcon = faChartLine;
  tableGraphIcon = faTable;
  pickedCategory: any;
  pickedCategories: string[];
  myLineChart: any;
  categoriesName: string[];
  categoriesObj: any[];
  selectedValue: any;
  poorRawScore: any[];
  averageRawScore: any[];
  goodRawScore: any[];
  superstarRawScore: any[];
  filter = new FilterPipe();
  cumulativePoor: any[];
  cumulativeAverage: any[];
  cumulativeGood: any[];
  cumulativeSuper: any[];

  multiGraphYValues: any[];

  batchNames: string[];

  // this array tracks which batches to show on the graph
  // index of batchFlags corresponds to index of batchNames:string[]
  batchFlags: boolean[];

  // FilterBatch is a helper class located in utility folder under src > app
  // it contains a method called filterBatch(any[], boolean[]) that takes in any[] and returns a new any[] with true indices from boolean[]
  batchFilter: FilterBatch;

  // this array tracks which categories to show on the graph.
  // index categoryFlags corresponds to index of categoryNames: string[]
  // unlike batchFlags, there is no corresponding categoryFilter because there
  // is no need to keep track of category selection beyond boolean.
  categoryFlags: boolean[];
  catFlags: any[];

  yValues: any[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;
  noScoresByCategoryData: boolean;
  errorMessage: string;

  selectAll = true;
  catSelectAll = true;

  constructor(
    private batchTechnicalStatusBySkillCategoryService: BatchTechnicalStatusBySkillCategoryService,
    private qcTS: QCComponent,
    private displayGraphService: DisplayGraphService,
    private localStorageServ: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    this.categoriesObj = [];
    this.categoriesName = [];
    this.yValues = [];
    this.multiGraphYValues = [];
    this.batchNames = [];
    this.pickedCategory = 0;
    this.pickedCategories = [];
    this.poorRawScore = [];
    this.averageRawScore = [];
    this.goodRawScore = [];
    this.superstarRawScore = [];
    this.cumulativeSuper = [];
    this.cumulativeAverage = [];
    this.cumulativeGood = [];
    this.cumulativePoor = [];

    this.batchFlags = [];
    this.catFlags = [];
    this.batchFilter = new FilterBatch();

    this.filterText = '';
    this.categoryFlags = [];

    this.BatchTechnicalStatusBySkillCategoryServiceSubscription = this.batchTechnicalStatusBySkillCategoryService
      .getAvgCategoryScoresObservables()
      .subscribe(
        (resp) => {
          // We must ensure that the batchByCategory property of the response
          // exists before attempting to get its length, otherwise we'll get a
          // null pointer exception
          if (resp.batchByCategory === undefined) {
            this.displayErrorMassage('Data Source Unavaliable');
            return;
          }

          // Remove entries with no scores.
          for (let i = resp.batchByCategory.length - 1; i >= 0; i--) {
            let batchSum: number = 0;
            for (const batch of resp.batchByCategory[i].batches) {
              let scores = batch.score;
              batchSum +=
                scores.average + scores.good + scores.poor + scores.superstar;
            }
            if (batchSum == 0) {
              resp.batchByCategory.splice(i, 1);
            }
          }

          // In the event that all the entries are removed. We display
          // a message to the user and do not display the data
          // otherwise, we can adjust the graph
          if (resp.batchByCategory.length === 0) {
            this.displayErrorMassage('No Data to Display');
            return;
          } else {
            this.graphAdjust();
          }

          for (const obj of resp.batchByCategory) {
            this.categoriesName.push(obj.categoryName);
            this.categoriesObj.push(obj.batches);
            this.categoryFlags.push(true);
          }
          //this.categoriesName.unshift('Overview');
          //this.categoriesObj.unshift(resp.batchByCategory[0].batches);
          // this.categoriesObj.unshift("COOL");
          this.setScoreValues();

          for (const score of resp.batchByCategory[0].batches) {
            this.batchNames.push(score.batchName);
            this.batchFlags.push(true);
          }

          // These arguments might need to change.
          this.displayGraph(
            this.batchFilter.filterBatch(this.batchNames, this.batchFlags),
            this.batchFilter.filterBatch(this.yValues, this.batchFlags)
          );
        },
        (error) => {
          this.displayErrorMassage('Data Source Unavaliable');
          return;
        }
      );
  }

  updateGraph() {
    this.yValues = [];
    this.multiGraphYValues = [];
    this.poorRawScore = [];
    this.averageRawScore = [];
    this.goodRawScore = [];
    this.superstarRawScore = [];
    this.cumulativeSuper = [];
    this.cumulativeAverage = [];
    this.cumulativeGood = [];
    this.cumulativePoor = [];

    let trainerId = this.localStorageServ.get('selectedId');
    let gA2: any[] = this.localStorageServ.get('graphingArray2' + trainerId);
    this.setScoreValues();
    if (this.selectedValue == 0) {
      ///selceted value set to "all" in the QC component

      this.displayGraph(gA2[0], gA2[1]);
      this.displayGraph(
        this.batchFilter.filterBatch(gA2[0], this.batchFlags),
        this.batchFilter.filterBatch(gA2[1], this.batchFlags)
      );
    } else {
      this.displayGraph(
        this.batchFilter.filterBatch(this.batchNames, this.batchFlags),
        this.batchFilter.filterBatch(this.yValues, this.batchFlags)
      );
    }
  }
  setScoreValues() {
    if (this.pickedCategory == 0) {
      this.categoriesObj.forEach((c) => {
        // Each object c is an individual category on the graph. We want to display ALL simultaneously.

        // JAVA
        for (const stuff of c) {
          const score = stuff.score;
          let totalValue = 0;
          let quantity = 0;

          this.poorRawScore.push(score.poor);
          this.averageRawScore.push(score.average);
          this.goodRawScore.push(score.good);
          this.superstarRawScore.push(score.superstar);

          totalValue =
            score.poor * 1 +
            score.average * 2 +
            score.good * 3 +
            score.superstar * 4;
          quantity = score.poor + score.average + score.good + score.superstar;

          if (isNaN(totalValue / quantity)) {
            this.yValues.push(0);
          } else {
            this.yValues.push(Math.round((totalValue / quantity) * 100) / 100);
          }
        }
        this.cumulativePoor.push(this.poorRawScore);
        this.poorRawScore = [];
        this.cumulativeGood.push(this.goodRawScore);
        this.goodRawScore = [];
        this.cumulativeAverage.push(this.averageRawScore);
        this.averageRawScore = [];
        this.cumulativeSuper.push(this.superstarRawScore);
        this.superstarRawScore = [];

        this.multiGraphYValues.push(this.yValues);

        this.yValues = [];
      });
    } else {
      // For all the data we want to to view concerning a single week (category) chosen by user.
      for (const stuff of this.categoriesObj[this.pickedCategory]) {
        const score = stuff.score;
        let totalValue = 0;
        let quantity = 0;

        this.poorRawScore.push(score.poor);
        this.averageRawScore.push(score.average);
        this.goodRawScore.push(score.good);
        this.superstarRawScore.push(score.superstar);

        totalValue =
          score.poor * 1 +
          score.average * 2 +
          score.good * 3 +
          score.superstar * 4;
        quantity = score.poor + score.average + score.good + score.superstar;

        if (isNaN(totalValue / quantity)) {
          this.yValues.push(0);
        } else {
          this.yValues.push(Math.round((totalValue / quantity) * 100) / 100);
        }
      }
    }
  }

  displayGraph(batchDisplayNames: string[], yDisplayValues: any[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    // Remove categories if they are not present in the shown batches.
    let batchRemoveEmptyReduce = (acc, curr, i) => {
      if (this.batchFlags[i]) {
        return (acc += curr);
      } else {
        return acc;
      }
    };

    var colorArray = [
      '#FF0000',
      '#FF8C00',
      '#FFD700',
      '#228B22',
      '#000080',
      '#4B0082',
      '#FF00FF',
      '#800000',
      '#00FF00',
      '#00CED1',
      '#9370DB',
      '#000000',
      '#6495ED',
      '#696969',
    ];

    // An array of objects. Each object should contain a yDisplay array within.
    var pointRadius = [];
    var pointHitRadius = [];
    let lineData: any[] = [];

    if (this.pickedCategory == 0) {
      for (let i = 0; i < this.categoriesName.length; i++) {
        if (this.multiGraphYValues[i].reduce(batchRemoveEmptyReduce, 0) !== 0) {
          if (this.categoryFlags[i]) {
            let lineColor: string;

            lineColor = colorArray[i % colorArray.length];
            var pointRadius1 = [];
            var pointHitRadius1 = [];

            let dataWith0Values = this.batchFilter.filterBatch(
              this.multiGraphYValues[i],
              this.batchFlags
            );

            //remove interactive points where there is no data
            var j;

            for (j = 0; j < dataWith0Values.length; j++) {
              pointRadius1.push(3);
              pointHitRadius1.push(3);
              if (dataWith0Values[j] == 0) {
                pointRadius1[j] = 0;
                pointHitRadius1[j] = 0;
              }
            }

            // //filter out no data values and replace with averages
            let finalYValues = this.cleanYValues(dataWith0Values);

            let dataObj = {
              label: '' + this.categoriesName[i], // Name the series

              data: finalYValues,

              fill: false,
              borderColor: lineColor, // Add custom color border (Line)
              backgroundColor: '#000000', // Add custom color background (Points and Fill)
              borderWidth: 1, // Specify bar border width
              pointRadius: pointRadius1,
              pointHitRadius: pointHitRadius1,
            };
            lineData.push(dataObj);
          }
        }
      }

      // Just copy and paste

      const yLabels = {
        0: '',
        1: 'Poor',
        2: 'Average',
        3: 'Good',
        4: 'Superstar',
      };

      this.myLineChart = new Chart('secondChart', {
        type: 'line',
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
                  suggestedMax: 4,
                  stepSize: 1,
                  callback(value, index, values) {
                    return yLabels[value];
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
    }
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart2');
    this.isBig = this.displayGraphService.graphAdjust(
      chartElem,
      this.qcTS.selectedValue,
      this.isBig
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.graphAdjust();
  }

  emptyDoubleClick() {
    event.stopPropagation();
  }

  // This method selects the large view of the graph when double clicking the graph title.
  doubleClickGraph2(): void {
    const graphSelector = document.getElementById(
      'qc-graph-selector'
    ) as HTMLSelectElement;
    console.log(graphSelector);
    if (graphSelector.value === 'individual') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'individual';
    }
  }

  ngOnDestroy() {
    if (
      this.BatchTechnicalStatusBySkillCategoryServiceSubscription != undefined
    ) {
      this.BatchTechnicalStatusBySkillCategoryServiceSubscription.unsubscribe();
    }
  }

  toggleBatch(name: string): void {
    let index = this.batchNames.indexOf(name);
    this.batchFlags[index] = !this.batchFlags[index];
    this.updateGraph();
  }


checkSelectAll(): void {
  this.selectAll = !this.selectAll;
  for(let i = 0 ; i<this.batchNames.length; i ++){
    this.batchFlags[i] = this.selectAll;
  }
  //deselect all option needs to be unchecked:
  this.updateGraph();
}

catCheckSelectAll(): void {
  this.catSelectAll = !this.catSelectAll;
  for(let i = 0 ; i<this.categoriesName.length; i ++){
    this.categoryFlags[i] = this.catSelectAll;
  }
 
  //deselect all option needs to be unchecked:
  this.updateGraph();
}

toggleCategory(name: string): void{
  let index = this.categoriesName.indexOf(name);
  this.categoryFlags[index ] = !this.categoryFlags[index];
  this.updateGraph();
}

batch_dropdown_flag: boolean = true;
toggleBatchDropdown(): void {
  this.batch_dropdown_flag = !this.batch_dropdown_flag;
  this.filterText = "";
  if(!this.cat_dropdown_flag){
    this.cat_dropdown_flag = true;
  }
}

cat_dropdown_flag: boolean = true;
toggleCatDropdown(): void{
  this.cat_dropdown_flag = !this.cat_dropdown_flag;
  this.filterText = "";
  if(!this.batch_dropdown_flag){
    this.batch_dropdown_flag = true;
  }
}

cleanYValues(dataWith0Values: number[]) {
  //filter out no data values and replace with averages
  let finalYValues = [];

  if (dataWith0Values[0] == 0) {
    //the first value is zero, replace it with the first non-zero value
    for (let k = 1; k < dataWith0Values.length; k++) {
      if (dataWith0Values[k] != 0) {
        dataWith0Values[0] = dataWith0Values[k];
        break;
      }
    }
  }

  if (dataWith0Values[dataWith0Values.length - 1] == 0) {
    //the last value is zero, replace it with the first previous non-zero value
    for (let k = dataWith0Values.length - 1; k >= 0; k--) {
      if (dataWith0Values[k] != 0) {
        dataWith0Values[dataWith0Values.length - 1] = dataWith0Values[k];
        break;
      }
    }
  }

  finalYValues.push(dataWith0Values[0]);
  //replace any zero inner y values with averages of values around them
  for (let k = 1; k < dataWith0Values.length - 1; k++) {
    if (dataWith0Values[k] == 0) {
      let prev;
      for (let h = k - 1; h >= 0; h--) {
        if (dataWith0Values[h] != 0) {
          prev = dataWith0Values[h];
          break;
        }
      }

      let next;
      for (let h = k + 1; h < dataWith0Values.length; h++) {
        if (dataWith0Values[h] != 0) {
          next = dataWith0Values[h];
          break;
        }
      }

      let avg = (next + prev) / 2;
      finalYValues.push(avg);
    } else {
      finalYValues.push(dataWith0Values[k]);
    }
  }
  finalYValues.push(dataWith0Values[dataWith0Values.length - 1]);
  return finalYValues;
}

  displayErrorMassage(message: string) {
    console.log(message);
    this.errorMessage = message;
    this.noScoresByCategoryData = true;
  }
}
