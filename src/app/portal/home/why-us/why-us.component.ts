import { Component, OnInit } from '@angular/core';
import { OrbitComponent } from 'src/app/shared/components/orbit/orbit.component';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [OrbitComponent],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.sass']
})
export class WhyUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
