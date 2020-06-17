import { Component, OnInit, HostListener } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { SixthChartService } from 'src/app/sixth-chart.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';


@Component({
  selector: 'app-assessment-batches-trend-category-technical-status',
  templateUrl: './assessment-batches-trend-category-technical-status.component.html',
  styleUrls: ['./assessment-batches-trend-category-technical-status.component.css']
})
export class AssessmentBatchesTrendCategoryTechnicalStatusComponent implements OnInit {
  lineGraphIcon = faChartLine;
  pickedCategory: any;
  categoriesName: string[];
  myLineChart: any;
  batchNames: string[];

  categoriesObj: any[];
  yValues: any[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(private sixthChartService: SixthChartService, private assessmentTS: AssessmentComponent) { }

  ngOnInit(): void {
    this.graphAdjust();

    this.categoriesName = [];
    this.categoriesObj = [];
    this.batchNames = [];
    this.yValues = [];

    this.pickedCategory = 0;

    this.sixthChartService.getSixthGraphData().subscribe(
      resp => {
        for (const score of resp.categories) {
          this.categoriesName.push(score.category);
          this.categoriesObj.push(score.batchAssessments);
        }
        for (const stuff of this.categoriesObj[this.pickedCategory]) {

          let total = 0;
          for (const indivScore of stuff.assessments) {
            total += indivScore;
          }
          this.yValues.push((total / stuff.assessments.length));
        }
        for (const score of resp.categories[0].batchAssessments) {
          this.batchNames.push(score.batchName);
        }

        this.displayGraph(this.batchNames, this.yValues);
      }
    );

  }

  updateGraph() {
    console.log('Changed category!');
    this.yValues = [];
    for (const stuff of this.categoriesObj[this.pickedCategory]) {

      let total = 0;
      for (const indivScore of stuff.assessments) {
        total += indivScore;

      }

      if (isNaN(total / stuff.assessments.length)){
        this.yValues.push(0);
      }else {
        this.yValues.push((total / stuff.assessments.length));
      }
    }

    this.displayGraph(this.batchNames, this.yValues);

  }

  displayGraph(batchDisplayNames: string[], yDisplayValues: any[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    this.myLineChart = new Chart('sixthChart', {
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
              suggestedMax: 100,
              callback(value, index, values) {
                return value + '%';
              }
            }
          }]
        },
        title: {
          display: true,
          text: `Assessment scores based on ${this.categoriesName[this.pickedCategory]}`
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
      }
    });

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  graphAdjust() {
    if (this.assessmentTS.selectedValue === 'all') {
      this.width = window.innerWidth;
      if (this.width < 1281) {
        // console.log('Screen less than 1261px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart6').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1261px');
        this.isBig = true;

        document.getElementById('divChart6').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart6').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.assessmentTS.selectedValue === 'all') {

      this.width = window.innerWidth;

      if (this.width < 1281) {
        // console.log('Screen less than 1260px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart6').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1260px');
        this.isBig = true;

        document.getElementById('divChart6').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart6').style.width = '90vw';

    }
  }


}
