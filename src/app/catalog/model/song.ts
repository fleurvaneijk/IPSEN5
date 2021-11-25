export class Song {

  public id: string;
  public audio: string; // .mp3 file
  public preview: string; // preview .mp3 file of the song
  public image: string; // the image file
  public license: string; // the license .pdf

  public title: string;
  public artist: string;

  public genre: string;
  public duration: string;
  public price: number;
  public tags: string;
  public speed: number; // in BPM
  public key: string;
  public extraInfo: string;


  constructor(id: string, title: string, artist: string, audio: string, preview: string, image: string, license: string, genre: string,
              duration: string, price: number, tags: string, speed: number, key: string, extraInfo: string) {
    this.id = id;
    this.audio = audio;
    this.preview = preview;
    this.image = image;
    this.license = license;

    this.title = title;
    this.artist = artist;

    this.genre = genre;
    this.duration = duration;
    this.price = price;
    this.tags = tags;
    this.speed = speed;
    this.key = key;
    this.extraInfo = extraInfo;
  }
}
