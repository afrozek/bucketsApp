import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
    .options-button {
      border-radius: 8px;
      border: 1px solid #E0E0E0;
      color: #adadad;
      padding: 2px 15px;
      background: white;
      font-size: 12px;
      box-shadow: 0;
      transition: .3s;

      &:hover {
          box-shadow: 0px 1px 3px 0px #ebefed;
          color: #828687;
          border-color: #c3c3c3;
      }
  }
  `]
})
export class DatepickerRangeComponent {
  @ViewChild('myDrop') myDrop;
  @Output() dateSelected: EventEmitter<any> = new EventEmitter();

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if(this.toDate && this.fromDate) {
      this.myDrop.close();
      console.log("selected")
      this.dateSelected.emit({from: this.toDate, to: this.toDate})
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}
