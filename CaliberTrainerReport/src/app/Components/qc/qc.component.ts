import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-qc',
  templateUrl: './qc.component.html',
  styleUrls: ['./qc.component.css']
})
export class QCComponent implements OnInit, DoCheck {
  selectedValue: string;
  constructor() { }

  ngOnInit(): void {
    this.selectedValue = 'all';
  }

  ngDoCheck(): void {
    const graphSelector = document.getElementById('qc-graph-selector') as HTMLSelectElement;
    if (!graphSelector.value) {
      graphSelector.value = 'all';
    }
    this.selectedValue = graphSelector.value;
  }

}
