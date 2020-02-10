import { Component, OnInit, OnDestroy } from '@angular/core';
import { SecondService } from '../services/second.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnDestroy {

  data;
  private subscriptions = new Subscription().add(
    this.service.getData().subscribe(data => this.data = data)
  );

  constructor(
    private readonly service: SecondService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private assign() {
    
  }
}
