import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { PresentationComponent } from './presentation/presentation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @ViewChild('presentation', { read: ViewContainerRef }) entryPresentation?: ViewContainerRef

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
   this.entryPresentation?.createComponent(PresentationComponent)
  }
}
