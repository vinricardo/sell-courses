import { Component, OnInit } from '@angular/core';
import { OrbitComponent } from 'src/app/shared/components/orbit/orbit.component';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  standalone: true,
  imports:[OrbitComponent],
  styleUrls: ['./invite.component.sass']
})
export class InviteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
