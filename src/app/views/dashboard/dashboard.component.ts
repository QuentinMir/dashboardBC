import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {DataModel} from '../../models/DataModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data!: DataModel;
  percentageOne!: number;
  isLoading: boolean;
  soldProducts: number;

  constructor(private dataService: DataService) {
    this.isLoading = true;
    this.soldProducts = 0;
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: DataModel) => {

      this.data = data;

      this.isLoading = false;
      this.soldProducts = this.data.nbOfUnits.reduce((a, b) => a + Number(b), 0)

      this.percentageOne = Math.round(
        (this.data.visits.reduce((a, b) => a + b, 0) /
          this.data.createdCarts.reduce((a, b) => a + b, 0))
      );

    });

    /*    this.dataService.data.subscribe((data: DataModel) => {
          this.data = data;
          this.percentageOne = Math.round(
            (this.data.visits.reduce((a, b) => a + b, 0) /
              this.data.createdCarts.reduce((a, b) => a + b, 0)) *
              100
          );
        });*/
  }


}
