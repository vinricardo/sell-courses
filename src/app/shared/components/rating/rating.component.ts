import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass'],
})
export class RatingComponent implements OnInit {
  @Input() rating!: number;
  constructor() {}

  ngOnInit(): void {
    this.rating = Math.floor(this.rating);
  }

  counter(i: number) {
    return new Array(i);
  }
}
