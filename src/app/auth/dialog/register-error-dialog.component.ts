import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface ErrorRegisterDialogComponentData {
  errorTitle: string;
  errorMessage: string;
}

@Component({
  template: `
    <h1 mat-dialog-title>{{data.errorTitle}}</h1>
    <div mat-dialog-content>
      <p>{{data.errorMessage}}</p>
    </div>
    <div mat-dialog-content>
      <p id="reg-error-btn">
        <button mat-raised-button color="primary" (click)="goBack()">Ok</button>
      </p>
    </div>
  `,
  styles: [`
    #reg-error-btn {
      width: fit-content;
      margin: 20px 0 0 auto;
    }
  `]
})

export class RegisterErrorDialogComponent {

  constructor(public dialogRef: MatDialogRef<RegisterErrorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ErrorRegisterDialogComponentData) {
  }

  goBack(): void {
    this.dialogRef.close();
  }
}
