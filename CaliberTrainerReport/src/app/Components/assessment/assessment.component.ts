import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit, DoCheck {
  selectedValue: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = 'all';
  }

  ngDoCheck(): void {
    const graphSelector = document.getElementById('assessment-graph-selector') as HTMLSelectElement;
    if (!graphSelector.value) {
      graphSelector.value = 'all';
    }
    this.selectedValue = graphSelector.value;
  }

}
