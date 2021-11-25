import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../core/shared/services/auth.service';
import {filter, timeout} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userPass = new FormControl('', [Validators.required]);

  hide = true;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.getCurUser().pipe(timeout(650), filter(user => user !== null)).subscribe(user => {
      this.router.navigate(['catalog']);
    }, error => {
    });
  }

  getFormError(formController: FormControl) {
    return formController.hasError('required') ? 'Field cannot be blank.' :
      formController.hasError('email') ? 'Please enter an email.' :
        formController.hasError('auth') ? 'Password or username wrong.' : '';
  }

  login() {
    this.authService.doLogin(this.email.nativeElement.value, this.password.nativeElement.value).then(() => {
        this.authService.correctLogin();
      }
    ).catch(e => {
      this.userPass.setErrors({auth: 'Password or username wrong.'});
    });
  }

  loginWithGoogle() {
    this.authService.doLoginGoogle();
  }

}
