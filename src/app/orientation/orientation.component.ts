import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent {

  items = [
    'ITEM 1',
    'ITEM 2',
    'ITEM 3',
    'ITEM 4',
    'ITEM 5',
    'ITEM 6',
    'ITEM 7'

  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }


}
