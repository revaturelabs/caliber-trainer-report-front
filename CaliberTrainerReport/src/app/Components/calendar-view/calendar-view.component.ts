import { Component, OnInit } from '@angular/core';
import { GetBatchService } from 'src/app/services/get-batch.service';



@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

   batches:any[] =[];
  dataSource: Data[] = [];
  years = [2015,2016,2017,2018,2019,2020];
  year=0;
  yearObj=[];
  allYears=[];
  pickedYear:any;

  constructor(private batchServ: GetBatchService) { }

  ngOnInit(){

    this.updateGraph()
  }

  updateGraph(){
  this.dataSource = [];
  this.batchServ.getBatches().subscribe(
    (response) => {
      this.batches = response;
      for(let batch of this.batches) {
        console.log(batch)
        
        let sd = batch.startDate.split("-");
        let ed = batch.endDate.split("-");
        // console.log(parseInt(sd[0]));
        // console.log(this.years[this.pickedYear]);
        if ((parseInt(sd[0]))==this.years[this.pickedYear]){
          
        let d = {
          batchName: batch.batchName,
          trainer: batch.name,
          
          start: new Date(parseInt(sd[0]), parseInt(sd[1]), parseInt(sd[2])),
          end: new Date(parseInt(ed[0]), parseInt(ed[1]), parseInt(ed[2]))
        };
        this.dataSource.push(d);
      }
      }
    }
  )

 
  }
}




class Data {
  batchName: string;
  trainer: string;
  start: Date;
  end: Date;
}
