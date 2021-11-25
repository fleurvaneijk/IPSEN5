import {Component, OnInit} from '@angular/core';
import {Song} from '../model/song';
import {CatalogService} from '../service/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  songs: Song[] = [];
  displaySongs: Song[];
  isLoaded = false;

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.songs = [];
    this.catalogService.getSongsFromFirebase();
    this.songs = this.catalogService.songs;
    this.clearFilter();
    this.isLoaded = true;
  }

  filterSongs(event) {
    const searchValue = event.target.value.toUpperCase();

    const list = this.songs;
    const outputList = [];

    for (let i = 0; i < list.length; i++) {
      const songTitle = list[i].title;
      const songArtist = list[i].artist;
      const songGenre = list[i].genre;
      const songTags = list[i].tags;
      if (songTitle.toUpperCase().indexOf(searchValue) > -1) {
        outputList.push(list[i]);
      } else if (songArtist.toUpperCase().indexOf(searchValue) > -1) {
        outputList.push(list[i]);
      } else if (songGenre.toUpperCase().indexOf(searchValue) > -1) {
        outputList.push(list[i]);
      } else if (songTags.toUpperCase().indexOf(searchValue) > -1) {
        outputList.push(list[i]);
      }
    }
    this.displaySongs = outputList;
  }

  clearFilter() {
    this.displaySongs = this.songs;
  }
}
