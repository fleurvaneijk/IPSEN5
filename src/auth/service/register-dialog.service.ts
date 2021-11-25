import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {RegisterErrorDialogComponent} from '../dialog/register-error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterDialogService {

  constructor(public dialog: MatDialog) {

  }

  showError(errorTitle: string, errorMessage: string): void {
    const dialogRef = this.dialog.open(RegisterErrorDialogComponent, {
      maxWidth: '80%',
      width: '100vw',
      closeOnNavigation: false,
      disableClose: true,
      data: {
        errorTitle: errorTitle,
        errorMessage: errorMessage
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
