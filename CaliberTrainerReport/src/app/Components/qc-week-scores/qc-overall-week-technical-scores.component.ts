import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { TechnicalStatusByWeekService } from 'src/app/services/tech-status-by-week.service';
import { QCComponent } from 'src/app/Components/qc/qc.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';

@Component({
  selector: 'app-qc-overall-week-technical-scores',
  templateUrl: './qc-overall-week-technical-scores.component.html',
  styleUrls: ['./qc-overall-week-technical-scores.component.css'],
})
export class QcOverallWeekTechnicalScoresComponent
  implements OnInit, OnDestroy {
  private statusByWeekServiceSubscription: Subscription;
  barGraphIcon = faChartBar;
  width: number;
  isBig: boolean;

  thirdGraphObj: any;
  batches: string[];
  pickedBatch: any;

  xlabels: string[]; // week numbers
  nullCount: any[];
  nullData: any[];
  poorCount: any[];
  poorData: any[];
  averageCount: any[];
  averageData: any[];
  goodCount: any[];
  goodData: any[];
  superstarCount: any[];
  superstarData: any[];
  categories: string[];

  selectedValue: any;

  errorMessage: string;

  myGraph: any;
  public noStatusByWeekData: boolean;

  constructor(
    private statusByWeekService: TechnicalStatusByWeekService,
    private qcTS: QCComponent,
    private displayGraphService: DisplayGraphService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    this.graphAdjust();
    // This method receives the JSON object from the URL GET request

    let trainerId = sessionStorage.getItem('selectedId');

    this.statusByWeekServiceSubscription = this.statusByWeekService
      .getTechnicalStatusByWeek()
      .subscribe(
        (resp) => {
          console.log('Fetching statusByWeek successful:\n');
          console.log(resp);

          this.thirdGraphObj = resp;
          this.batches = this.getBatches();
          this.pickedBatch = this.batches[0];

          if (this.pickedBatch === undefined) {
            this.displayErrorMassage('No Data to Display');
            return;
          }

          let graphArray = [this.thirdGraphObj, this.batches[0]];
          sessionStorage.setItem(
            'graphArray3' + trainerId,
            JSON.stringify(graphArray)
          );

          this.displayGraph();
        },
        (error) => {
          console.log('Error fetching statusByWeek:\n' + error);
          this.displayErrorMassage('Data Source Unavailable');
          return;
        }
      );
  }

  // returns array of the batch ids (need for populating batch drop-down list)
  getBatches(): string[] {
    const batches = [];
    for (const batch of this.thirdGraphObj) {
      console.log(batch);
      if (batches.indexOf(batch.category) === -1) {
        batches.push(batch.category);
      }
    }
    return batches;
  }

  displayGraph() {
    const elmnt = document.getElementById('thirdChart');
    const y = elmnt.scrollTop;
    if (this.getXData(this.pickedBatch).length === 0) {
      this.myGraph.destroy();
    }

    if (this.myGraph) {
      this.myGraph.destroy();
    }

    this.myGraph = new Chart('thirdChart', {
      type: 'bar',
      data: {
        labels: this.getXData(this.pickedBatch),
        datasets: [
          {
            label: 'SuperStar',
            data: this.getSuperstarScores(this.pickedBatch),
            backgroundColor: '#2196f3',
            backgroundHoverColor: '#2196f3',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Good',
            data: this.getGoodScores(this.pickedBatch),
            backgroundColor: '#3fe86c',
            backgroundHoverColor: '#3fe86c',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Average',
            data: this.getAverageScores(this.pickedBatch),
            backgroundColor: '#ebc634',
            backgroundHoverColor: '#ebc634',
            borderWidth: 1,
          },
          {
            label: 'Poor',
            data: this.getPoorScores(this.pickedBatch),
            backgroundColor: '#e33936',
            backgroundHoverColor: '#e33936',
            borderWidth: 1,
          },
          {
            label: 'Null',
            data: this.getNullScores(this.pickedBatch),
            backgroundColor: '#7a7b7d',
            backgroundHoverColor: '#7a7b7d',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                suggestedMax: 50,
                callback(value, index, values) {
                  return value + '%';
                },
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              return (
                data.datasets[tooltipItem.datasetIndex].label +
                ': ' +
                tooltipItem.yLabel +
                '%'
              );
            },
          },
        },
        title: {
          display: true,
          text: 'Percent of each QC technical status per week',
        },
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });

    const htmlElement = document.documentElement;
    htmlElement.scrollTop = y;
  }

  getXData(batch: string): string[] {
    this.xlabels = [];
    for (let batchCategory of this.thirdGraphObj) {
      this.xlabels.push(batchCategory.category);
    }
    return this.xlabels;
  }

  getSuperstarScores(batch: string): any[] {
    this.superstarData = [];
    this.superstarCount = [];
    for (const batchCategory of this.thirdGraphObj) {
      this.superstarData.push(batchCategory.superstarAvg);
      this.superstarCount.push(batchCategory.superstarCount);
    }
    return this.superstarData;
  }

  getGoodScores(batch: string): any[] {
    this.goodData = [];
    this.goodCount = [];
    for (const batchCategory of this.thirdGraphObj) {
      this.goodData.push(batchCategory.goodAvg);
      this.goodCount.push(batchCategory.goodCount);
    }
    return this.goodData;
  }

  getAverageScores(batch: string): any[] {
    this.averageData = [];
    this.averageCount = [];
    for (const batchCategory of this.thirdGraphObj) {
      this.averageData.push(batchCategory.averageAvg);
      this.averageCount.push(batchCategory.averageCount);
    }
    return this.averageData;
  }

  getPoorScores(batch: string): any[] {
    this.poorData = [];
    this.poorCount = [];
    for (const batchCategory of this.thirdGraphObj) {
      this.poorData.push(batchCategory.poorAvg);
      this.poorCount.push(batchCategory.poorCount);
    }
    return this.poorData;
  }

  getNullScores(batch: string): any[] {
    this.nullData = [];
    this.nullCount = [];
    for (const batchCategory of this.thirdGraphObj) {
      this.nullData.push(batchCategory.nullAvg);
      this.nullCount.push(batchCategory.nullCount);
    }
    return this.nullData;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart3');
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

  // This method selects the large view of the graph when double clicking the graph title.
  doubleClickGraph3(): void {
    const graphSelector = document.getElementById(
      'qc-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'week') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'week';
    }
  }

  ngOnDestroy() {
    this.statusByWeekServiceSubscription.unsubscribe();
  }

  displayErrorMassage(message: string) {
    console.log(message);
    this.errorMessage = message;
    this.noStatusByWeekData = true;
  }
}
