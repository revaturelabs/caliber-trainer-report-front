import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { GetBatchesService } from 'src/app/services/get-batches.service';
import { Trainer } from 'src/app/class/trainer';


@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  eventList= [];
  calendarOptions: CalendarOptions={ handleWindowResize:true, contentHeight:"auto"};
  batches:Array<any>;
  title: string;
  startDate: Date;
  endDate: Date;
  ev: {};
  colors =['#3584f2','#4bc984','#fcc54e','#20c9be','#f56c42',];
  evColor: string;
  trainer: Trainer;

  constructor(private batchServ: GetBatchesService) { }

 

  ngOnInit(){
    setTimeout(() => {

    this.batchServ.getBatches().subscribe(
      (response) => {
        this.batches = response;
        this.createEvents();
      });
  },2000);
  setTimeout(() => {
  this.calendarOptions = {
    themeSystem: 'bootstrap',
    contentHeight:"auto",
    handleWindowResize:true,
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.eventList,

   
  };
},3000);
  }
  handleDateClick(arg) {
    alert(arg.dateStr)
  }
  

  createEvents() {
    let j = 0;
    for (let i = 0; i < this.batches.length; i++) {
      this.title = this.batches[i].batchName + " " + this.batches[i].skill;
      this.startDate = new Date(this.batches[i].startDate);
      this.endDate = new Date(this.batches[i].endDate);
      j++;
      if (j == this.colors.length) {
        j = 0;
      };
      this.ev= {
        title: this.title,
        start: this.startDate,
        end: this.endDate,
        borderColor: this.colors[j],
        backgroundColor: this.colors[j]};
      this.eventList.push(this.ev);
     
    };
    }
}