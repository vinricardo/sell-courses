import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  optionsMenu = [
    {name:'HOME',redirect:'#first-piece'},
    {name:'ABOUT',redirect:'#about-us'},
    {name:'COURSES',redirect:'#list-courses'},
    {name:'BLOG',redirect:'#form'}
  ]
  selectedOption = this.optionsMenu[0]
  constructor() { }

  ngOnInit(): void {
  }

  scroll(id:string){
   document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
