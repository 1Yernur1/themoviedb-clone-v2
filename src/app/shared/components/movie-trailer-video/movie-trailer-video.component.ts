import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-trailer-video',
  templateUrl: './movie-trailer-video.component.html',
  styleUrls: ['./movie-trailer-video.component.scss'],
})
export class MovieTrailerVideoComponent implements OnInit {
  key: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.addVideoPlayer();
    this.getKey();
  }

  addVideoPlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getKey() {
    this.route.paramMap.subscribe((params: any) => {
      this.key = params.get('key');
    });
  }
}
