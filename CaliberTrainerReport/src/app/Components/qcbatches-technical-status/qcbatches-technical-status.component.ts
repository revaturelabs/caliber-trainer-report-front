import { Component, OnInit, HostListener } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FirstChartService } from 'src/app/first-chart.service';
import { Chart } from 'node_modules/chart.js';


@Component({
  selector: 'app-qcbatches-technical-status',
  templateUrl: './qcbatches-technical-status.component.html',
  styleUrls: ['./qcbatches-technical-status.component.css']
})
export class QCBatchesTechnicalStatusComponent implements OnInit {
  barGraphIcon = faChartBar;
  width: number;
  isBig: boolean;

  constructor(private firstChartService: FirstChartService) { }

  ngOnInit(): void {
    this.graphAdjust();

    const myChart = new Chart('firstChart', {
      type: 'bar',
      data: {
        labels: this.firstChartService.getXData(),
        datasets: [{
          label: 'Good',
          data: this.firstChartService.getYGoodData(),
          backgroundColor: '#3fe86c',
          backgroundHoverColor: '#3fe86c',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Average',
          data: this.firstChartService.getYOkayData(),
          backgroundColor: '#ebc634',
          backgroundHoverColor: '#ebc634',
          borderWidth: 1
        },
        {
          label: 'Poor',
          data: this.firstChartService.getYBadData(),
          backgroundColor: '#e33936',
          backgroundHoverColor: '#e33936',
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
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
          text: 'Percent of each QC technical status per batch'
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
