import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
import * as html2PDF from 'html2pdf.js';

@Component({
  selector: 'app-qc',
  templateUrl: './qc.component.html',
  styleUrls: ['./qc.component.css']
})
export class QCComponent implements OnInit, DoCheck {
  selectedValue: string;

  @ViewChild('qcbody') qcBody:ElementRef;
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


  public downloadPDF() {
   const content: Element = document.getElementById('qc-body');
   
   const options = {
     filename: 'QC Report.pdf',
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
