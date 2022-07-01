import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { PresentationComponent } from './presentation/presentation.component';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  @ViewChild('presentation', { read: ViewContainerRef })
  entryPresentation?: ViewContainerRef;
  @ViewChild('stats', { read: ViewContainerRef }) entryStats?: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.entryPresentation?.createComponent(PresentationComponent);
    this.entryStats?.createComponent(StatsComponent);
  }
}
