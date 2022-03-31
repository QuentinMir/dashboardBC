import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getToken();
    let clonedRequest;

    if (authToken) {
      clonedRequest = request.clone({
        headers: request.headers.append('Authorization', 'Bearer ' + authToken)
      });
    } else {
      clonedRequest = request.clone();
    }

    return next.handle(clonedRequest);
  }

}
