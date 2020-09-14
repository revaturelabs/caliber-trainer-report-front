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

  cumulativePoor: any[];
  cumulativeAverage: any[];
  cumulativeGood: any[];
  cumulativeSuper: any[];

  multiGraphYValues: any[];

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
    this.multiGraphYValues = [];
    this.batchNames = [];
    this.pickedCategory = 0;
    this.poorRawScore = [];
    this.averageRawScore = [];
    this.goodRawScore = [];
    this.superstarRawScore = [];
    this.cumulativeSuper = [];
    this.cumulativeAverage = [];
    this.cumulativeGood = [];
    this.cumulativePoor = [];


    let trainerId = sessionStorage.getItem("selectedId");
    let gA2: any[] = JSON.parse(sessionStorage.getItem("graphingArray2" + trainerId));
    if(gA2 != null && !gA2.includes(null)){
      this.categoriesName = gA2[2];
      this.categoriesObj = gA2[3];

      this.setScoreValues();
      this.displayGraph(gA2[0], gA2[1]);

    } else {

    

    this.secondChartServiceSubscription = this.secondChartService
      .getAvgCategoryScoresObservables()
      .subscribe((resp) => {
        for (const obj of resp.batchByCategory) {
          this.categoriesName.push(obj.categoryName);
          this.categoriesObj.push(obj.batches);
        }
        this.categoriesName.unshift("Overview");
        this.categoriesObj.unshift(resp.batchByCategory[0].batches);
        // this.categoriesObj.unshift("COOL");
        this.setScoreValues();
        
        for (const score of resp.batchByCategory[0].batches) {
          this.batchNames.push(score.batchName);
        }



        let graphArray = [this.batchNames, this.yValues, this.categoriesName, this.categoriesObj];
        let trainerId = sessionStorage.getItem("selectedId");
        sessionStorage.setItem("graphingArray2" + trainerId, JSON.stringify(graphArray));

        // These arguments might need to change.
        this.displayGraph(this.batchNames, this.yValues);
      });

    }
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

    this.setScoreValues();
    this.displayGraph(this.batchNames, this.yValues);
  }

  setScoreValues() {
    if(this.pickedCategory == 0){
      let a:number = 0;
      this.categoriesObj.forEach(c => {

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
      };
      this.cumulativePoor.push(this.poorRawScore);
      this.poorRawScore = [];
      this.cumulativeGood.push(this.goodRawScore);
      this.goodRawScore = [];
      this.cumulativeAverage.push(this.averageRawScore);
      this.averageRawScore = [];
      this.cumulativeSuper.push(this.superstarRawScore);
      this.superstarRawScore = [];

      console.log(this.cumulativeGood);
      this.multiGraphYValues.push(this.yValues);
      
      this.yValues = [];
    
    
    });
    this.multiGraphYValues.forEach(y => {console.log(y)});
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
  }

  displayGraph(batchDisplayNames: string[], yDisplayValues: any[]) {
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
      // Removes the first (redundant) element
      this.multiGraphYValues.shift();
      for(let i = 1; i < this.categoriesName.length; i++){
        console.log("GRAPHING: " + this.categoriesName[i]);
        let lineColor:string;
        

        lineColor = colorArray[i-1];

        let dataObj = {
          label: ''+this.categoriesName[i], // Name the series
          data: this.multiGraphYValues[i-1], // Specify the data values array
          fill: false,
          borderColor: lineColor, // Add custom color border (Line)
          backgroundColor: '#000000', // Add custom color background (Points and Fill)
          borderWidth: 1, // Specify bar border width
        };

        lineData.push(dataObj);

      }




      // Just copy and paste

      const yLabels = {
        0: 'No Data',
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


    } else {
      let lineColor:string = colorArray[this.pickedCategory-1];
    

    const yLabels = {
      0: 'No Data',
      1: 'Poor',
      2: 'Average',
      3: 'Good',
      4: 'Superstar',
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
            borderColor: lineColor, // Add custom color border (Line)
            backgroundColor: '#000000', // Add custom color background (Points and Fill)
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
