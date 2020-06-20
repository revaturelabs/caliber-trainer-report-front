import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartBar, faTable } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { FifthChartService } from 'src/app/fifth-chart.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-assessment-batches-indiv-category-technical-status',
  templateUrl:
    './assessment-batches-indiv-category-technical-status.component.html',
  styleUrls: [
    './assessment-batches-indiv-category-technical-status.component.css',
  ],
})
export class AssessmentBatchesIndivCategoryTechnicalStatusComponent
  implements OnInit, OnDestroy {
  private fifthChartServiceSubscription: Subscription;

  barGraphIcon = faChartBar;
  tableGraphIcon = faTable;
  width: number;
  isBig: boolean;

  categories: string[];
  myBarGraph: any;

  examScores: number[];
  verbalScores: number[];
  projectScores: number[];
  presentationScores: number[];
  otherScores: number[];
  examRawScores: number[];
  verbalRawScores: number[];
  projectRawScores: number[];
  presentationRawScores: number[];
  otherRawScores: number[];
  selectedValue: any;

  constructor(
    private fifthChartService: FifthChartService,
    private assessmentTS: AssessmentComponent
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.assessmentTS.selectedValue;
    this.graphAdjust();

    this.categories = [];
    this.examScores = [];
    this.verbalScores = [];
    this.projectScores = [];
    this.presentationScores = [];
    this.otherScores = [];
    this.examRawScores = [];
    this.verbalRawScores = [];
    this.projectRawScores = [];
    this.presentationRawScores = [];
    this.otherRawScores = [];

    this.fifthChartServiceSubscription = this.fifthChartService
      .getScorePerCategory()
      .subscribe((resp) => {
        for (const cat of resp) {
          this.categories.push(cat.category);
        }
        for (const scores of resp) {
          this.examRawScores.push(Math.round(scores.average[0] * 10) / 10);
          this.verbalRawScores.push(Math.round(scores.average[1] * 10) / 10);
          this.presentationRawScores.push(
            Math.round(scores.average[2] * 10) / 10
          );
          this.projectRawScores.push(Math.round(scores.average[3] * 10) / 10);
          this.otherRawScores.push(Math.round(scores.average[4] * 10) / 10);
          if (scores.average[0] === 0) {
            this.examScores.push(0.5);
          } else {
            this.examScores.push(Math.round(scores.average[0] * 100) / 100);
          }
          if (scores.average[1] === 0) {
            this.verbalScores.push(0.5);
          } else {
            this.verbalScores.push(Math.round(scores.average[1] * 100) / 100);
          }
          if (scores.average[2] === 0) {
            this.presentationScores.push(0.5);
          } else {
            this.presentationScores.push(
              Math.round(scores.average[2] * 100) / 100
            );
          }
          if (scores.average[3] === 0) {
            this.projectScores.push(0.5);
          } else {
            this.projectScores.push(Math.round(scores.average[3] * 100) / 100);
          }
          if (scores.average[4] === 0) {
            this.otherScores.push(0.5);
          } else {
            this.otherScores.push(Math.round(scores.average[4] * 100) / 100);
          }
        }
        this.displayGraph(
          this.categories,
          this.examScores,
          this.verbalScores,
          this.projectScores,
          this.presentationScores,
          this.otherScores
        );
      });
  }

  displayGraph(
    categoriesDisplayData: string[],
    examDisplayScores: number[],
    verbalDisplayScores: number[],
    projectDisplayScores: number[],
    presentationDisplayScores: number[],
    otherDisplayScores: number[]
  ) {
    if (categoriesDisplayData.length === 0) {
      this.myBarGraph.destroy();
    }

    if (this.myBarGraph) {
      this.myBarGraph.destroy();
    }

    this.myBarGraph = new Chart('fifthChart', {
      type: 'bar',
      data: {
        labels: categoriesDisplayData,
        datasets: [
          {
            label: 'Exam',
            data: examDisplayScores,
            backgroundColor: '#3aaff2',
            backgroundHoverColor: '#3aaff2',
            borderWidth: 1,
          },
          {
            label: 'Verbal',
            data: verbalDisplayScores,
            backgroundColor: '#7af23a',
            backgroundHoverColor: '#7af23a',
            borderWidth: 1,
          },
          {
            label: 'Presentation',
            data: presentationDisplayScores,
            backgroundColor: '#8732a8',
            backgroundHoverColor: '#8732a8',
            borderWidth: 1,
          },
          {
            label: 'Project',
            data: projectDisplayScores,
            backgroundColor: '#f23a6e',
            backgroundHoverColor: '#f23a6e',
            borderWidth: 1,
          },
          {
            label: 'Other',
            data: otherDisplayScores,
            backgroundColor: '#7a7b7d',
            backgroundHoverColor: '#7a7b7d',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
                callback(value, index, values) {
                  return value + '%';
                },
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Percent of each assessment technical status by category`,
        },
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              if (tooltipItem.yLabel === 0.5) {
                tooltipItem.yLabel = 0;
              }
              return (
                data.datasets[tooltipItem.datasetIndex].label +
                ': ' +
                tooltipItem.yLabel +
                '%'
              );
            },
          },
        },
      },
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

  // This method selects the large view of the graph when double clicking the graph title.
  doubleClickGraph5(): void {
    const graphSelector = document.getElementById(
      'assessment-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'category') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'category';
    }
  }

  ngOnDestroy(): void{
    this.fifthChartServiceSubscription.unsubscribe();
  }
}


