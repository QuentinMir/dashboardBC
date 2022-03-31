import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/DataModel';
import { DataService } from '../../services/data/data.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-sumup-table',
  templateUrl: './sumup-table.component.html',
  styleUrls: ['./sumup-table.component.css'],
})
export class SumupTableComponent implements OnInit {
  @Input() data!: DataModel;

  productNames: Array<any>;
  nbOfUnits: Array<any>;
  categoryNames: Array<any>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor() {
    this.productNames = [];
    this.nbOfUnits = [];
    this.categoryNames = [];
  }



  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.productNames =this.data.productName;
    this.nbOfUnits = this.data.nbOfUnits;
    this.categoryNames = this.data.categoryName;

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
