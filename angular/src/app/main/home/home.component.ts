import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { typeoptions } from '../constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  colors = ["red", "green", "blue", "yellow", "purple", "orange", "brown", "pink"];
  color = 0

  ngOnInit(): void {
      // const typed = new Typed('.typed-element', typeoptions);
      setInterval(()=> { this.changeColor() }, 1 * 1000);
  }

  getColor(): string {
    // console.log(this.color);
    return this.colors[this.color];
  }

  changeColor() {
    // console.log("t");
    this.color = Math.floor(Math.random() * this.colors.length)
  }


}
