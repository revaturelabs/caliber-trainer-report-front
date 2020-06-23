import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { SecondChartService } from 'src/app/second-chart.service';
import { QCComponent } from 'src/app/Components/qc/qc.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/display-graph.service';


@Component({
  selector: 'app-qcbatches-indiv-category-technical-status',
  templateUrl: './qcbatches-indiv-category-technical-status.component.html',
  styleUrls: ['./qcbatches-indiv-category-technical-status.component.css'],
})
export class QCBatchesIndivCategoryTechnicalStatusComponent
  implements OnInit, OnDestroy {
  private secondChartServiceSubscription: Subscription;
  lineGraphIcon = faChartLine;
  tableGraphIcon = faTable;
  pickedCategory: any;
  myLineChart: any;
  categoriesName: string[];
  categoriesObj: any[];
  selectedValue: any;
  poorRawScore: any[];
  averageRawScore: any[];
  goodRawScore: any[];
  superstarRawScore: any[];

  batchNames: string[];
  yValues: any[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(
    private secondChartService: SecondChartService,
    private qcTS: QCComponent,
    private displayGraphService: DisplayGraphService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    this.graphAdjust();
    this.categoriesObj = [];
    this.categoriesName = [];
    this.yValues = [];
    this.batchNames = [];
    this.pickedCategory = 0;
    this.poorRawScore = [];
    this.averageRawScore = [];
    this.goodRawScore = [];
    this.superstarRawScore = [];

    this.secondChartServiceSubscription = this.secondChartService
      .getAvgCategoryScoresObservables()
      .subscribe((resp) => {
        for (const obj of resp.batchByCategory) {
          this.categoriesName.push(obj.categoryName);
          this.categoriesObj.push(obj.batches);
        }
        this.setScoreValues();
        for (const score of resp.batchByCategory[0].batches) {
          this.batchNames.push(score.batchName);
        }

        this.displayGraph(this.batchNames, this.yValues);
      });
  }

  updateGraph() {
    this.yValues = [];
    this.poorRawScore = [];
    this.averageRawScore = [];
    this.goodRawScore = [];
    this.superstarRawScore = [];

    this.setScoreValues();
    this.displayGraph(this.batchNames, this.yValues);
  }

  setScoreValues() {
    for (const stuff of this.categoriesObj[this.pickedCategory]) {
      const score = stuff.score;
      let totalValue = 0;
      let quantity = 0;

      this.poorRawScore.push(score.poor);
      this.averageRawScore.push(score.average);
      this.goodRawScore.push(score.good);
      this.superstarRawScore.push(score.superstar);

      totalValue =
        score.poor * 0 +
        score.average * 1 +
        score.good * 2 +
        score.superstar * 3;
      quantity =
        score.poor +
        score.average +
        score.good +
        score.superstar;

      if (isNaN(totalValue / quantity)) {
        this.yValues.push(0);
      } else {
        this.yValues.push(
          Math.round((totalValue / quantity) * 100) / 100
        );
      }
    }
  }

  displayGraph(batchDisplayNames: string[], yDisplayValues: any[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    const yLabels = {
      0: 'Poor',
      1: 'Average',
      2: 'Good',
      3: 'Superstar',
    };

    this.myLineChart = new Chart('secondChart', {
      type: 'line',
      data: {
        labels: batchDisplayNames,
        datasets: [
          {
            label: 'Overall Average', // Name the series
            data: yDisplayValues, // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
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
                suggestedMax: 3,
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
          text: `QC scores based on ${
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

  // This method selects the large view of the graph when double clicking the graph title.
  doubleClickGraph2(): void {
    const graphSelector = document.getElementById(
      'qc-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'individual') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'individual';
    }
  }

  ngOnDestroy() {
    this.secondChartServiceSubscription.unsubscribe();
  }
}
