import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Params, Router} from '@angular/router';
import {RegisterDialogService} from './register-dialog.service';

class ResponseCreated {
  correct: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseFireStoreUrl = 'https://us-central1-hexagon-4d246.cloudfunctions.net';

  constructor(public http: HttpClient, private router: Router, private registerDialog: RegisterDialogService) {
  }

  async sendRegisterRequest(registerForm: FormGroup, registerParams: Params) {
    await new Promise(resolve => {
      this.postRegisterUser(registerForm, registerParams).subscribe((response: any) => {
        if (response.success) {
          this.registerDialog.showError('Success', 'You are now registered');
          this.router.navigate(['user-music']);
          resolve(true);
        } else {
          switch (response.error) {
            case 'Referral code used':
              this.registerDialog.showError('Error', 'Referral code is already used');
              this.router.navigate(['login']);
              break;
            case 'Firestore error':
              this.registerDialog.showError('Connection error', 'Please try later again');
              break;
            case 'Auth error':
              this.registerDialog.showError('Connection error', 'Please try later again');
              break;
            case 'Update invite-link':
              this.registerDialog.showError('Connection error', 'Please try later again');
              break;
          }
          resolve(true);
        }
      });
    });
  }

  postRegisterUser(body: FormGroup, registerParams: Params) {
    const urlPath = this.baseFireStoreUrl + '/refCode/' + registerParams.part1 + '/' + registerParams.part2 + '/' + registerParams.part3;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(urlPath, body.value, httpOptions);
  }

  canRegister(registerParams: Params): Promise<boolean> {
    return new Promise(resolve => {
      this.getCanUseCode(registerParams).subscribe((response: ResponseCreated) => {
        resolve(response.correct);
      });
    });
  }

  getCanUseCode(registerParams: Params) {
    const urlPath = this.baseFireStoreUrl + '/refCode/' + registerParams.part1 + '/' + registerParams.part2 + '/' + registerParams.part3;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(urlPath, httpOptions);
  }
}
