import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSelectModule, MatSlideToggleModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    ScrollingModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule

  ],
  exports: [
    MatSlideToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatRippleModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    ScrollingModule,
    MatTooltipModule
  ]
})
export class MatModule {
}
