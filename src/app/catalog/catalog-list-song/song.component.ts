import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../model/song';
import {MatDialog} from '@angular/material';
import {CartService} from '../../cart/service/cart.service';
import {AuthService} from '../../core/shared/services/auth.service';
import {Toast, ToastrService} from 'ngx-toastr';
import {User} from '../../core/shared/models/user.model';
import {SongDetailsComponent} from '../dialog/song-details/song-details.component';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() song: Song;
  user: User;

  constructor(public dialog: MatDialog, private cartService: CartService, private auth: AuthService,
              private toast: ToastrService) {
    this.auth.getCurUser().subscribe((data: User) => {
      this.user = data;
    });
  }

  ngOnInit() {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(SongDetailsComponent, {
      width: '500px',
      data: {
        title: this.song.title,
        artist: this.song.artist,
        image: this.song.image,
        genre: this.song.genre,
        duration: this.song.duration,
        tags: this.song.tags,
        key: this.song.key,
        speed: this.song.speed,
        extraInfo: this.song.extraInfo
      }
    });
  }

  buySong(song) {
    if (this.user.role === 'Admin') {
      this.toast.warning('Admins can\'t buy songs', 'Warning');
      return;
    }

    for (const order of this.user.orderHistory) {
      if (song.id == order.songId) {
        this.toast.error('You already own this song', 'Error');
        return;
      }
    }

    this.cartService.addToCart(song);
  }
}
