import { Component, OnInit } from '@angular/core';
//import * as html2PDF from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  selectedValue: string;
  constructor() { }

  ngOnInit(): void {
    this.selectedValue = 'all';
  }

  public downloadPDF() {
    let content = window.document.getElementById('review-page-body');
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
      height = ratio * width;
  
      pdfDOC.addImage(imgData, 'jpeg', 10, 10, width - 20, height - 10);
      pdfDOC.save('Review Page Report.pdf');
    })

    /*
    const content: Element = document.getElementById('review-page-body');
    
    const options = {
      filename: 'Review Page Report.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {scale: 1, width: content.clientWidth},
      jsPDF: {orientation: 'portrait'}
    };

   html2PDF()
   .from(content)
   .set(options)
   .save();*/
  }

}
