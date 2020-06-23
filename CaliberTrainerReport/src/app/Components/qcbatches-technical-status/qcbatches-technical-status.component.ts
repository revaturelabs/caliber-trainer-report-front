import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { faChartBar, faTable } from '@fortawesome/free-solid-svg-icons';
import { FirstChartService } from 'src/app/first-chart.service';
import { Chart } from 'node_modules/chart.js';
import { QCComponent } from 'src/app/Components/qc/qc.component';
import { Subscription } from 'rxjs';
import { DisplayGraphService } from 'src/app/display-graph.service';

@Component({
  selector: 'app-qcbatches-technical-status',
  templateUrl: './qcbatches-technical-status.component.html',
  styleUrls: ['./qcbatches-technical-status.component.css'],
})
export class QCBatchesTechnicalStatusComponent implements OnInit, OnDestroy {
  private firstChartServiceSubscription: Subscription;
  barGraphIcon = faChartBar;
  tableGraphIcon = faTable;
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
  poorRawData: any[];
  averageRawData: any[];
  goodRawData: any[];
  superstarRawData: any[];
  nullRawData: any[];
  selectedValue: any;

  myGraph: any;

  constructor(
    private firstChartService: FirstChartService,
    private qcTS: QCComponent,
    private displayGraphService: DisplayGraphService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.qcTS.selectedValue;
    this.graphAdjust();
    // This method receives the JSON object from the URL GET request
    this.firstChartServiceSubscription = this.firstChartService
      .getTechnicalStatusPerBatch()
      .subscribe((resp) => {
        this.firstGraphObj = resp;

        // Initializing the arrays for our data
        this.goodData = [];
        this.averageData = [];
        this.poorData = [];
        this.superstarData = [];
        this.nullData = [];
        this.superstarRawData = [];
        this.goodRawData = [];
        this.averageRawData = [];
        this.poorRawData = [];
        this.nullRawData = [];
        this.batchNames = [];
        this.technicalStatus = [];

        // Store batch names
        for (const batch of this.firstGraphObj) {
          this.batchNames.push(batch.batchName);
          this.technicalStatus.push(batch.technicalStatus);
        }

        // This for loop goes through each batch
        for (const batches of this.technicalStatus) {
          // This for loop calculates the total technical scores for each batch
          let total = 0;
          for (const num of batches) {
            total += num;
          }

          this.poorRawData.push(batches[0]);
          this.averageRawData.push(batches[1]);
          this.goodRawData.push(batches[2]);
          this.superstarRawData.push(batches[3]);
          this.nullRawData.push(batches[4]);

          // Seperates data into each technical score type (good, bad, avg) and performs math
          // to get the weighted value out of 100%
          // Expects order to be from bad[0] -> avg[1] -> good[2] -> superstar[3] -> null[4]
          if (batches[0] === 0) {
            this.poorData.push(0.5);
          } else {
            this.poorData.push(
              Math.round(((batches[0] * 100) / total) * 100) / 100
            );
          }
          if (batches[1] === 0) {
            this.averageData.push(0.5);
          } else {
            this.averageData.push(
              Math.round(((batches[1] * 100) / total) * 100) / 100
            );
          }
          if (batches[2] === 0) {
            this.goodData.push(0.5);
          } else {
            this.goodData.push(
              Math.round(((batches[2] * 100) / total) * 100) / 100
            );
          }
          if (batches[3] === 0) {
            this.superstarData.push(0.5);
          } else {
            this.superstarData.push(
              Math.round(((batches[3] * 100) / total) * 100) / 100
            );
          }
          if (batches[4] === 0) {
            this.nullData.push(0.5);
          } else {
            this.nullData.push(
              Math.round(((batches[4] * 100) / total) * 100) / 100
            );
          }
        }
        // This actually passes the data to display the graph after receiving the data from the observables
        this.displayGraphAll(
          this.batchNames,
          this.poorData,
          this.averageData,
          this.goodData,
          this.superstarData,
          this.nullData
        );
      });
  }

  displayGraphAll(
    batchNames: string[],
    poorDisplayData: any[],
    avgDisplayData: any[],
    goodDisplayData: any[],
    superstarDisplayData: any[],
    nullDisplayData: any[]
  ) {
    if(batchNames.length === 0) {
      this.myGraph.destroy();
    }

    if (this.myGraph) {
      this.myGraph.destroy();
    }
    const graphText = 'Percent of each QC technical status per batch';
    this.myGraph = new Chart('firstChart', {
      type: 'bar',
      data: {
        labels: batchNames,
        datasets: [
          {
            label: 'Good',
            data: goodDisplayData,
            backgroundColor: '#3fe86c',
            backgroundHoverColor: '#3fe86c',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Average',
            data: avgDisplayData,
            backgroundColor: '#ebc634',
            backgroundHoverColor: '#ebc634',
            borderWidth: 1,
          },
          {
            label: 'Poor',
            data: poorDisplayData,
            backgroundColor: '#e33936',
            backgroundHoverColor: '#e33936',
            borderWidth: 1,
          },
        ],
      },
      options: this.displayGraphService.graphOptions(graphText)
    });

    let superstarTotal = 0;
    for (const num of superstarDisplayData) {
      superstarTotal += num;
    }

    if (superstarTotal > 0) {
      this.appendSuperstarDataset(superstarDisplayData);
    }

    let nullTotal = 0;
    for (const num of nullDisplayData) {
      nullTotal += num;
    }

    if (nullTotal > 0) {
      this.appendNullDataset(nullDisplayData);
    }
  }

  appendSuperstarDataset(superstarDisplayData: any[]) {
    const dataset = {
      label: 'Superstar',
      data: superstarDisplayData,
      backgroundColor: 'blue',
      backgroundHoverColor: 'blue',
      borderWidth: 1,
    };

    this.myGraph.data.datasets.push(dataset);
    this.myGraph.update();
  }

  appendNullDataset(nullDisplayData: any[]) {
    const dataset = {
      label: 'Not Graded',
      data: nullDisplayData,
      backgroundColor: '#7a7b7d',
      backgroundHoverColor: '#7a7b7d',
      borderWidth: 1,
    };

    this.myGraph.data.datasets.push(dataset);
    this.myGraph.update();
  }

  graphAdjust() {
    const chartElem = document.getElementById('divChart1');
    this.isBig = this.displayGraphService.graphAdjust(
      chartElem,
      this.qcTS.selectedValue,
      this.isBig
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.graphAdjust();
  }

  // This method selects the large view of the graph when double clicking the graph title.
  doubleClickGraph1(): void {
    const graphSelector = document.getElementById(
      'qc-graph-selector'
    ) as HTMLSelectElement;
    if (graphSelector.value === 'status') {
      graphSelector.value = 'all';
    } else {
      graphSelector.value = 'status';
    }
  }

  ngOnDestroy() {
    this.firstChartServiceSubscription.unsubscribe();
  }
}
