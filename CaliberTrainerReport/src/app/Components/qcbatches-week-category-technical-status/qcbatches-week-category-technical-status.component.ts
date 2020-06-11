import { Component, OnInit, HostListener } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { ThirdChartService } from 'src/app/third-chart.service';

@Component({
  selector: 'app-qcbatches-week-category-technical-status',
  templateUrl: './qcbatches-week-category-technical-status.component.html',
  styleUrls: ['./qcbatches-week-category-technical-status.component.css']
})
export class QCBatchesWeekCategoryTechnicalStatusComponent implements OnInit {
  barGraphIcon = faChartBar;
  width: number;
  isBig: boolean;
  pickedBatch: any;
  // pickedWeek: any;
  myChart: any;
  batches: string[];

  constructor(private thirdChartService: ThirdChartService) { }


  ngOnInit(): void {
    this.graphAdjust();

    this.pickedBatch = 'Batch 745';
    this.batches = ['Batch 745', 'Batch 746', 'Batch 747', 'Batch 748'];
    this.displayGraph();
  }

  updateGraph() {
    console.log('Changed batch!');
    this.displayGraph();

  }

  displayGraph() {
    if (this.myChart){
      this.myChart.destroy();
    }

    this.myChart = new Chart('thirdChart', {
      type: 'bar',
      data: {
        labels: this.thirdChartService.getXData(),
        datasets: [{
          label: 'Good',
          data: this.thirdChartService.getGoodScores(this.pickedBatch),
          backgroundColor: '#3fe86c',
          backgroundHoverColor: '#3fe86c',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Average',
          data: this.thirdChartService.getOkScores(this.pickedBatch),
          backgroundColor: '#ebc634',
          backgroundHoverColor: '#ebc634',
          borderWidth: 1
        },
        {
          label: 'Poor',
          data: this.thirdChartService.getBadScores(this.pickedBatch),
          backgroundColor: '#e33936',
          backgroundHoverColor: '#e33936',
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          xAxes: [{stacked: true}],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              suggestedMax: 50,
              callback (value, index, values) {
                return value + '%';
              }
            }
          }]
        },
        title: {
          display: true,
          text: 'Percent of each QC technical status per week'
        },
        responsive: true,
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

      document.getElementById('divChart').style.width = '80vw';
    } else {
      // console.log('Screen width is at least 1261px');
      this.isBig = true;

      document.getElementById('divChart').style.width = '45vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;

    if (this.width < 1261) {
      // console.log('Screen less than 1010px'); // FOR MOBILE PHONE
      this.isBig = false;


      document.getElementById('divChart').style.width = '80vw';
    } else {
      // console.log('Screen width is at least 1010px');
      this.isBig = true;

      document.getElementById('divChart').style.width = '45vw';
    }
  }

}
