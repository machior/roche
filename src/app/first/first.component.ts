import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  boxes = [];
  boxesLimit = 100;

  ngOnInit(): void {
    for (let i = 0; i < this.boxesLimit; ++i) {
      this.boxes.push({
        id: i
      });
    }
  }

  deleteItem(data: {id: number}): void {
    this.boxes = this.boxes.filter(elem => elem.id !== data.id);
  }
}
