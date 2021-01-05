import { JSDocCommentStmt } from '@angular/compiler';
import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
import * as html2PDF from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
   let content = window.document.getElementById('qc-body');
   content.style.margin = "auto";
   content.style.padding = "2px";
   
   const divHeight = content.clientHeight
   const divWidth = content.clientWidth
   const ratio = divHeight / divWidth;
 
   html2canvas(content).then(function (canvas){
     let imgData = canvas.toDataURL('image/jpeg');
     let pdfDOC = new jsPDF();
 
     let width = pdfDOC.internal.pageSize.getWidth();
     let height = pdfDOC.internal.pageSize.getHeight();
     //height = ratio * width;
 
     pdfDOC.addImage(imgData, 'jpeg', 10, 10, width - 20, height - 20);
     pdfDOC.save('QC Report.pdf');
   })
   
   // Original Implementation
   /* 
   let content = window.document.getElementById('qc-body');
   
   const options = {
     margin:  1,
     filename: 'QC Report.pdf',
     image: {type: 'jpeg', quality: 1},
     html2canvas: {scale: 1},
     jsPDF: {orientation: 'portrait', format: 'a4'}
   };
   
   
   html2PDF()
   .set(options)
   .from(content)
   .save();*/

   


  }

}
