import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartBar, faTable } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessment-scores-according-to-category',
  templateUrl: './assessment-scores-according-to-category.component.html',
  styleUrls: ['./assessment-scores-according-to-category.component.css'],
})
export class AssessmentScoresAccordingToCategoryComponent
  implements OnInit, OnDestroy {
  private assessmentServiceSubscription: Subscription;

  barGraphIcon = faChartBar;
  tableGraphIcon = faTable;
  width: number;
  isBig: boolean;

  categories: string[];
  myBarGraph: any;

  // Utility
  categories0: string[];
  categories15: string[];
  examRawScores0: number[];
  examRawScores15: number[];
  verbalRawScores0: number[];
  verbalRawScores15: number[];
  presentationRawScores0: number[];
  presentationRawScores15: number[];
  projectRawScores0: number[];
  projectRawScores15: number[];
  otherRawScores0: number[];
  otherRawScores15: number[];

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
    private assessmentService: AssessmentService,
    private assessmentTS: AssessmentComponent,
    private displayGraphService: DisplayGraphService
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
    let trainerId: string = sessionStorage.getItem('selectedId');

    this.assessmentServiceSubscription = this.assessmentService
      .getScorePerCategory()
      .subscribe((resp) => {
        // Removes all entries with no scores.
        for (let i = resp.length - 1; i >= 0; i--) {
          if (
            resp[i].average.reduce((acc, curr) => {
              return acc + curr;
            }) == 0
          ) {
            resp.splice(i, 1);
          }
        }

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

        let graphArray = [
          this.categories,
          this.examScores,
          this.verbalScores,
          this.projectScores,
          this.presentationScores,
          this.otherScores,
        ];

        sessionStorage.setItem(
          'graphArray5' + trainerId,
          JSON.stringify(graphArray)
        );

        this.categories0 = this.categories.slice(0, 14);
        this.categories15 = this.categories.slice(14);

        this.examRawScores0 = this.examRawScores.slice(0, 14);
        this.examRawScores15 = this.examRawScores.slice(14);

        this.verbalRawScores0 = this.verbalRawScores.slice(0, 14);
        this.verbalRawScores15 = this.verbalRawScores.slice(14);

        this.presentationRawScores0 = this.presentationRawScores.slice(0, 14);
        this.presentationRawScores15 = this.presentationRawScores.slice(14);

        this.projectRawScores0 = this.projectRawScores.slice(0, 14);
        this.projectRawScores15 = this.projectRawScores.slice(14);

        this.otherRawScores0 = this.otherRawScores.slice(0, 14);
        this.otherRawScores15 = this.otherRawScores.slice(14);

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
    const graphText = 'Percent of each assessment technical status by category';
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
      options: this.displayGraphService.graphOptions(graphText),
    });
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart5');
    this.isBig = this.displayGraphService.graphAdjust(
      chartElem,
      this.assessmentTS.selectedValue,
      this.isBig
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.graphAdjust();
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
    this.graphAdjust();
  }

  ngOnDestroy(): void {
    if (this.assessmentServiceSubscription != undefined) {
      this.assessmentServiceSubscription.unsubscribe();
    }
  }
}
