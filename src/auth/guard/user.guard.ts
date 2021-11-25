import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/shared/services/auth.service';
import {filter, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(resolve => {
      let curUser;
      this.authService.getCurUser().pipe(timeout(650), filter(user => user !== null)).subscribe(user => {
        curUser = user;
        if (this.isAuthorised(user.role)) {
          resolve(true);
        } else {
          this.router.navigate(['catalog']);
        }
      }, error => {
        if (!curUser) {
          this.router.navigate(['login']);
        }
      });
    });
  }

  isAuthorised(userRole: string) {
    return 'User' === userRole || 'Vip' === userRole;
  }
}
