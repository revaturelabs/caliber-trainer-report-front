import { Component, OnInit, HostListener } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { FifthChartService } from 'src/app/fifth-chart.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';


@Component({
  selector: 'app-assessment-batches-indiv-category-technical-status',
  templateUrl: './assessment-batches-indiv-category-technical-status.component.html',
  styleUrls: ['./assessment-batches-indiv-category-technical-status.component.css']
})
export class AssessmentBatchesIndivCategoryTechnicalStatusComponent implements OnInit {
  barGraphIcon = faChartBar;
  width: number;
  isBig: boolean;

  pickedBatch: any;
  batches: string[];

  myBarGraph: any;

  constructor(private fifthChartService: FifthChartService, private assessmentTS: AssessmentComponent) { }

  ngOnInit(): void {
    this.graphAdjust();

    this.pickedBatch = '1804 Apr16 -2';
    this.batches = ['1804 Apr16 -2', '1901 Jan06 Other', '1903 Mar04 Full Stack Java/JEE', '1909 Sep30 Other'];
    this.displayGraph();
  }

  updateGraph() {
    console.log('Changed batch!');
    this.displayGraph();
  }

  displayGraph() {
    if (this.myBarGraph) {
      this.myBarGraph.destroy();
    }

    this.myBarGraph = new Chart('fifthChart', {
      type: 'bar',
      data: {
        labels: this.fifthChartService.getXData(),
        datasets: [{
          label: 'Exam',
          data: this.fifthChartService.getYExamData(),
          backgroundColor: '#3aaff2',
          backgroundHoverColor: '#3aaff2',
          borderWidth: 1
        },
        {
          label: 'Verbal',
          data: this.fifthChartService.getYVerbalData(),
          backgroundColor: '#7af23a',
          backgroundHoverColor: '#7af23a',
          borderWidth: 1
        },
        {
          label: 'Project',
          data: this.fifthChartService.getYProjectData(),
          backgroundColor: '#f23a6e',
          backgroundHoverColor: '#f23a6e',
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
              callback(value, index, values) {
                return value + '%';
              }
            }
          }]
        },
        title: {
          display: true,
          text: `Percent of each assessment technical status for Batch ${this.pickedBatch}`
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
    if (this.assessmentTS.selectedValue === 'all') {

      if (this.width < 1281) {
        // console.log('Screen less than 1261px'); // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart5').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1261px');
        this.isBig = true;

        document.getElementById('divChart5').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart5').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.assessmentTS.selectedValue === 'all') {
      this.width = window.innerWidth;

      if (this.width < 1281) {
        // console.log('Screen less than 1010px'); // FOR MOBILE PHONE
        this.isBig = false;


        document.getElementById('divChart5').style.width = '80vw';
      } else {
        // console.log('Screen width is at least 1010px');
        this.isBig = true;

        document.getElementById('divChart5').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart5').style.width = '90vw';

    }
  }


}
