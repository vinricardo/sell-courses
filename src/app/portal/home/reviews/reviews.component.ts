import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReviewCardComponent } from 'src/app/shared/components/review-card/review-card.component';

import { data } from './../../../shared/data/reviews';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewCardComponent, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass'],
})
export class ReviewsComponent implements OnInit {
  reviews$: Observable<any> = of(data);
  constructor() {}
  ngOnInit(): void {}
}
