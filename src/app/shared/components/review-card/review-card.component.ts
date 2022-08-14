import { Component, Input, OnInit } from '@angular/core';

import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.sass'],
})
export class ReviewCardComponent implements OnInit {
  @Input() user!: { name: string; path: string };
  constructor() {}

  ngOnInit(): void {}
}
