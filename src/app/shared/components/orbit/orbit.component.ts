import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbit',
  standalone: true,
  imports:[CommonModule],
  template: `
  <div id="circle" [ngStyle]="stylesCircle">
    <div class="point"></div>
    <div class="point"></div>
  </div>
  `,
  styleUrls: ['./orbit.component.sass']
})
export class OrbitComponent implements OnInit {
  @Input() stylesCircle!: Object;
  constructor() { }

  ngOnInit(): void {
  }

}
