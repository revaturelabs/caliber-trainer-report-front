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
  categories: string[];
  myLineChart: any;

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(private sixthChartService: SixthChartService, private assessmentTS: AssessmentComponent) { }

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
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    this.myLineChart = new Chart('sixthChart', {
      type: 'line',
      data: {
        labels: this.sixthChartService.getXData(),
        datasets: [{
          label: 'Overall Average', // Name the series
          data: this.sixthChartService.getAverageCategoryScores(this.pickedCategory), // Specify the data values array
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
              callback(value, index, values) {
                return value + '%';
              }
            }
          }]
        },
        title: {
          display: true,
          text: `Assessment scores based on ${this.pickedCategory}`
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
