import { Component, OnInit, DoCheck } from '@angular/core';
import html2PDF from 'html2pdf.js';
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

  public downloadPDF() {
    const content: Element = document.getElementById('assessment-body');
    
    const options = {
      filename: 'Assessment Report.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {scale: 1, width: content.clientWidth},
      jsPDF: {orientation: 'portrait'}
    };
 
    html2PDF()
    .from(content)
    .set(options)
    .save();

    
   }
 
}
