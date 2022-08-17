import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrbitComponent } from 'src/app/shared/components/orbit/orbit.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [OrbitComponent,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
