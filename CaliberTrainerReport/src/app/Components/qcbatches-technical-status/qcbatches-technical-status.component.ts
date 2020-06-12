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


  constructor(private firstChartService: FirstChartService, private qcTS: QCComponent) { }

  ngOnInit(): void {
    this.graphAdjust();

    this.firstChartService.getTechnicalStatusPerBatch().subscribe(
      resp => {
        console.log(resp);
        this.firstGraphObj = resp;
        this.batchNames = this.firstGraphObj.batchName;
        this.technicalStatus = this.firstGraphObj.technicalStatus;
        console.log(this.technicalStatus);

        this.goodData = [];
        this.averageData = [];
        this.poorData = [];
        this.superstarData = [];
        this.nullData = [];
      
        for(let batches of this.technicalStatus){
          let total = 0;
          for(let num of batches){
            total += num;
          }

          console.log("total: " + total);

          this.poorData.push((batches[0]/total)*100);
          this.averageData.push((batches[1]/total)*100);
          this.goodData.push((batches[2]/total)*100);
          this.superstarData.push((batches[3]/total)*100);
          this.nullData.push((batches[4]/total)*100);
          // this.getPercentageFromData(this.poorData, this.averageData, this.goodData);
        }
        // console.log("P: " + this.poorData );
        // console.log("A: " + this.averageData);
        // console.log("G: " + this.goodData);


        this.displayGraph(this.batchNames, this.poorData, this.averageData, this.goodData, this.superstarData, this.nullData);
      }
    );
  }

  displayGraph(batchNames: string[], poorDisplayData: any[], avgDisplayData: any[], goodDisplayData: any[], superstarDisplayData: any[], nullDisplayData: any[]){

    const myChart = new Chart('firstChart', {
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
        },
        {
          label: 'Superstar',
          data: superstarDisplayData,
          backgroundColor: 'blue',
          backgroundHoverColor: 'blue',
          borderWidth: 1
        },
        {
          label: 'Null',
          data: nullDisplayData,
          backgroundColor: 'black',
          backgroundHoverColor: 'black',
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 100,
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
