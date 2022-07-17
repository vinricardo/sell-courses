import { Component, OnInit } from '@angular/core';

import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.sass'],
})
export class ReviewCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
