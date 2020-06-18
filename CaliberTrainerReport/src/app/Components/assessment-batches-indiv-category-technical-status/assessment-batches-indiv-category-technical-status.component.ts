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

  categories: string[];
  myBarGraph: any;

  examScores: number[];
  verbalScores: number[];
  projectScores: number[];

  constructor(private fifthChartService: FifthChartService, private assessmentTS: AssessmentComponent) { }

  ngOnInit(): void {
    this.graphAdjust();

    this.categories = [];
    this.examScores = [];
    this.verbalScores = [];
    this.projectScores = [];

    this.fifthChartService.getScorePerCategory().subscribe(
      resp => {
        for (const cat of resp.categories){
          this.categories.push(cat.name);
        }
        for (const scores of resp.average){
          if (scores[0] === 0) {
            this.examScores.push(0.5);
          } else {
            this.examScores.push(Math.round(scores[0] * 100) / 100);
          }
          if (scores[1] === 0) {
            this.verbalScores.push(0.5);
          } else {
            this.verbalScores.push(Math.round(scores[1] * 100) / 100);
          }
          if(scores[2] === 0) {
            this.projectScores.push(0.5);
          } else {
            this.projectScores.push(Math.round(scores[2] * 100) / 100);
          }
        }
        this.displayGraph(this.categories, this.examScores, this.verbalScores, this.projectScores);
      }
    );


  }

  displayGraph(categoriesDisplayData: string[], examDisplayScores: number[], verbalDisplayScores: number[], projectDisplayScores: number[]) {

    if (this.myBarGraph) {
      this.myBarGraph.destroy();
    }

    this.myBarGraph = new Chart('fifthChart', {
      type: 'bar',
      data: {
        labels: categoriesDisplayData,
        datasets: [{
          label: 'Exam',
          data: examDisplayScores,
          backgroundColor: '#3aaff2',
          backgroundHoverColor: '#3aaff2',
          borderWidth: 1
        },
        {
          label: 'Verbal',
          data: verbalDisplayScores,
          backgroundColor: '#7af23a',
          backgroundHoverColor: '#7af23a',
          borderWidth: 1
        },
        {
          label: 'Project',
          data: projectDisplayScores,
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
          text: `Percent of each assessment technical status`
        },
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data){
                if (tooltipItem.yLabel === .5) {
                  tooltipItem.yLabel = 0;
                }
                return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel + "%";
              }
            }
        }
      }
    });

  }

  graphAdjust() {
    this.width = window.innerWidth;
    if (this.assessmentTS.selectedValue === 'all') {
      if (this.width < 1281) {
        // FOR MOBILE PHONE
        this.isBig = false;

        document.getElementById('divChart5').style.width = '80vw';
      } else {
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
        // FOR MOBILE PHONE
        this.isBig = false;


        document.getElementById('divChart5').style.width = '80vw';
      } else {
        this.isBig = true;

        document.getElementById('divChart5').style.width = '45vw';
      }
    } else {
      document.getElementById('divChart5').style.width = '90vw';

    }
  }


}
