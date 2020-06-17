import { Component, OnInit, HostListener } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { SecondChartService } from 'src/app/second-chart.service';
import { QCComponent } from 'src/app/Components/qc/qc.component';

@Component({
  selector: 'app-qcbatches-indiv-category-technical-status',
  templateUrl: './qcbatches-indiv-category-technical-status.component.html',
  styleUrls: ['./qcbatches-indiv-category-technical-status.component.css']
})
export class QCBatchesIndivCategoryTechnicalStatusComponent implements OnInit {
  lineGraphIcon = faChartLine;
  pickedCategory: any;
  myLineChart: any;
  categoriesName: string[];
  categoriesObj: any[];
  selectedValue: any;

  batchNames: string[];
  yValues: any[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(private secondChartService: SecondChartService, private qcTS: QCComponent) { }

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    this.graphAdjust();

    this.categoriesObj = [];
    this.categoriesName = [];
    this.yValues = [];
    this.batchNames = [];
    this.pickedCategory = 0;

    this.secondChartService.getAvgCategoryScoresObservables().subscribe(
      resp => {
        console.log(resp);
        for (const obj of resp.batchByCategory) {
          this.categoriesName.push(obj.categoryName);
          this.categoriesObj.push(obj.batches);
        }

        for (const stuff of this.categoriesObj[this.pickedCategory]){
          const score = stuff.score;
          let totalValue = 0;
          let quantity = 0;

          totalValue = (score.poor * 0) + (score.average * 1) + (score.good * 2) + (score.superstar * 3);
          quantity = score.poor + score.average + score.good + score.superstar;

          this.yValues.push(Math.round((totalValue / quantity) * 100) / 100);
        }

        console.log("UMMM " + this.yValues);

        for (const score of resp.batchByCategory[0].batches) {
          this.batchNames.push(score.batchName);
        }

        this.displayGraph(this.batchNames, this.yValues);
      }
    );
  }

  updateGraph() {
    console.log('Changed category!');
    this.yValues = [];
    for (const stuff of this.categoriesObj[this.pickedCategory]){
      const score = stuff.score;
      let totalValue = 0;
      let quantity = 0;

      totalValue = (score.poor * 0) + (score.average * 1) + (score.good * 2) + (score.superstar * 3);
      quantity = score.poor + score.average + score.good + score.superstar;

      if (isNaN(totalValue / quantity)){
        this.yValues.push(0);
      }else {
        this.yValues.push(Math.round((totalValue / quantity) * 100) / 100);
      }
    }
    this.displayGraph(this.batchNames, this.yValues);

  }

  displayGraph(batchDisplayNames: string[], yDisplayValues: any[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    const yLabels = {
      0: 'Poor',
      1: 'Average',
      2: 'Good',
      3: 'Superstar'
    };

    this.myLineChart = new Chart('secondChart', {
      type: 'line',
      data: {
        labels: batchDisplayNames,
        datasets: [{
          label: 'Overall Average', // Name the series
          data: yDisplayValues, // Specify the data values array
          fill: false,
          borderColor: '#2196f3', // Add custom color border (Line)
          backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 3,
              stepSize: 1,
              callback(value, index, values) {
                return yLabels[value];
              }
            }
          }]
        },
        title: {
          display: true,
          text: `QC scores based on ${this.categoriesName[this.pickedCategory]}`
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
      }
    });
  }

  graphAdjust() {
    if (this.qcTS.selectedValue === 'all') {
      this.width = window.innerWidth;
      if (this.width < 1281) {
        // console.log('Screen less than 1261px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart2').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1261px');
        this.isBig = true;

        document.getElementById('divChart2').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart2').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.qcTS.selectedValue === 'all') {

      this.width = window.innerWidth;

      if (this.width < 1281) {
        // console.log('Screen less than 1260px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart2').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1260px');
        this.isBig = true;

        document.getElementById('divChart2').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart2').style.width = '90vw';

    }
  }



}
