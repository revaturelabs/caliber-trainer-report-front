import { Component, OnInit, DoCheck } from '@angular/core';
//import html2PDF from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    // if (!graphSelector.value) {
    //   graphSelector.value = 'all';
    // }
    // this.selectedValue = graphSelector.value;
  }

  public downloadPDF() {
    let content = window.document.getElementById('assessment-body');
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
      pdfDOC.save('Assessment Report.pdf');
    })
    
    /*
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
    .save();*/

    
   }
 
}
