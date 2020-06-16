import { Component, OnInit, HostListener } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FirstChartService } from 'src/app/first-chart.service';
import { Chart } from 'node_modules/chart.js';
import { QCComponent } from 'src/app/Components/qc/qc.component';

@Component({
  selector: 'app-qcbatches-technical-status',
  templateUrl: './qcbatches-technical-status.component.html',
  styleUrls: ['./qcbatches-technical-status.component.css']
})
export class QCBatchesTechnicalStatusComponent implements OnInit {
  barGraphIcon = faChartBar;
  width: number;
  isBig: boolean;

  firstGraphObj: any;
  batchNames: string[];
  technicalStatus: any[];
  poorData: any[];
  averageData: any[];
  goodData: any[];
  superstarData: any[];
  nullData: any[];
  selectedValue: any;

  myGraph: any;

  constructor(private firstChartService: FirstChartService, private qcTS: QCComponent) { }

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    console.log(this.selectedValue);
    this.graphAdjust();
    // This method receives the JSON object from the URL GET request
    this.firstChartService.getTechnicalStatusPerBatch().subscribe(
      resp => {
        console.log(resp);
        this.firstGraphObj = resp;
        this.batchNames = this.firstGraphObj.batchName;
        this.technicalStatus = this.firstGraphObj.technicalStatus;
        console.log(this.technicalStatus);

        // Initializing the arrays for our data
        this.goodData = [];
        this.averageData = [];
        this.poorData = [];
        this.superstarData = [];
        this.nullData = [];

        // This for loop goes through each batch
        for (const batches of this.technicalStatus) {

          // This for loop calculates the total technical scores for each batch
          let total = 0;
          for (const num of batches) {
            total += num;
          }

          // Seperates data into each technical score type (good, bad, avg) and performs math
          // to get the weighted value out of 100%

          // Expects order to be from bad[0] -> avg[1] -> good[2] -> superstar[3] -> null[4]
          this.poorData.push(Math.round((batches[0] * 100 / total) * 100) / 100);
          this.averageData.push(Math.round((batches[1] * 100 / total) * 100) / 100);
          this.goodData.push(Math.round((batches[2] * 100 / total) * 100) / 100);
          this.superstarData.push(Math.round((batches[3] * 100 / total) * 100) / 100);
          this.nullData.push(Math.round((batches[4] * 100 / total) * 100) / 100);
        }
        // This actually passes the data to display the graph after receiving the data from the observables
        this.displayGraphAll(this.batchNames, this.poorData, this.averageData, this.goodData, this.superstarData, this.nullData);
      }
    );
  }

  displayGraphAll(batchNames: string[],
                  poorDisplayData: any[],
                  avgDisplayData: any[],
                  goodDisplayData: any[],
                  superstarDisplayData: any[],
                  nullDisplayData: any[]) {

    console.log('Superstar: ' + superstarDisplayData);
    console.log('Null: ' + nullDisplayData);

    if (this.myGraph) {
      this.myGraph.destroy();
    }
    this.myGraph = new Chart('firstChart', {
      type: 'bar',
      data: {
        labels: batchNames,
        datasets: [{
          label: 'Good',
          data: goodDisplayData,
          backgroundColor: '#3fe86c',
          backgroundHoverColor: '#3fe86c',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Average',
          data: avgDisplayData,
          backgroundColor: '#ebc634',
          backgroundHoverColor: '#ebc634',
          borderWidth: 1
        },
        {
          label: 'Poor',
          data: poorDisplayData,
          backgroundColor: '#e33936',
          backgroundHoverColor: '#e33936',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 100,
              callback(value, index, values) {
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
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data){
                return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel + "%";
              }
            }
        }
      }
    });

    let superstarTotal = 0;
    for (const num of superstarDisplayData) {
      superstarTotal += num;
    }

    if (superstarTotal > 0) {
      this.appendSuperstarDataset(superstarDisplayData);
    }

    let nullTotal = 0;
    for (const num of nullDisplayData) {
      nullTotal += num;
    }

    if (nullTotal > 0){
      this.appendNullDataset(nullDisplayData);
    }
  }

  appendSuperstarDataset(superstarDisplayData: any[]) {
    const dataset = {
      label: 'Superstar',
      data: superstarDisplayData,
      backgroundColor: 'blue',
      backgroundHoverColor: 'blue',
      borderWidth: 1
    };

    this.myGraph.data.datasets.push(dataset);
    this.myGraph.update();
  }

  appendNullDataset(nullDisplayData: any[]) {
    const dataset = {
      label: 'Not Graded',
      data: nullDisplayData,
      backgroundColor: '#7a7b7d',
      backgroundHoverColor: '#7a7b7d',
      borderWidth: 1
    };

    this.myGraph.data.datasets.push(dataset);
    this.myGraph.update();
  }

  graphAdjust() {
    if (this.qcTS.selectedValue === 'all') {
      this.width = window.innerWidth;
      if (this.width < 1281) {
        // console.log('Screen less than 1261px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1261px');
        this.isBig = true;

        document.getElementById('divChart').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.qcTS.selectedValue === 'all') {

      this.width = window.innerWidth;

      if (this.width < 1281) {
        // console.log('Screen less than 1260px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1260px');
        this.isBig = true;

        document.getElementById('divChart').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart').style.width = '90vw';

    }
  }

}
