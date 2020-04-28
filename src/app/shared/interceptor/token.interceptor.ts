import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/user/services/authorization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorizationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getUserInfo();
    if (token) {
      request = request.clone({
          setHeaders: {
              Authorization: token
          }
      });
    }
    return next.handle(request);
  }
}
