import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { Trainer } from 'src/app/class/trainer'
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';


const colors: Array<any> = [
  {
    primary: '#FF0000',
    secondary: '#FF0000'
},
  {
    primary: '#00FF00',
    secondary: '#00FF00'
  },
  {
    primary: '#FFFF00',
    secondary: '#FFFF00'
  },
  {
    primary: '#FFA500',
    secondary: '#FFA500'
  },
  {
    primary: '#0000FF',
    secondary: '#0000FF'
  }
]


@Component({
  selector: 'app-calendar',

  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  colorCount: number = 0;

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  trainer: Trainer;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    
  ];

  activeDayIsOpen: boolean = true;


  constructor(private modal: NgbModal, private batchServ: GetBatchService) { }
  batches: Array<any>;
  ngOnInit(): void {
    
    this.batchServ.getBatches().subscribe(
      (response) => {
        this.batches = response;
        this.batchList();

      }
    )
  }

  bTitle: string;
  bStartDate: Date = null;
  bEndDate: Date;
  bStartDateString: string;
  bEndDateString: string;

  batchList() {
    let j = 0;
    for (let i = 0; i < this.batches.length; i++) {
      this.bTitle = this.batches[i].batchName + " " + this.batches[i].skill;
      this.bStartDateString = this.batches[i].startDate;
      this.bStartDate = new Date(this.bStartDateString);
      this.bEndDateString = this.batches[i].endDate;
      this.bEndDate = new Date(this.bEndDateString);
      this.addEventtest(colors[j]);
      j++;
      if (j == colors.length) {
        j = 0;
      };
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  getColor(): any{
    for (this.colorCount; this.colorCount < colors.length; this.colorCount++) {
      if (this.colorCount == 4 ) {
        this.colorCount = 0;
      }

      return colors[this.colorCount];
    }
  }

  addEventtest(colors:any): void {
    this.events = [
      ...this.events,
      {
        title: this.bTitle,
        start: this.bStartDate,
        end: this.bEndDate,
        color: colors
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}

