import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  items = [
    'ITEM 1',
    'ITEM 2',
    'ITEM 3',
    'ITEM 4',
    'ITEM 5',
    'ITEM 6',
    'ITEM 7',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit() {
  }

}
