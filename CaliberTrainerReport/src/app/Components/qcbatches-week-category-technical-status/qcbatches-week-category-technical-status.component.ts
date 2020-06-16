import { Component, OnInit, HostListener } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { ThirdChartService } from 'src/app/third-chart.service';
import { QCComponent } from 'src/app/Components/qc/qc.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-qcbatches-week-category-technical-status',
  templateUrl: './qcbatches-week-category-technical-status.component.html',
  styleUrls: ['./qcbatches-week-category-technical-status.component.css']
})
export class QCBatchesWeekCategoryTechnicalStatusComponent implements OnInit {
  barGraphIcon = faChartBar;
  width: number;
  isBig: boolean;

  thirdGraphObj: any;
  batches: string[];
  pickedBatch: any;

  xlabels: string[]; // week numbers
  nullData: any[];
  poorData: any[];
  averageData: any[];
  goodData: any[];
  superstarData: any[];
  categories: string[];

  selectedValue: any;

  myGraph: any;

  constructor(private thirdChartService: ThirdChartService,  private qcTS: QCComponent) { }

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    this.graphAdjust();
    // This method receives the JSON object from the URL GET request
    this.thirdChartService.getTechnicalStatusByWeek().subscribe(
      resp => {
        console.log(resp);
        this.thirdGraphObj = resp;

        this.batches = this.getBatches();
        this.pickedBatch = this.batches[0];
        this.displayGraph();
    });
  }

  // returns array of the batch ids (need for populating batch drop-down list)
  getBatches(): string[] {
    const batches = [];
    for (const batch of this.thirdGraphObj){
      if (batches.indexOf(batch.batchName) === -1) {
        batches.push(batch.batchName);
      }
    }
    return batches;
  }

  updateGraph() {
    console.log('Changed batch!');
    this.displayGraph();
  }

  displayGraph() {
    const elmnt = document.getElementById('thirdChart');
    const y = elmnt.scrollTop;
    if (this.myGraph){
      this.myGraph.destroy();
    }

    this.myGraph = new Chart('thirdChart', {
      type: 'bar',
      data: {
        labels: this.getXData(this.pickedBatch),
        datasets: [
          {
            label: 'SuperStar',
            data: this.getSuperstarScores(this.pickedBatch),
            backgroundColor: '#2196f3',
            backgroundHoverColor: '#2196f3',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Good',
            data: this.getGoodScores(this.pickedBatch),
            backgroundColor: '#3fe86c',
            backgroundHoverColor: '#3fe86c',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Average',
            data: this.getAverageScores(this.pickedBatch),
            backgroundColor: '#ebc634',
            backgroundHoverColor: '#ebc634',
            borderWidth: 1
          },
          {
            label: 'Poor',
            data: this.getPoorScores(this.pickedBatch),
            backgroundColor: '#e33936',
            backgroundHoverColor: '#e33936',
            borderWidth: 1
          },
          {
            label: 'Null',
            data: this.getNullScores(this.pickedBatch),
            backgroundColor: '#7a7b7d',
            backgroundHoverColor: '#7a7b7d',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{stacked: true}],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                suggestedMax: 50,
                callback(value, index, values) {
                  return value + '%';
                }
              }
            }
          ]
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

    const htmlElement = document.documentElement;
    htmlElement.scrollTop = y;
    console.log('Scrolled to top');
  }

  // X-axis variables (week & categories)
  getXData(batch: string): string[]{
    this.xlabels = [];
    for (const batchWeek of this.thirdGraphObj){
      if (batchWeek.batchName === batch) {
        let xLabel = 'Week ' + batchWeek.week;
        for (const category of batchWeek.categories) {
          xLabel = xLabel + ': ' + category;
        }
        this.xlabels.push(xLabel);
      }
    }
    return this.xlabels;
  }

  getSuperstarScores(batch: string): any[] {
    this.superstarData = [];
    for (const batchWeek of this.thirdGraphObj){
      if (batchWeek.batchName === batch) {
        this.superstarData.push(batchWeek.superstarPercent);
      }
    }
    return this.superstarData;
  }

  getGoodScores(batch: string): any[] {
    this.goodData = [];
    for (const batchWeek of this.thirdGraphObj){
      if (batchWeek.batchName === batch) {
        this.goodData.push(batchWeek.goodPercent);
      }
    }
    return this.goodData;
  }

  getAverageScores(batch: string): any[] {
    this.averageData = [];
    for (const batchWeek of this.thirdGraphObj){
      if (batchWeek.batchName === batch) {
        this.averageData.push(batchWeek.averagePercent);
      }
    }
    return this.averageData;
  }

  getPoorScores(batch: string): any[] {
    this.poorData = [];
    for (const batchWeek of this.thirdGraphObj){
      if (batchWeek.batchName === batch) {
        this.poorData.push(batchWeek.poorPercent);
      }
    }
    return this.poorData;
  }

  getNullScores(batch: string): any[] {
    this.nullData = [];
    for (const batchWeek of this.thirdGraphObj){
      if (batchWeek.batchName === batch) {
        this.nullData.push(batchWeek.nullPercent);
      }
    }
    return this.nullData;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  graphAdjust() {
    if (this.qcTS.selectedValue === 'all') {
      this.width = window.innerWidth;
      if (this.width < 1281) {
        // console.log('Screen less than 1261px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart3').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1261px');
        this.isBig = true;

        document.getElementById('divChart3').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart3').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.qcTS.selectedValue === 'all') {

      this.width = window.innerWidth;

      if (this.width < 1281) {
        // console.log('Screen less than 1260px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart3').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1260px');
        this.isBig = true;

        document.getElementById('divChart3').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart3').style.width = '90vw';

    }
  }

}
