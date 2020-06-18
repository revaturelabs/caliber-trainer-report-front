import { Component, OnInit, HostListener } from '@angular/core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { FourthChartService } from 'src/app/fourth-chart.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';

@Component({
  selector: 'app-assessment-batches-technical-status',
  templateUrl: './assessment-batches-technical-status.component.html',
  styleUrls: ['./assessment-batches-technical-status.component.css']
})
export class AssessmentBatchesTechnicalStatusComponent implements OnInit {
  radarChartIcon = faChartArea;
  pickedBatch: any;
  myRadarGraph: any;
  batches: string[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(private fourthChartService: FourthChartService, private assessmentTS: AssessmentComponent) { }

  ngOnInit(): void {
    this.graphAdjust();

    this.pickedBatch = '1804 Apr16 -2';
    this.batches = ['1804 Apr16 -2', '1901 Jan06 Other', '1903 Mar04 Full Stack Java/JEE', '1909 Sep30 Other'];
    this.displayGraph();

  }

  updateGraph() {
    this.displayGraph();
  }

  displayGraph() {
    if (this.myRadarGraph) {
      this.myRadarGraph.destroy();
    }

    this.myRadarGraph = new Chart('fourthChart', {
      type: 'radar',
      data: {
        labels: ['Exam', 'Verbal', 'Project'],
        datasets: [
          {
            label: 'Average assessment scores',
            backgroundColor: '#937cfa33',
            borderColor: '#937cfa',
            pointBackgroundColor: 'blue',
            pointHoverBackgroundColor: '#937cfa33',
            pointHoverBorderColor: 'blue',
            data: this.fourthChartService.getAvgAssessmentScores(this.pickedBatch)
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 20,
            callback(value, index, values) {
              return value + '%';
            }
          }
        },
        title: {
          display: true,
          text: `Average assessment scores based on Batch: ${this.pickedBatch}`
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });
  }

  graphAdjust() {
    if (this.assessmentTS.selectedValue === 'all') {
      this.width = window.innerWidth;
      if (this.width < 1281) {
        // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart').style.width = '80vw';
      } else {
        this.isBig = true;

        document.getElementById('divChart').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart').style.width = '90vw';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.assessmentTS.selectedValue === 'all') {

      this.width = window.innerWidth;

      if (this.width < 1281) {
        // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart').style.width = '80vw';
      } else {
        this.isBig = true;

        document.getElementById('divChart').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart').style.width = '90vw';

    }
  }


}
