import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, throwError, catchError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserModel} from "../../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string;
  headers = new HttpHeaders();
  currentUser: {};
  isConnected: BehaviorSubject<boolean>;


  constructor(private http: HttpClient, private router: Router) {
    this.endpoint = 'http://localhost:8000/api';
    this.headers.set('Content-Type', 'application/json');
    this.currentUser = {};
    this.isConnected = new BehaviorSubject<boolean>(false);
  }

  // method to connect the user using the token
  signIn(user: UserModel) {

    return this.http
      .post<any>(`${this.endpoint}/authentication_token`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUserProfile().subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/dashboard']).then();
        });
      });
  }

  //method to sign out the user
  signOut() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']).then();
    }
}


  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserProfile(): Observable<UserModel> {
    let api = `${this.endpoint}/current-user/`;

    return this.http.get<UserModel>(api, {headers: this.headers}).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    this.isConnected.next(true);
    return authToken !== null;
  }


  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => msg);
  }

}
