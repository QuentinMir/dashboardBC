import {Component} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {DataModel} from "./models/DataModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Administration Dashboard';

  isConnected!: boolean;

  constructor(private authService: AuthService) {
  };

  ngOnInit(): void {
    this.authService.isConnected.subscribe((isConnected: boolean) => {
      this.isConnected = isConnected;
    })
  }

  logingOut() {
    this.authService.signOut()
  }
}
