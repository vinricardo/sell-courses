import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from 'src/app/shared/components/course-card/course-card.component';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.sass']
})
export class ListCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
