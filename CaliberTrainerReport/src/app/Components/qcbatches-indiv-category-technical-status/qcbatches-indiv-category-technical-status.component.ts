import { Component, OnInit, HostListener } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { SecondChartService } from 'src/app/second-chart.service';


@Component({
  selector: 'app-qcbatches-indiv-category-technical-status',
  templateUrl: './qcbatches-indiv-category-technical-status.component.html',
  styleUrls: ['./qcbatches-indiv-category-technical-status.component.css']
})
export class QCBatchesIndivCategoryTechnicalStatusComponent implements OnInit {
  lineGraphIcon = faChartLine;
  pickedCategory: any;
  myLineChart: any;
  categories: string[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(private secondChartService: SecondChartService) { }

  ngOnInit(): void {

    this.graphAdjust();

    this.pickedCategory = 'Java';
    this.categories = ['Java', 'SQL', 'Javascript', 'Servlet'];
    this.displayGraph();
  }

  updateGraph() {
    console.log('Changed category!');
    this.displayGraph();

  }

  displayGraph() {
    if (this.myLineChart){
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
        labels: this.secondChartService.getXData(),
        datasets: [{
          label: 'Overall Average', // Name the series
          data: this.secondChartService.getAvgCategoryScores(this.pickedCategory), // Specify the data values array
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
          text: `QC scores based on ${this.pickedCategory}`
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
      }
    });
  }

  graphAdjust() {
    this.width = window.innerWidth;
    if (this.width < 1261) {
      // console.log('Screen less than 1261px'); // FOR MOBILE PHONE
      this.isBig = false;

      document.getElementById('divChart2').style.width = '80vw';
    } else {
      // console.log('Screen width is at least 1261px');
      this.isBig = true;

      document.getElementById('divChart2').style.width = '45vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;

    if (this.width < 1261) {
      // console.log('Screen less than 1260px'); // FOR MOBILE PHONE
      this.isBig = false;


      document.getElementById('divChart2').style.width = '80vw';
    } else {
     // console.log('Screen width is at least 1260px');
      this.isBig = true;

      document.getElementById('divChart2').style.width = '45vw';
    }
  }



}
