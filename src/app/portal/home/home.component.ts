import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { InviteComponent } from './invite/invite.component';
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
  @ViewChild('invite', { read: ViewContainerRef }) entryInvite?: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.entryPresentation?.createComponent(PresentationComponent);
    this.entryStats?.createComponent(StatsComponent);
    this.entryInvite?.createComponent(InviteComponent);
  }
}
