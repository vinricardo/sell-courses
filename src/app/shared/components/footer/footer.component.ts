import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  aboutSections = [
    'History',
    'Our team',
    'Mission Statement',
    'Terms & Condition',
    'Privacy Policy'
  ]
  whatWeDoSections = [
    'News and stories',
    'Publications',
    'Take action',
    'Recomendations',
    'Help'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
