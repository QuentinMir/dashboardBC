import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  @Input() dataCard: number;
  @Input() symbol: string;
  @Input() title: string;

  constructor() {
    this.dataCard = 0;
    this.symbol = '';
    this.title = '';
  }

  ngOnInit(): void {}
}
