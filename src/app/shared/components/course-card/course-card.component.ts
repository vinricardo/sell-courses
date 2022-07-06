import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-card',
  standalone: true,
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass']
})
export class CourseCardComponent implements OnInit {
  @Input() numberCard! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
