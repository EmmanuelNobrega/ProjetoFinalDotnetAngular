import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() imagem: string = "https://drive.google.com/file/d/1IcB9AyvKHiOn8gSwCjmJK5t6P8ZTdfVr/view?usp=sharing";
  constructor() { }

  ngOnInit(): void {
  }

}
