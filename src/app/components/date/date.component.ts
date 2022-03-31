import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

/*  onClickRandomize(): void {
    this.dataService.randomizeAllData();
  }*/
}
