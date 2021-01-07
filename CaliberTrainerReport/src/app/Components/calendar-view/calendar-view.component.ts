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
  years = [2015,2016,2017,2018,2019,2020,2021];
  year=0;
  yearObj=[];
  allYears=[];
  pickedYear:any;

  constructor(private batchServ: GetBatchService) { }

  ngOnInit(){
    this.years[this.pickedYear] = 2018;
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
            
            start: new Date(parseInt(sd[0]), parseInt(sd[1])-1, parseInt(sd[2])),
            end: new Date(parseInt(ed[0]), parseInt(ed[1])-1, parseInt(ed[2]))
            
          };
          let g = {
            batchName: batch.batchName,
            trainer: batch.name,
  
  
            start: new Date(parseInt(sd[0]), 11, 31),
            end: new Date(parseInt(sd[0]), 11, 31)
          }
          console.log(d.end);
          this.dataSource.push(d);
          this.dataSource.push(g);
        }
      }
        }
      // }
    )
    // this.years[this.pickedYear] = 2018;
    // this.updateGraph()
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
        // let y = {
        //   batchName: batch.batchName,
        //   trainer: batch.name,
          

        //   year : parseInt(sd[0]),
        //   start: new Date(parseInt(sd[0]), 0, 1),
        //   end: new Date (parseInt(sd[0]), 0, 1)
        // }
        let g = {
          batchName: batch.batchName,
          trainer: batch.name,


          start: new Date(parseInt(sd[0]), 12, 31),
          end: new Date(parseInt(sd[0]), 12, 31)
        }
        console.log(parseInt(sd[0]))
        this.dataSource.push(d);
        this.dataSource.push(g);
        // this.dataSource.push(y);
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
