import { JSDocCommentStmt } from '@angular/compiler';
import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
//import * as html2PDF from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-qc',
  templateUrl: './qc.component.html',
  styleUrls: ['./qc.component.css']
})
export class QCComponent implements OnInit {
  selectedValue: string;

  @ViewChild('qcbody') qcBody:ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.selectedValue = 'all';
  }


  public downloadPDF() {
   let content = window.document.getElementById('qc-body');
   content.style.margin = "auto";
   content.style.padding = "2px";
 
   html2canvas(content).then(function (canvas){
     let imgData = canvas.toDataURL('image/jpeg');
     let pdfDOC = new jsPDF();
 
     let width = pdfDOC.internal.pageSize.getWidth();
     let height = pdfDOC.internal.pageSize.getHeight();
 
     pdfDOC.addImage(imgData, 'jpeg', 10, 10, width - 20, height - 20);
     pdfDOC.save('QC Report.pdf');
   })
   
  }

}
