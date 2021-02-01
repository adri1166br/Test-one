import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
 /* templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']*/
  template:`<h3>Главная</h3>`
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
