import {Component, OnInit, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SongDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
