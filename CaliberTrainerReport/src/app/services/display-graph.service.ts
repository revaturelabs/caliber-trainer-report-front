import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayGraphService {

  constructor() { }

  graphAdjust(element, selectVal, isBig) {
    if (selectVal === 'all') { // components
      const width = window.innerWidth;
      if (width < 1281) {
        // FOR MOBILE PHONE
        isBig = false;
        element.style.width = '80vw';
        // FOR ULTRA WIDE
      } else if (width > 1940) {
        isBig = true;
        element.style.width = '30vw';
      } else {
        isBig = true;
        element.style.width = '45vw';
      }
      return isBig;
    } else { // indiv components
      element.style.width = '60vw';
    }
    return isBig;
    }

    graphOptions(titleText) {
      const graphOpt = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
                callback(value) {
                  return value + '%';
                },
              },
            },
          ],
        },
        title: {
          display: true,
          text: titleText,
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
      };

      return graphOpt;
    }
}
