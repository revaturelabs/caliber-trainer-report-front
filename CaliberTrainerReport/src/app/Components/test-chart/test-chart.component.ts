import { Component, OnInit, DoCheck } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { FirstChartService } from 'src/app/first-chart.service';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent implements OnInit{
  xLabel: any[];

  constructor(private firstChartService: FirstChartService) { }

  ngOnInit(): void {
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
          label: 'Okay',
          data: this.firstChartService.getYOkayData(),
          backgroundColor: '#3f91e8',
          backgroundHoverColor: '#3f91e8',
          borderWidth: 1
        },
        {
          label: 'Bad',
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
              callback: function(value, index, values) {
                return value + '%';
            }
            }
          }]
        },
        title: {
            display: true,
            text: 'Percent of each QC technical status per batch'
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
      }
    });

  }


}
