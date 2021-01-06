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

  constructor(private batchServ: GetBatchService) { }


  ngOnInit(){

  this.batchServ.getBatches().subscribe(
    (response) => {
      this.batches = response;
      for(let batch of this.batches) {
        console.log(batch)
        
        let sd = batch.startDate.split("-");
        let ed = batch.endDate.split("-");
        let d = {
          batchName: batch.batchName,
          trainer: batch.name,
          start: new Date(parseInt(sd[0]), parseInt(sd[1]), parseInt(sd[2])),
          end: new Date(parseInt(ed[0]), parseInt(ed[1]), parseInt(ed[2]))
        };
        this.dataSource.push(d);
      }
    }
  )

 // comment for this branch
  }
}

class Data {
  batchName: string;
  trainer: string;
  start: Date;
  end: Date;
}
