import { Component, OnInit } from '@angular/core';
import { ReviewCardComponent } from 'src/app/shared/components/review-card/review-card.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
