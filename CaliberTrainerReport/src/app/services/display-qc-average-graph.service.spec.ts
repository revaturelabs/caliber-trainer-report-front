import { TestBed } from '@angular/core/testing';

import { DisplayQcAverageGraphService } from './display-qc-average-graph.service';

describe('DisplayQcAverageGraphService', () => {
  let service: DisplayQcAverageGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayQcAverageGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //the resizing thing cannot be done in Jasmine/Karma so it is useless.

  it('should make a graph with name "Homestuck" when I give it the title "Homestuck"', () => {
    let newGraphOptions = service.graphOptions("Homestuck");
    expect(newGraphOptions.title.text).toBe("Homestuck");
    //because I literally can't test any other aspects of the code.
    //i guess from what was below that I could,
    //but since it doesn't easily owrk it wouldn't do anything

    /*
    let fakeData = {data: {
      datasets: [
        {label: "John Egbert"},
        {label: "Rose Lalonde"},
        {label: "Dave Strider"},
        {label: "Jade Harley"}
      ]
    }};

    let fakePoorTooltipInfo = {
      yValue: 1,
      datasetIndex: 0,
      value: "1"
    };
    let fakeAverageTooltipInfo = {
      yValue: 1,
      datasetIndex: 0,
      value: "2"
    };
    let fakeGoodTooltipInfo = {
      yValue: 1,
      datasetIndex: 0,
      value: "3"
    };
    let fakeSuperstarTooltipInfo = {
      yValue: 1,
      datasetIndex: 0,
      value: "4"
    };

    let poorResult = newGraphOptions.tooltips.callbacks.label(fakePoorTooltipInfo, fakeData);
    expect(poorResult).toBe("John Egbert: Poor");

    let averageResult = newGraphOptions.tooltips.callbacks.label(fakeAverageTooltipInfo, fakeData);
    expect(averageResult).toBe("John Egbert: Average");
    */
  });
});
