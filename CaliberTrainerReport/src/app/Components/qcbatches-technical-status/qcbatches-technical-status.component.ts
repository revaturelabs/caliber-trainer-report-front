import { Component, OnInit } from '@angular/core';
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
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
      }
    });

  }


}
