import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { Calendar } from '@fullcalendar/core';
import { Trainer } from 'src/app/class/trainer';


@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  // eventList= [];
  // calendarOptions: CalendarOptions={ handleWindowResize:true, contentHeight:"auto"};
  // batches:Array<any>;
  // title: string;
  // startDate: Date;
  // endDate: Date;
  // ev: {};
  // colors =['#3584f2','#4bc984','#fcc54e','#20c9be','#f56c42',];
  // evColor: string;
  // trainer: Trainer;

  constructor(private batchServ: GetBatchService) { }

  dataSource: Data[

  ];


  ngOnInit(){
  //   setTimeout(() => {
  //     this.calendarOptions = {
  //       contentHeight:"auto",
  //       handleWindowResize:true,
  //       initialView:'resourceTimelineYear',
  //       dateClick: this.handleDateClick.bind(this), // bind is important!
  //       events: this.eventList,
  //       views: {
  //         resourceTimelineYear: {
  //           type: 'resourceTimeline'
  //         }
  //       }
  //     }

  //   this.batchServ.getBatches().subscribe(
  //     (response) => {
  //       this.batches = response;
  //       this.createEvents();
  //     });
  // },2000);
//   setTimeout(() => {
//   // this.calendarOptions = {
//   //   contentHeight:"auto",
//   //   handleWindowResize:true,
//   //   initialView: 'dayGridMonth',
//   //   dateClick: this.handleDateClick.bind(this), // bind is important!
//   //   events: this.eventList,


//   // };

// },3000);
//   }
  // handleDateClick(arg) {
  //   alert(arg.dateStr)
  // }


  // createEvents() {
  //   let j = 0;
  //   for (let i = 0; i < this.batches.length; i++) {
  //     this.title = this.batches[i].batchName + " " + this.batches[i].skill;
  //     this.startDate = new Date(this.batches[i].startDate);
  //     this.endDate = new Date(this.batches[i].endDate);
  //     j++;
  //     if (j == this.colors.length) {
  //       j = 0;
  //     };
  //     this.ev= {
  //       title: this.title,
  //       start: this.startDate,
  //       end: this.endDate,
  //       borderColor: this.colors[j],
  //       backgroundColor: this.colors[j]};
  //     this.eventList.push(this.ev);


  //   };

  this.dataSource = [
    {
        monarch: "Anne",
        start: new Date(1701, 4, 1),
        end: new Date(1714, 7, 1),
        house: "Stuart"
    },
    {
        monarch: "George I",
        start: new Date(1714, 7, 1),
        house: "Hanover",
        end: new Date(1727, 5, 11)
    },
    {
        monarch: "George II",
        start: new Date(1727, 5, 11),
        house: "Hanover",
        end: new Date(1760, 9, 25)
    },
    {
        monarch: "George III",
        start: new Date(1760, 9, 25),
        house: "Hanover",
        end: new Date(1820, 0, 29)
    },
    {
        monarch: "George IV",
        start: new Date(1820, 0, 29),
        house: "Hanover",
        end: new Date(1830, 5, 26)
    },
    {
        monarch: "William IV",
        start: new Date(1830, 5, 26),
        house: "Hanover",
        end: new Date(1837, 5, 20)
    },
    {
        monarch: "Victoria",
        start: new Date(1837, 5, 20),
        end: new Date(1901, 0, 22),
        house: "Hanover"
    },
    {
        monarch: "Edward VII",
        start: new Date(1901, 0, 22),
        house: "Saxe-Coburg and Gotha",
        end: new Date(1910, 4, 6)
    },
    {
        monarch: "George V",
        start: new Date(1910, 4, 6),
        house: "Saxe-Coburg and Gotha",
        end: new Date(1917, 5, 17)
    },
    {
        monarch: "George V",
        start: new Date(1917, 5, 17),
        house: "Windsor",
        end: new Date(1936, 0, 20)
    },
    {
        monarch: "Edward VIII",
        start: new Date(1936, 0, 20),
        house: "Windsor",
        end: new Date(1936, 11, 11)
    },
    {
        monarch: "George VI",
        start: new Date(1936, 11, 11),
        house: "Windsor",
        end: new Date(1952, 1, 6)
    },
    {
        monarch: "Elizabeth II",
        house: "Windsor",
        start: new Date(1952, 1, 6),
        end: new Date()
    },
    {
        house: "Stuart",
        start: new Date(1701, 4, 1),
        end: new Date(1714, 7, 1),
        monarch: "Royal Houses"
    },
    {
        end: new Date(1901, 0, 22),
        house: "Hanover",
        start: new Date(1714, 7, 1),
        monarch: "Royal Houses"
    },
    {
        start: new Date(1901, 0, 22),
        end: new Date(1917, 5, 17),
        house: "Saxe-Coburg and Gotha",
        monarch: "Royal Houses"
    },
    {
        house: "Windsor",
        start: new Date(1917, 5, 17),
        end: new Date(),
        monarch: "Royal Houses"
    }
  ]


  }
}
class Data {
  house: string;
  monarch: string;
  start: Date;
  end: Date;
}
