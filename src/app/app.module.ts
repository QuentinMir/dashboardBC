import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorComponent} from './views/error/error.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {DateComponent} from './components/date/date.component';
import {NumbersComponent} from './components/numbers/numbers.component';
import {LinechartComponent} from './components/linechart/linechart.component';
import {PiechartComponent} from './components/piechart/piechart.component';
import {SumupTableComponent} from './components/sumup-table/sumup-table.component';
import {NgChartsModule} from 'ng2-charts';
import {AuthComponent} from './views/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    DateComponent,
    NumbersComponent,
    LinechartComponent,
    PiechartComponent,
    SumupTableComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
