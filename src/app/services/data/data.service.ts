import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DataModel} from '../../models/DataModel';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private apiUrl = 'http://localhost:8000/api/data'

  /* data!: BehaviorSubject<DataModel>;*/

  constructor(private http: HttpClient) {

    /* const data = new DataModel(
       this.randomInt(1000, 4000),
       this.randomInt(50, 600),
       this.randomInt(50, 60),
       this.randomInt(5, 200),
       this.randomInt(5, 50),
       this.randomInt(50, 300),

       [
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
       ],

       [
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
       ],

       [
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
         this.randomInt(1, 100),
       ],

       ['product1', 'product2', 'product3'],
       [
         this.randomInt(2000, 4000),
         this.randomInt(1000, 3000),
         this.randomInt(500, 8000),
       ],
       ['category1', 'category2', 'category3']
     );

     this.data = new BehaviorSubject<DataModel>(data);*/
  }

  getData(): Observable<DataModel> {
    return this.http.get<DataModel>(this.apiUrl);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*randomizeAllData(): void {
    const data = this.data.getValue();

    data.totalSales = this.randomInt(1000, 4000);
    (data.totalCarts = this.randomInt(50, 600)),
      (data.totalOrders = this.randomInt(50, 60)),
      (data.avgCart = this.randomInt(5, 200)),
      (data.newClient = this.randomInt(5, 50)),
      (data.existingClient = this.randomInt(50, 300)),
      (data.visits = [
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
      ]),
      (data.createdCarts = [
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
        this.randomInt(1, 100),
      ])


    this.data.next(data);
  }*/
}
