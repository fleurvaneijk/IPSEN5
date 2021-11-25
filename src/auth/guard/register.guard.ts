import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {RegisterService} from '../service/register.service';
import {AuthService} from '../../core/shared/services/auth.service';
import {filter, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(private router: Router, private registerService: RegisterService, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(resolve => {
      let curUser;
      this.authService.getCurUser().pipe(timeout(650), filter(user => user !== null)).subscribe(user => {
        curUser = user;
        this.router.navigate(['catalog']);
      }, error => {
        if (!!curUser) {
          this.registerService.canRegister(state.root.children[0].params).then(value => {
            if (!value) {
              this.router.navigate(['login']);
            } else {
              resolve(true);
            }
          });
        }
      });
    });
  }
}
