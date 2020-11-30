import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayQcAverageGraphService {

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
                stepSize: 1,
                suggestedMax: 4,
                callback(value) {
                  switch (value){
                    case 1:
                      return ( 
                      'Poor' 
                    );
                    case 2: 
                      return ( 
                      'Average' 
                    );
                    case 3:
                      return (
                        'Good' 
                      ); 
                    case 4:
                      return ( 
                        'Superstar' 
                      );
                  }
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
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              if (tooltipItem.yLabel === 0.5) {
                tooltipItem.yLabel = 0;
              }
              switch (tooltipItem.value){
                case "1":
                  return ( data.datasets[tooltipItem.datasetIndex].label +
                  ': Poor' 
                );
                case "2": 
                  return ( data.datasets[tooltipItem.datasetIndex].label +
                  ': Average' 
                );
                case "3":
                  return ( data.datasets[tooltipItem.datasetIndex].label +
                    ': Good' 
                  ); 
                case "4":
                  return ( data.datasets[tooltipItem.datasetIndex].label +
                    ': Superstar' 
                  );
              }
            },
          },
        },
      };

      return graphOpt;
    }
}
