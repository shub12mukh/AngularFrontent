import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector) { }
  //Intercept method takes two arghuments, oen is the req, and the other one is next to pass on the execution 
  intercept(req,next){
    let AuthService = this.injector.get(AuthenticationService);

    //Cloning the req
    let token = req.clone({
      setHeaders : {
        Authorization : `Bearer ${AuthService.getTokenFromLocalStorage()}`
      }
    });
    return next.handle(token) ;
  }
}
