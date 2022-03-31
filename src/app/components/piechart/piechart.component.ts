import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
})
export class PiechartComponent implements OnInit {
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;
  @Input() newClients!: number;
  @Input() existingClients!: number;

  constructor() {}

  ngOnInit(): void {
    this.type = 'pie';

    this.labels = ['Clients existants', 'Nouveaux Clients'];

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [this.existingClients, this.newClients],
        backgroundColor: ['Blue', 'Green'],
      },
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Récurrence commande client',
        },
      },
    };
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnChanges(): void {
    if (this.datasets) {
      this.datasets[0].data = [this.existingClients, this.newClients];

      this.chart?.update();
    }
  }
}
