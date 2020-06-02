import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  UrlSegment,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { Route } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private authservice: AuthService, private router:Router){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.authservice.userIsAuthenticated) {
      this.router.navigateByUrl('/auth');
      
    }
    return this.authservice.userIsAuthenticated;
  }
}
