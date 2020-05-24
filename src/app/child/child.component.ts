import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  decrement() {
    this.counterChange.emit(--this.counter);
  }

}
