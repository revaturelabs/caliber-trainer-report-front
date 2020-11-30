import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import { AssessScoresByCategoryAllBatchesService } from 'src/app/services/AssessScoresByCategoryAllBatches.service';
import { AssessmentComponent } from 'src/app/Components/assessment/assessment.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/services/display-graph.service';

@Component({
  selector: 'app-assessment-scores-for-category',
  templateUrl:
    './assessment-scores-for-category.component.html',
  styleUrls: [
    './assessment-scores-for-category.component.css',
  ],
})
export class AssessmentScoresForCategoryComponent
  implements OnInit, OnDestroy {
  private AssessScoresByCategoryAllBatchesServiceSubscription: Subscription;
  lineGraphIcon = faChartLine;
  tableGraphIcon = faTable;
  pickedCategory: any;
  categoriesName: string[];
  myLineChart: any;
  batchNames: string[];
  selectedValue: string;
  cumulativeyValues : any[];

  categoriesObj: any[];
  yValues: any[];
  multiGraphYValues: any[];

  // Dealing with Scalability
  width: number;
  isBig: boolean;

  constructor(
    private assessScoresByCategoryAllBatchesService: AssessScoresByCategoryAllBatchesService,
    private assessmentTS: AssessmentComponent,
    private displayGraphService: DisplayGraphService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.assessmentTS.selectedValue;
    this.graphAdjust();

    this.categoriesName = [];
    this.categoriesObj = [];
    this.batchNames = [];
    this.yValues = [];
    this.multiGraphYValues = [];
    this.cumulativeyValues = [];

    this.pickedCategory = 0;
    let trainerId: string = sessionStorage.getItem("selectedId");
    let gA6: any[]=JSON.parse(sessionStorage.getItem("graphArray6" + trainerId));
 
    if(gA6 != null && !gA6.includes(null) && false){
      console.log("yvalues from session ");
      this.categoriesName = gA6[2];
      this.categoriesObj = gA6[3];
      this.batchNames = gA6[0];
      this.yValues = gA6[1];
      if(this.pickedCategory == 0){

        this.categoriesObj.forEach( c => {
          
          for (const stuff of c) {
            let total = 0;
            for (const indivScore of stuff.assessments) {
              total += indivScore;
            }
            if (isNaN(total / stuff.assessments.length)) {
              this.yValues.push(0);
            } else {
              this.yValues.push(
                Math.round((total / stuff.assessments.length) * 100) / 100
              );
            }

          }
          this.multiGraphYValues.push(JSON.parse(JSON.stringify(this.yValues)));
          this.yValues=[];
        });
        // console.log(this.multiGraphYValues);
        

        
      }

      

      this.displayGraph(gA6[0], gA6[1]);




    } else {

    
    this.AssessScoresByCategoryAllBatchesServiceSubscription = this.assessScoresByCategoryAllBatchesService
      .getSixthGraphData()
      .subscribe((resp) => {
        for (const score of resp.categories) {
          this.categoriesName.push(score.category);
          this.categoriesObj.push(score.batchAssessments);
        }

        if(this.pickedCategory == 0){

          this.categoriesObj.forEach( c => {
            
            for (const stuff of c) {
              let total = 0;
              for (const indivScore of stuff.assessments) {
                total += indivScore;
              }
              if (isNaN(total / stuff.assessments.length)) {
                this.yValues.push(0);
              } else {
                this.yValues.push(
                  Math.round((total / stuff.assessments.length) * 100) / 100
                );
              }

            }

            this.cumulativeyValues.push(this.yValues);
            this.multiGraphYValues.push(JSON.parse(JSON.stringify(this.yValues)));
            this.yValues=[];
          });
          

          
        } else {
          for (const stuff of this.categoriesObj[this.pickedCategory]) {
            let total = 0;
            for (const indivScore of stuff.assessments) {
              total += indivScore;
            }
            this.yValues.push(
              Math.round((total / stuff.assessments.length) * 100) / 100
            );
          }

        }

        
        for (const score of resp.categories[0].batchAssessments) {
          this.batchNames.push(score.batchName);
        }
        this.categoriesName.unshift("Overview");
        this.categoriesObj.unshift(resp.categories[0].batchAssessments);

        let graphArray = [this.batchNames, this.yValues, this.categoriesName, this.categoriesObj];
        let trainerId: string = sessionStorage.getItem("selectedId");
        sessionStorage.setItem("graphArray6" + trainerId, JSON.stringify(graphArray));
        this.displayGraph(this.batchNames, this.yValues);
      });

    }
  }

  updateGraph() {
    this.yValues = [];

    if(this.pickedCategory == 0){

      this.categoriesObj.forEach( c => {
        
        for (const stuff of c) {
          let total = 0;
          for (const indivScore of stuff.assessments) {
            total += indivScore;
          }
          if (isNaN(total / stuff.assessments.length)) {
            this.yValues.push(0);
          } else {
            this.yValues.push(
              Math.round((total / stuff.assessments.length) * 100) / 100
            );
          }

        }
        this.multiGraphYValues.push(JSON.parse(JSON.stringify(this.yValues)));
        this.yValues=[];
      });
    } else {  

    for (const stuff of this.categoriesObj[this.pickedCategory]) {
      let total = 0;
      for (const indivScore of stuff.assessments) {
        total += indivScore;
      }

      if (isNaN(total / stuff.assessments.length)) {
        this.yValues.push(0);
      } else {
        this.yValues.push(
          Math.round((total / stuff.assessments.length) * 100) / 100
        );
      }
    }

  };
    


    this.displayGraph(this.batchNames, this.yValues);
  }

  displayGraph(batchDisplayNames: string[], yDisplayValues: any[]) {
    if (this.myLineChart) {
      this.myLineChart.destroy();
    }

    var colorArray = [ 
      '#FF0000', '#FF8C00', 
      '#FFD700',  '#228B22',
      '#000080', '#4B0082',
      '#FF00FF', '#800000',
      '#00FF00', '#00CED1',
      '#9370DB', '#000000',
      '#6495ED', '#696969',
      // Colors Repeat again here
      '#FF0000', '#FF8C00', 
      '#FFD700',  '#228B22',
      '#000080', '#4B0082',
      '#FF00FF', '#800000',
      '#00FF00', '#00CED1',
      '#9370DB', '#000000',
      '#6495ED', '#696969',
      // Colors Repeat again here
      '#FF0000', '#FF8C00', 
      '#FFD700',  '#228B22',
      '#000080', '#4B0082',
      '#FF00FF', '#800000',
      '#00FF00', '#00CED1',
      '#9370DB', '#000000',
      '#6495ED', '#696969',]

    // An array of objects. Each object should contain a yDisplay array within.
    let lineData: any[] = [];
    if(this.pickedCategory == 0){

      for(let i = 1; i < this.categoriesName.length; i++){
        let lineColor:string;
        

        lineColor = colorArray[i-1];

        let dataObj = {
          label: ''+this.categoriesName[i], // Name the series
          data: this.multiGraphYValues[i-1], // Specify the data values array
          fill: false,
          borderColor: lineColor, // Add custom color border (Line)
          backgroundColor: lineColor, // Add custom color background (Points and Fill)
          borderWidth: 1, // Specify bar border width
        };

        lineData.push(dataObj);

      }
  
      this.myLineChart = new Chart('sixthChart', {
        type: 'line',
        data: {
          labels: batchDisplayNames,
          datasets: lineData,
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
            text: `QC Scores Overview`,
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
        },
      });
    } else {

    
    let lineColor:string = colorArray[(this.pickedCategory-1) % colorArray.length];

    this.myLineChart = new Chart('sixthChart', {
      type: 'line',
      data: {
        labels: batchDisplayNames,
        datasets: [
          {
            label: 'Overall Average', // Name the series
            data: yDisplayValues, // Specify the data values array
            fill: false,
            borderColor: lineColor, // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
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
          text: `Assessment scores based on ${
            this.categoriesName[this.pickedCategory]
          }`,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });
  }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart6');
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
  doubleClickGraph6(): void {
    const graphSelector = document.getElementById(
      'assessment-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'trend') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'trend';
    }
    this.graphAdjust();
  }

  ngOnDestroy() {
    if (this.AssessScoresByCategoryAllBatchesServiceSubscription != undefined) {
      this.AssessScoresByCategoryAllBatchesServiceSubscription.unsubscribe();
    }
  }
}
