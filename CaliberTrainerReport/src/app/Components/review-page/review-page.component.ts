import { Component, OnInit } from '@angular/core';
import * as html2PDF from 'html2pdf.js';

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
    const options = {
      filename: 'Review Page Report.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {scale: 1},
      jsPDF: {orientation: 'portrait'}
    };
  
  const content: Element = document.getElementById('review-page-body');

   html2PDF()
   .from(content)
   .set(options)
   .save();
  }

}
