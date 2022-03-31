import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnInit, OnChanges {
  @Input() lineOne: string;
  @Input() lineTwo: string;
  @Input() title: string;
  @Input() percentage!: number;

  @Input() lineOneData: number[];
  @Input() lineTwoData: number[];

  lineChartData!: ChartConfiguration['data'];

  lineChartOptions!: ChartConfiguration['options'];

  lineChartType: ChartType = 'line';

  constructor() {
    this.lineOne = '';
    this.lineTwo = '';
    this.lineOneData = [];
    this.lineTwoData = [];
    this.title = '';
  }

  ngOnInit(): void {
    this.lineChartData = {
      datasets: [
        {
          data: this.lineOneData,
          label: this.lineOne,
          backgroundColor: 'transparent',
          borderColor: '#21D59B',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: this.lineTwoData,
          label: this.lineTwo,
          backgroundColor: 'transparent',
          borderColor: '#0058FF',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin',
        },
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aout', 'Septembre', 'Novembre', 'Décembre'],
    };

    this.lineChartOptions = {
      elements: {
        line: {
          tension: 0.5,
        },
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0': {
          position: 'left',
        },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: '#000000',
          },
          ticks: {
            color: 'red',
          },
        },
      },
    };
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnChanges(): void {
    if (this.lineChartData) {
      this.lineChartData.datasets[0].data = this.lineOneData;
      this.lineChartData.datasets[1].data = this.lineTwoData;

      this.chart?.update();
    }
  }
}
