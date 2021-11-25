import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Params, Router, RouterStateSnapshot} from '@angular/router';
import {RegisterService} from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userFullName = new FormControl('', [Validators.required]);
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userPass = new FormControl('', [Validators.required, passwordValidator()]);
  userPassConfirm = new FormControl('', [Validators.required, passwordValidator()]);

  registerParams: Params;

  registerForm: FormGroup = new FormGroup({
    'userFullName': this.userFullName,
    'userEmail': this.userEmail,
    'userPass': this.userPass,
    'userPassConfirm': this.userPassConfirm
  });

  hide = [true, true];
  buttonDisabled = false;

  constructor(private router: Router, private goodRegisterService: RegisterService) {
    this.registerParams = router.routerState.snapshot.root.children[0].params;
  }

  ngOnInit() {
  }

  getFormError(formController: FormControl) {
    return formController.hasError('required') ? 'Field cannot be blank.' :
      formController.hasError('email') ? 'Please enter an email.' :
        formController.hasError('notStrong') ?
          'Password must contain an uppercase letter, a numeric character, a special character and must be longer than 8 characters' : '';
  }

  async register() {
    if (this.registerForm.valid) {
      this.buttonDisabled = true;
      await this.goodRegisterService.sendRegisterRequest(this.registerForm, this.registerParams);
      this.buttonDisabled = false;
    }
  }
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const testValue = control.value.toString();
    let forbidden = false;
    forbidden = testValue.match(/[A-Z]+/) ? forbidden : true;
    forbidden = testValue.match(/[a-z]+/) ? forbidden : true;
    forbidden = testValue.match(/[0-9]+/) ? forbidden : true;
    forbidden = testValue.match(/[!@#$%^&*]+/) ? forbidden : true;
    forbidden = testValue.length >= 8 ? forbidden : true;
    return forbidden ? {'notStrong': true} : null;
  };
}
